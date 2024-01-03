import React, { useState } from 'react';

import * as S from './styles';

import { ListAppsSelecteds } from './_components/ListAppsSelecteds';
import { Header } from 'components/Header';
import { IApp } from 'mocks/appList';
const Home: React.FC = () => {
  const [showSelectAppOption, setShowSelectAppOption] =
    useState<boolean>(false);

  const [selectedApps, setSelectedApps] = useState<IApp[]>([]);

  const handleStartSelectApps = () => {
    setShowSelectAppOption(true);
  };

  const handleCancelSelectApps = () => {
    setShowSelectAppOption(false);
    setSelectedApps([]);
  };

  const handleDeleteApps = () => {
    console.log('Delete Aps');
  };

  const handleSelectApp = (app: IApp) => {
    if (selectedApps.some((selectedApp) => selectedApp.id === app.id)) {
      setSelectedApps((prevState) =>
        prevState.filter((prevApp) => prevApp.id !== app.id),
      );
      return;
    }
    setSelectedApps((prevState) => [...prevState, app]);
  };

  return (
    <S.Container>
      <S.SafeArea>
        <Header
          onSelectApps={showSelectAppOption}
          onCancel={handleCancelSelectApps}
          onDeletePress={handleDeleteApps}
          showDeleteOption={selectedApps.length > 0}
        />
        <ListAppsSelecteds
          selectedAppOption={showSelectAppOption}
          selectedApps={selectedApps}
          onSelectApp={handleSelectApp}
          onStartSelectApps={handleStartSelectApps}
        />
      </S.SafeArea>
    </S.Container>
  );
};

export default Home;
