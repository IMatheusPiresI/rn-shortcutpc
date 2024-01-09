import React from 'react';
import * as S from './styles';

import UnlockSVG from '@assets/unlock.svg';
import { ServerPCService } from 'services/serverPC';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
export const FloatingButton: React.FC = () => {
  const { getComputerPasswordConfigValue } = useAppConfigurationMMKV();
  const handleUnblockPC = async () => {
    const password = getComputerPasswordConfigValue();
    if (!password) return;

    try {
      await ServerPCService.unblock({
        password,
      });
    } catch (err) {}
  };
  return (
    <S.Container activeOpacity={0.7} onPress={handleUnblockPC}>
      <UnlockSVG width={30} height={30} />
    </S.Container>
  );
};
