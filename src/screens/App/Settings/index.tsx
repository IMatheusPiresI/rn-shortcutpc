import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as S from './styles';

import { Header } from 'components/Header';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
import { Button } from 'components/Button';
import { Typograph } from 'components/Typograph';
import { formatIP } from 'resources/utils/formatIP';
import theme from 'resources/theme';
import { isValidIP } from 'resources/utils/isValidIP';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoid } from 'components/KeyboardAvoid';
import { KeyboardDismiss } from 'components/KeyboardDismiss';

const Settings: React.FC = () => {
  const [ipUserPC, setIpUserPc] = useState<string>('');
  const { getIPNetworkConnected, setIPNetworkConnected } =
    useAppConfigurationMMKV();
  const pcIp = getIPNetworkConnected();
  const navigation = useNavigation();

  const disabledButton = useMemo(() => {
    if (pcIp === ipUserPC) return true;
    if (!isValidIP(ipUserPC)) return true;

    return false;
  }, [ipUserPC]);

  const handleChangeUserPcIp = () => {
    setIPNetworkConnected(ipUserPC);
    navigation.goBack();
  };

  const getUserPcIp = useCallback(() => {
    if (!pcIp) return;

    setIpUserPc(pcIp);
  }, []);

  useEffect(() => {
    getUserPcIp();
  }, [getUserPcIp]);

  return (
    <S.Container>
      <KeyboardAvoid>
        <KeyboardDismiss>
          <S.SafeArea>
            <Header showArrow />
            <S.Content>
              <Typograph fontSize={18} font="Roboto-Bold" color="primary">
                Endereço IP.
              </Typograph>
              <S.InputIP
                value={ipUserPC}
                onChangeText={(ip) => setIpUserPc(formatIP(ip))}
                keyboardType="default"
                spellCheck={false}
                autoCorrect={false}
                placeholder="Digite seu IP"
                placeholderTextColor={theme.colors.gray}
              />
            </S.Content>
            <S.Footer>
              <Button
                title="Salvar"
                disabled={disabledButton}
                onPress={handleChangeUserPcIp}
              />
            </S.Footer>
          </S.SafeArea>
        </KeyboardDismiss>
      </KeyboardAvoid>
    </S.Container>
  );
};

export default Settings;
