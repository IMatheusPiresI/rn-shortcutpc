import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as S from './styles';
import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { Typograph } from '@components/Typograph';
import { useNetInfo } from '@react-native-community/netinfo';

import NetSVG from '@assets/net.svg';
import ArrowBackSVG from '@assets/arrow-back.svg';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoid } from 'components/KeyboardAvoid';
import { KeyboardDismiss } from 'components/KeyboardDismiss';
import { formatIP } from 'resources/utils/formatIP';
import theme from 'resources/theme';
import { ModalVerifyConnection } from 'components/Modals/ModalVerifyConnection';
import { isValidIP } from 'resources/utils/isValidIP';

const RecoverUserIP: React.FC = () => {
  const navigation = useNavigation();
  const { isConnected } = useNetInfo();

  const [userPcIp, setUserPcIp] = useState<string>('');
  const [showConnectionError, setShowConnectionError] =
    useState<boolean>(false);
  const [showModalVerifyConnection, setShowModalVerifyConnection] =
    useState<boolean>(false);

  const disabledButton = useMemo(() => {
    if (showConnectionError) return true;
    if (!isValidIP(userPcIp)) return true;

    return false;
  }, [userPcIp, showConnectionError]);

  const handleOpenModalVerifyConnection = () => {
    setShowModalVerifyConnection(true);
  };

  const handleCloseModalVerifyConnection = () => {
    setShowModalVerifyConnection(false);
  };

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const goToConfigUserSystem = async () => {
    handleOpenModalVerifyConnection();
  };

  const getIpAddress = useCallback(async () => {
    if (!isConnected) {
      setShowConnectionError(true);
      return;
    }

    if (showConnectionError) {
      setShowConnectionError(false);
    }
  }, [isConnected]);

  useEffect(() => {
    getIpAddress();
  }, [getIpAddress]);

  return (
    <S.Container>
      <S.SafeArea>
        <KeyboardAvoid>
          <KeyboardDismiss>
            <S.SafeAreaContent>
              <S.Content>
                <S.BoxLogo>
                  <S.ButtonGoBack onPress={handleGoBack}>
                    <ArrowBackSVG />
                  </S.ButtonGoBack>
                  <Logo
                    showText
                    logoWidth={100}
                    logoHeight={90}
                    fontSize={24}
                  />
                </S.BoxLogo>
                <S.BoxDescription>
                  <Typograph
                    font="Roboto-Bold"
                    fontSize={20}
                    alignment="justify"
                    color="primary"
                  >
                    1 - Primeiro vamos buscar seu IP.
                  </Typograph>
                  <Typograph
                    font="Roboto-Bold"
                    fontSize={12}
                    alignment="justify"
                    color="text"
                  >
                    Estamos dando os primeiros passos para personalizar sua
                    experiência. Para garantir um desempenho sob medida, faremos
                    uma otimização automática com base no seu endereço IP. Fique
                    tranquilo, essa informação será usada exclusivamente para
                    aprimorar sua interação com o aplicativo, com total respeito
                    à sua privacidade.
                  </Typograph>
                </S.BoxDescription>
                <S.IPSection>
                  <Typograph
                    font="Roboto-Bold"
                    fontSize={20}
                    alignment="justify"
                    color="primary"
                  >
                    Endereço IP do computador.
                  </Typograph>
                  {showConnectionError ? (
                    <S.BoxErrorConnection>
                      <NetSVG width={100} height={100} />
                      <Typograph
                        font="Roboto-Bold"
                        fontSize={12}
                        alignment="justify"
                        color="text"
                      >
                        Nenhuma conexão com a internet foi encontrada.
                        Certifique-se de estar conectado na mesma rede que seu
                        computador para que o aplicativo possa se comunicar e
                        realizar os comandos que desejar.
                      </Typograph>
                    </S.BoxErrorConnection>
                  ) : (
                    <S.BoxIpAdress>
                      <S.InputIP
                        value={userPcIp}
                        onChangeText={(ip) => setUserPcIp(formatIP(ip))}
                        keyboardType="default"
                        spellCheck={false}
                        autoCorrect={false}
                        placeholder="Digite seu IP"
                        placeholderTextColor={theme.colors.gray}
                      />
                    </S.BoxIpAdress>
                  )}
                </S.IPSection>
                <S.Footer>
                  <Button
                    title="Vamos lá!"
                    disabled={disabledButton}
                    onPress={goToConfigUserSystem}
                  />
                </S.Footer>
              </S.Content>
            </S.SafeAreaContent>
          </KeyboardDismiss>
        </KeyboardAvoid>
      </S.SafeArea>
      {showModalVerifyConnection && (
        <ModalVerifyConnection
          visible={showModalVerifyConnection}
          userIp={userPcIp}
          onClose={handleCloseModalVerifyConnection}
        />
      )}
    </S.Container>
  );
};

export default RecoverUserIP;
