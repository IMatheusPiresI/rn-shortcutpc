import React, { useCallback, useEffect, useMemo } from 'react';

import * as S from './styles';

import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { Typograph } from '@components/Typograph';

import ArrowBackSVG from '@assets/arrow-back.svg';
import { StackActions, useNavigation } from '@react-navigation/native';
import { CardApp } from 'components/CardApp';
import { useAppListConfiguration } from 'contexts/AppConfiguration';
import lodash from 'lodash';
import { ServerPCService } from 'services/serverPC';
import { IApp } from 'mocks/appList';
import { FirebaseService } from 'services/firebase';
import { getUrlIconNavigator } from 'resources/utils/getURLNavigator';
import { INavigators } from 'mocks/webApps';

const SelectAppsControl = () => {
  const { appsList, setAppsInstalledList, finishOnboardingSelectedApps } =
    useAppListConfiguration();

  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleConfirmSelectedApps = () => {
    finishOnboardingSelectedApps();
    navigation.dispatch(StackActions.replace('App'));
  };

  const verifyAppsSelecteds = useMemo(() => {
    return appsList.some((app) => {
      return app.selected === true;
    });
  }, [appsList]);

  const getAppsDownloadeds = useCallback(async () => {
    try {
      const appsInstalleds = await ServerPCService.getAppsList();
      const webApps = await FirebaseService.getAppsList();
      const webAppsFormatted: IApp[] = webApps.map((app) => {
        return {
          id: app.id,
          name: app.name,
          logo: app.logo,
          url: app.url,
          selected: false,
          appOpenningOptions: {
            web: appsInstalleds.navigators.map(
              (navigator: INavigators, index) => {
                return {
                  id: String(index),
                  name: navigator,
                  logo: getUrlIconNavigator(navigator),
                  selected: false,
                };
              },
            ),
          },
        };
      });
      const myApps: IApp[] = appsInstalleds.apps.map((app) => {
        return {
          id: app.id,
          name: app.name,
          logo: app.image,
          selected: false,
          appOpenningOptions: {
            app: {
              id: app.id,
              name: app.name,
              logo: app.image,
              selected: false,
            },
          },
        };
      });
      setAppsInstalledList([...webAppsFormatted, ...myApps]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAppsDownloadeds();
  }, [getAppsDownloadeds]);

  return (
    <S.Container>
      <S.SafeArea>
        <S.SafeAreaContent>
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowBackSVG />
          </S.ButtonGoBack>
          <S.BoxLogo>
            <Logo showText logoWidth={100} logoHeight={90} fontSize={24} />
          </S.BoxLogo>
          <S.Content>
            <S.BoxDescription>
              <Typograph
                font="Roboto-Bold"
                fontSize={20}
                alignment="justify"
                color="primary"
              >
                2 - Selecione os aplicativos que deseja controlar
              </Typograph>
              <Typograph
                font="Roboto-Bold"
                fontSize={12}
                alignment="justify"
                color="text"
              >
                Estamos progredindo na configuração para proporcionar a melhor
                experiência possível. Agora, precisamos saber qual aplicativo
                deseja personalizar as configurações. Escolha entre as opções de
                aplicativos disponíveis, sua escolha nos permitirá ajustar as
                funcionalidades do aplicativo para se alinharem perfeitamente ao
                seu sistema operacional.
              </Typograph>
            </S.BoxDescription>
            <S.BoxListApps>
              <S.ListApps
                data={appsList}
                keyExtractor={(item) => item.id}
                bounces={false}
                renderItem={({ item }) => (
                  <CardApp
                    app={item}
                    onPress={() => {
                      const appSelected = lodash.cloneDeep(item);
                      navigation.navigate('ConfigApp', {
                        app: appSelected,
                      });
                    }}
                  />
                )}
              />
            </S.BoxListApps>
          </S.Content>
          <S.Footer>
            <Button
              title="Vamos lá!"
              onPress={handleConfirmSelectedApps}
              disabled={!verifyAppsSelecteds}
            />
          </S.Footer>
        </S.SafeAreaContent>
      </S.SafeArea>
    </S.Container>
  );
};

export default SelectAppsControl;
