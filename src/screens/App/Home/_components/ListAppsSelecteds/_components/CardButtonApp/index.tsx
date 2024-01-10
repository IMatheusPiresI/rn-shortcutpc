import React, { useCallback, useEffect, useMemo } from 'react';
import * as S from './styles';
import { IApp } from 'mocks/appList';
import { ServerPCService } from 'services/serverPC';
import { verifyURL } from 'resources/utils/verifyURL';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import lodash from 'lodash';
import EditSVG from '@assets/edit.svg';
import { useNavigation } from '@react-navigation/native';
import { useErrorControlContext } from 'contexts/ErrorControl';

type IProps = {
  app: IApp;
  selectedAppOption: boolean;
  onStartSelectApps: () => void;
  cancelSelectApps: () => void;
  selectedApps: IApp[];
  onSelectApp: (app: IApp) => void;
};

export const CardButtonApp: React.FC<IProps> = ({
  app,
  selectedAppOption,
  selectedApps,
  onSelectApp,
  cancelSelectApps,
  onStartSelectApps,
}) => {
  const { openModalError } = useErrorControlContext();
  const animationSelectApp = useSharedValue(0);
  const navigation = useNavigation();

  const handleOpenApp = async () => {
    try {
      if (app.appOpenningOptions?.app) {
        await ServerPCService.postOpenAppSelected({
          id: app.id,
          name: app.name,
          appOpenningOptions: {
            app: {
              id: app.appOpenningOptions.app?.id,
              name: app.appOpenningOptions.app?.name,
              selected: app.appOpenningOptions.app?.selected,
            },
          },
        });
      }
      if (app.appOpenningOptions.web && app.url) {
        await ServerPCService.postOpenAppSelected({
          id: app.id,
          name: app.name,
          url: app.url,
          appOpenningOptions: {
            web: app.appOpenningOptions.web.map((navigator) => ({
              id: navigator.id,
              name: navigator.name,
              selected: navigator.selected,
            })),
          },
        });
      }
    } catch (err) {
      openModalError();
    }
  };

  const rAnimatedAppearSelectBox = useAnimatedStyle(() => ({
    opacity: interpolate(animationSelectApp.value, [0, 1], [0, 1]),
    width: `${interpolate(animationSelectApp.value, [0, 1], [0, 100])}%`,
    height: `${interpolate(animationSelectApp.value, [0, 1], [0, 100])}%`,
    overflow: 'hidden',
  }));

  const handleSelectApp = () => {
    onStartSelectApps();
  };

  const verifySelectApp = useCallback(() => {
    if (selectedAppOption) {
      animationSelectApp.value = withTiming(1, { duration: 400 });
      return;
    }
    animationSelectApp.value = withTiming(0, { duration: 400 });
  }, [selectedAppOption]);

  const isSelected = useMemo(() => {
    return selectedApps.some((selectedApp) => selectedApp.name === app.name);
  }, [selectedApps]);

  const handleConfigApp = () => {
    cancelSelectApps();
    navigation.navigate('EditConfigApp', {
      app: lodash.cloneDeep(app),
    });
  };

  useEffect(() => {
    verifySelectApp();
  }, [verifySelectApp]);
  return (
    <S.Container
      onPress={handleOpenApp}
      activeOpacity={0.6}
      onLongPress={handleSelectApp}
    >
      <S.BoxLogo>
        <S.LogoApp
          source={{
            uri: verifyURL(app.logo ?? ''),
          }}
          resizeMode="contain"
        />
      </S.BoxLogo>
      <S.BoxOnSelect style={rAnimatedAppearSelectBox}>
        <S.ButtonSelect onPress={() => onSelectApp(app)} activeOpacity={0.9}>
          <S.BoxSelect>{isSelected && <S.BoxSelected />}</S.BoxSelect>
          <S.BoxEdit onPress={handleConfigApp}>
            <EditSVG width={30} height={30} />
          </S.BoxEdit>
        </S.ButtonSelect>
      </S.BoxOnSelect>
    </S.Container>
  );
};
