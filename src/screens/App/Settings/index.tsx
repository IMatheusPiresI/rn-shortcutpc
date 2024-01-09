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
import { SwitchOption } from 'components/SwitchOption';
import EyeSVG from '@assets/eye.svg';
import ClosedEyeSVG from '@assets/closed-eye.svg';

const Settings: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState<boolean>(false);
  const [ipUserPC, setIpUserPc] = useState<string>('');
  const [pcPassword, setPcPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    getIPNetworkConnected,
    setIPNetworkConnected,
    getComputerPasswordConfigValue,
    setComputerPasswordConfigValue,
  } = useAppConfigurationMMKV();
  const pcIp = getIPNetworkConnected();
  const navigation = useNavigation();

  const disabledButton = useMemo(() => {
    const userPcPassword = getComputerPasswordConfigValue();
    if (
      pcPassword.length > 0 &&
      userPcPassword !== pcPassword &&
      isValidIP(ipUserPC)
    )
      return false;
    if (pcIp === ipUserPC) return true;
    if (!isValidIP(ipUserPC)) return true;

    return false;
  }, [ipUserPC, pcPassword]);

  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChangeUserPcIp = () => {
    setIPNetworkConnected(ipUserPC);
    setComputerPasswordConfigValue(pcPassword);
    navigation.goBack();
  };

  const getUserPcIp = useCallback(() => {
    if (!pcIp) return;

    setIpUserPc(pcIp);
  }, []);

  const getUserPcPassword = useCallback(() => {
    const userPcPassword = getComputerPasswordConfigValue();

    if (userPcPassword) {
      setPcPassword(userPcPassword);
    }
  }, []);

  useEffect(() => {
    getUserPcIp();
  }, [getUserPcIp]);

  useEffect(() => {
    getUserPcPassword();
  }, [getUserPcPassword]);

  return (
    <S.Container>
      <KeyboardAvoid>
        <KeyboardDismiss>
          <S.SafeArea>
            <S.Content>
              <Header showArrow />
              <S.BoxInput>
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
              </S.BoxInput>
              <S.BoxRow>
                <S.BoxFlex>
                  <Typograph
                    fontSize={14}
                    font="Roboto-Bold"
                    color="primary"
                    numberOfLines={3}
                  >
                    Deseja desbloquear seu computador pelo aplicativo?
                  </Typograph>
                </S.BoxFlex>
                <SwitchOption
                  optionSelected={optionSelected}
                  setOptionSelected={setOptionSelected}
                />
              </S.BoxRow>
              {optionSelected && (
                <S.BoxPasswordContent>
                  <Typograph
                    fontSize={16}
                    font="Roboto-Bold"
                    color="primary"
                    alignment="center"
                  >
                    Configurações de desbloqueio do computador.
                  </Typograph>
                  <Typograph
                    fontSize={12}
                    font="Roboto-Bold"
                    color="text"
                    alignment="justify"
                  >
                    - Essa funcionalidade só funcionará caso o computador esteja
                    com a tela ligada para digitar a senha, ou com a proteção de
                    tela ativada.
                  </Typograph>
                  <S.BoxInputPassword>
                    <S.InputPassword
                      value={pcPassword}
                      onChangeText={setPcPassword}
                      secureTextEntry={!showPassword}
                      placeholder="Digite a senha do computador"
                      placeholderTextColor={theme.colors.gray}
                    />
                    <S.ButtonIconPassword onPress={handleToggleShowPassword}>
                      {showPassword ? (
                        <ClosedEyeSVG width={24} height={24} />
                      ) : (
                        <EyeSVG width={24} height={24} />
                      )}
                    </S.ButtonIconPassword>
                  </S.BoxInputPassword>
                </S.BoxPasswordContent>
              )}
              <S.BoxFlex />
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
