import React, { useState } from 'react';

import * as S from './styles';

import { ListAppsSelecteds } from './_components/ListAppsSelecteds';
import { Header } from 'components/Header';
import { IApp } from 'mocks/appList';
import { ModalConfirmDelete } from 'components/Modals/ModalConfirmDelete';
import { useAppControlContext } from 'contexts/AppControl';
const Home: React.FC = () => {
  const { removeMultiplesAppsConfiguration } = useAppControlContext();
  const [showSelectAppOption, setShowSelectAppOption] =
    useState<boolean>(false);

  const [selectedApps, setSelectedApps] = useState<IApp[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const handleStartSelectApps = () => {
    setShowSelectAppOption(true);
  };

  const handleCancelSelectApps = () => {
    setShowSelectAppOption(false);
    setSelectedApps([]);
  };

  const handleDeleteApps = () => {
    setShowModalDelete(true);
  };

  const onCancelDelete = () => {
    setShowModalDelete(false);
  };

  const onConfirmDelete = () => {
    setShowModalDelete(false);
    removeMultiplesAppsConfiguration(selectedApps);
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
          showMenu
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
      <ModalConfirmDelete
        visible={showModalDelete}
        onClose={onCancelDelete}
        onConfirm={onConfirmDelete}
      />
    </S.Container>
  );
};

export default Home;
