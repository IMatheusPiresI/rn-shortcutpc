import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as S from './styles';

import { Button } from '@components/Button';
import { Typograph } from '@components/Typograph';

import ArrowBackSVG from '@assets/arrow-back.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { IApp, IOpenningOption } from 'mocks/appList';
import { CardAppSelect } from 'components/CardAppSelect';
import { useAppListConfiguration } from 'contexts/AppConfiguration';
import { verifyURL } from 'resources/utils/verifyURL';

const ConfigApp: React.FC = () => {
  const route = useRoute();
  const { app } = route.params as { app: IApp };
  const { setAppConfiguration, removeConfigurationApp } =
    useAppListConfiguration();
  const [appSelected, setAppSelected] = useState<IApp>(app);

  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const disabledButton = useMemo(() => {
    const hasNavigatorSelected = appSelected.appOpenningOptions?.web?.some(
      (navigator) => navigator.selected === true,
    );
    const hasAppSelected = appSelected.appOpenningOptions?.app?.selected;

    if (hasNavigatorSelected || hasAppSelected) {
      return false;
    }
    return true;
  }, [appSelected]);

  const handleChangeOptionOpenning = (openningOption: IOpenningOption) => {
    let openningOptionSelected = { ...app };

    if (openningOptionSelected.appOpenningOptions?.web) {
      const navigators = openningOptionSelected.appOpenningOptions.web.map(
        (navigator) => {
          if (navigator.id === openningOption.id) {
            navigator.selected = true;
          } else {
            navigator.selected = false;
          }
          return navigator;
        },
      );

      openningOptionSelected.appOpenningOptions.web = navigators;
    }
    if (openningOptionSelected.appOpenningOptions?.app) {
      if (
        openningOption.id === openningOptionSelected.appOpenningOptions.app.id
      ) {
        openningOptionSelected.appOpenningOptions.app.selected = true;
      } else {
        openningOptionSelected.appOpenningOptions.app.selected = false;
      }
    }

    setAppSelected(openningOptionSelected);
  };

  const handleConfirmConfigurationApp = async () => {
    setAppConfiguration(appSelected);
    navigation.goBack();
  };

  const handleRemoveSelectedAppConfiguration = () => {
    removeConfigurationApp(appSelected);
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.SafeArea>
        <S.SafeAreaContent>
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowBackSVG />
          </S.ButtonGoBack>
          <S.BoxLogo>
            <S.BoxLogoAppSelected>
              <S.Logo
                source={{
                  uri: verifyURL(app.logo),
                }}
                resizeMode="contain"
              />
            </S.BoxLogoAppSelected>
          </S.BoxLogo>
          <S.Content>
            <Typograph
              font="Roboto-Bold"
              fontSize={20}
              alignment="center"
              color="primary"
            >
              Selecione a forma que deseja abrir - {app.name}
            </Typograph>
            {appSelected?.appOpenningOptions?.web && (
              <S.BoxOptions>
                <Typograph font="Roboto-Bold" fontSize={16} color="primary">
                  Abrir com navegador:
                </Typograph>

                <S.BoxListOppeningOptions>
                  {appSelected.appOpenningOptions.web.map((navigator) => (
                    <CardAppSelect
                      app={navigator}
                      key={navigator?.id}
                      onPress={() => handleChangeOptionOpenning(navigator)}
                    />
                  ))}
                </S.BoxListOppeningOptions>
              </S.BoxOptions>
            )}
            {appSelected?.appOpenningOptions?.app && (
              <S.BoxOptions>
                <Typograph font="Roboto-Bold" fontSize={16} color="primary">
                  Abrir com aplicativo:
                </Typograph>
                <S.BoxListOppeningOptions>
                  <CardAppSelect
                    app={appSelected.appOpenningOptions.app}
                    onPress={() =>
                      handleChangeOptionOpenning(
                        appSelected.appOpenningOptions.app!,
                      )
                    }
                  />
                </S.BoxListOppeningOptions>
              </S.BoxOptions>
            )}
          </S.Content>
          <S.Footer>
            <Button
              title="Finalizar"
              onPress={handleConfirmConfigurationApp}
              disabled={disabledButton}
            />
            {appSelected.selected && (
              <Button
                title="Remover"
                onPress={handleRemoveSelectedAppConfiguration}
                variant="outline"
              />
            )}
          </S.Footer>
        </S.SafeAreaContent>
      </S.SafeArea>
    </S.Container>
  );
};

export default ConfigApp;
