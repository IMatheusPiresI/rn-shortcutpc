import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as S from './styles';

import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { Typograph } from '@components/Typograph';

import ArrowBackSVG from '@assets/arrow-back.svg';
import { StackActions, useNavigation } from '@react-navigation/native';
import { CardApp } from 'components/CardApp';
import { useAppListConfiguration } from 'contexts/AppConfiguration';
import lodash from 'lodash';
import theme from 'resources/theme';
import { getAllAppsDownloadeds } from 'resources/helpers/getAllAppsInstalleds';

const SelectAppsControl = () => {
  const { appsList, setAppsInstalledList, finishOnboardingSelectedApps } =
    useAppListConfiguration();
  const [loading, setLoading] = useState<boolean>(true);
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
      setLoading(true);
      const listAllApps = await getAllAppsDownloadeds();
      setAppsInstalledList(listAllApps);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
                3 - Selecione os aplicativos que deseja controlar
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
              {loading ? (
                <S.LoadingComponent>
                  <S.Loading size="large" color={theme.colors.primary} />
                  <Typograph
                    font="Roboto-Bold"
                    fontSize={16}
                    alignment="justify"
                    color="text"
                  >
                    Buscando aplicativos...
                  </Typograph>
                </S.LoadingComponent>
              ) : (
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
                  ListEmptyComponent={() => (
                    <S.EmptyComponent>
                      <Typograph
                        font="Roboto-Bold"
                        fontSize={14}
                        alignment="justify"
                        color="critical"
                      >
                        Ocorreu um erro e não encontramos nenhum aplicativo
                        instalado em seu computador, verifique os passos para
                        configuração e tente novamente.
                      </Typograph>
                    </S.EmptyComponent>
                  )}
                />
              )}
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
