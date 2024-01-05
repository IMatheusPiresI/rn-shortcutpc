import React, { useMemo } from 'react';

import * as S from './styles';
import { CardButtonApp } from './_components/CardButtonApp';
import { IApp } from 'mocks/appList';
import { useAppControlContext } from 'contexts/AppControl';
import { Typograph } from 'components/Typograph';

type IProps = {
  selectedAppOption: boolean;
  onStartSelectApps: () => void;
  cancelSelectApps: () => void;
  selectedApps: IApp[];
  onSelectApp: (app: IApp) => void;
};
export const ListAppsSelecteds: React.FC<IProps> = ({
  selectedAppOption,
  onStartSelectApps,
  cancelSelectApps,
  onSelectApp,
  selectedApps,
}) => {
  const { appsList } = useAppControlContext();

  const appsSelecteds = useMemo(() => {
    if (appsList) {
      return appsList.filter((app) => app.selected === true);
    }

    return [];
  }, [appsList]);

  return (
    <S.ListApps
      data={appsSelecteds}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardButtonApp
          app={item}
          selectedAppOption={selectedAppOption}
          onStartSelectApps={onStartSelectApps}
          selectedApps={selectedApps}
          onSelectApp={onSelectApp}
          cancelSelectApps={cancelSelectApps}
        />
      )}
      ListEmptyComponent={() => (
        <S.ContainerEmpty>
          <Typograph
            color="text"
            font="Roboto-Medium"
            alignment="center"
            fontSize={14}
          >
            <Typograph
              color="text"
              font="Roboto-Bold"
              alignment="center"
              fontSize={16}
            >
              Nenhum aplicativo configurado.
              {'\n'}
              {'\n'}
            </Typograph>
            Acesse o menu e clique em{' '}
            <Typograph color="primary" font="Roboto-Bold" fontSize={14}>
              "Adicionar aplicativos"{' '}
            </Typograph>
            para configurar seu primeiro aplicativo para controle.
          </Typograph>
        </S.ContainerEmpty>
      )}
    />
  );
};
