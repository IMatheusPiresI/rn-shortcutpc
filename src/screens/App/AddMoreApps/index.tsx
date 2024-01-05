import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as S from './styles';

import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Typograph } from 'components/Typograph';
import { useAppControlContext } from 'contexts/AppControl';
import { CardApp } from 'components/CardApp';
import { IApp } from 'mocks/appList';
import { useNavigation } from '@react-navigation/native';
import lodash from 'lodash';
import theme from 'resources/theme';

const AddMoreApps: React.FC = () => {
  const { getAppsNotUsed, appsNotUsed, addMultiplesAppsOnSelecteds } =
    useAppControlContext();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleGoToConfigurationApp = (app: IApp) => {
    navigation.navigate('EditConfigApp', {
      app: lodash.cloneDeep(app),
      notUsedApp: true,
    });
  };

  const handleConfirmAddApps = () => {
    addMultiplesAppsOnSelecteds(appsNotUsed);
    navigation.goBack();
  };

  const disabledButton = useMemo(() => {
    return !appsNotUsed.some((app) => app.selected === true);
  }, [appsNotUsed]);

  const getAllAppsNotUsed = useCallback(async () => {
    try {
      if (error) {
        setError(false);
      }
      setLoading(true);
      await getAppsNotUsed();
    } catch (err) {
      setError(true);
      console.log('Erro ao buscar listagem de aplicativos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllAppsNotUsed();
  }, [getAllAppsNotUsed]);

  return (
    <S.Container>
      <S.SafeArea>
        <Header showArrow />
        <S.Content>
          <S.Header>
            <Typograph
              font="Roboto-Bold"
              fontSize={20}
              alignment="justify"
              color="primary"
            >
              Adicione os aplicativos que deseja controlar
            </Typograph>
          </S.Header>
          <S.BoxList>
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
                data={appsNotUsed}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CardApp
                    app={item}
                    onPress={() => handleGoToConfigurationApp(item)}
                  />
                )}
                ListEmptyComponent={() => (
                  <S.EmptyComponent>
                    <Typograph
                      font="Roboto-Bold"
                      fontSize={14}
                      alignment="justify"
                      color={error ? 'critical' : 'text'}
                    >
                      {error
                        ? 'Ocorreu um erro e não encontramos nenhum aplicativo instalado em seu computador, verifique os passos para configuração e tente novamente.'
                        : 'Opss... Parece que você já configurou todos. Nenhum aplicativo foi encontrado para configuração'}
                    </Typograph>
                  </S.EmptyComponent>
                )}
              />
            )}
          </S.BoxList>
        </S.Content>
        <S.Footer>
          {appsNotUsed.length > 0 && (
            <Button
              title="Salvar"
              onPress={handleConfirmAddApps}
              disabled={disabledButton || loading}
            />
          )}
        </S.Footer>
      </S.SafeArea>
    </S.Container>
  );
};

export default AddMoreApps;
