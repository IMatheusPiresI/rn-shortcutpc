import React, { useCallback, useMemo, useState } from 'react';

import * as S from './styles';

import { ListAppsSelecteds } from './_components/ListAppsSelecteds';
import { Header } from 'components/Header';
import { IApp } from 'mocks/appList';
import { ModalConfirmDelete } from 'components/Modals/ModalConfirmDelete';
import { useAppControlContext } from 'contexts/AppControl';
import { FloatingButton } from 'components/FloatingButton';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
import { useFocusEffect } from '@react-navigation/native';
const Home: React.FC = () => {
  const { getComputerPasswordConfigValue, getComputerPasswordConfigBool } =
    useAppConfigurationMMKV();
  const { removeMultiplesAppsConfiguration } = useAppControlContext();
  const [showSelectAppOption, setShowSelectAppOption] =
    useState<boolean>(false);

  const [selectedApps, setSelectedApps] = useState<IApp[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [showUnblockPC, setShowUnblockPC] = useState<boolean>(false);

  const handleStartSelectApps = () => {
    setShowSelectAppOption(true);
  };

  const handleFinishSelectApps = () => {
    setShowSelectAppOption(false);
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
    handleCancelSelectApps();
  };

  const handleSelectApp = (app: IApp) => {
    if (selectedApps.some((selectedApp) => selectedApp.name === app.name)) {
      setSelectedApps((prevState) =>
        prevState.filter((prevApp) => prevApp.name !== app.name),
      );
      return;
    }
    setSelectedApps((prevState) => [...prevState, app]);
  };

  const verifyShowUnblockPC = useCallback(() => {
    const showPasswordConfig = getComputerPasswordConfigBool();

    const pcPassword = getComputerPasswordConfigValue();

    if (showPasswordConfig && pcPassword && pcPassword.length > 0) {
      setShowUnblockPC(true);
      return;
    }
    setShowUnblockPC(false);
  }, []);

  useFocusEffect(() => verifyShowUnblockPC());

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
          cancelSelectApps={handleFinishSelectApps}
        />
        {showUnblockPC && <FloatingButton />}
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
