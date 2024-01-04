import React, { useMemo } from 'react';

import * as S from './styles';
import { CardButtonApp } from './_components/CardButtonApp';
import { IApp } from 'mocks/appList';
import { useAppControlContext } from 'contexts/AppControl';

type IProps = {
  selectedAppOption: boolean;
  onStartSelectApps: () => void;
  selectedApps: IApp[];
  onSelectApp: (app: IApp) => void;
};
export const ListAppsSelecteds: React.FC<IProps> = ({
  selectedAppOption,
  onStartSelectApps,
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
        />
      )}
    />
  );
};
