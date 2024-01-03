import React, { useMemo } from 'react';

import * as S from './styles';
import { CardButtonApp } from './_components/CardButtonApp';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
import { IApp } from 'mocks/appList';

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
  const { getListAppConfiguration } = useAppConfigurationMMKV();

  const appsSelecteds = useMemo(() => {
    let listApps = getListAppConfiguration();

    if (listApps) {
      return listApps.filter((app) => app.selected === true);
    }

    return [];
  }, []);

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
