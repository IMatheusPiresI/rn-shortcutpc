import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import { Typograph } from 'components/Typograph';
import theme from 'resources/theme';

import ConnectionSuccessSVG from '@assets/connection-success.svg';
import ConnectionErrorSVG from '@assets/connection-error.svg';
import { Button } from 'components/Button';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

type IProps = {
  visible: boolean;
  userIp: string;
  onClose: () => void;
};
export const ModalVerifyConnection: React.FC<IProps> = ({
  onClose,
  userIp,
  visible,
}) => {
  const { setIPNetworkConnected } = useAppConfigurationMMKV();
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<'success' | 'error' | 'waiting'>(
    'waiting',
  );
  const [attemptsConnection, setAttemptsConnection] = useState<number>(0);
  const navigation = useNavigation();

  const handleTryAgain = () => {
    setAttemptsConnection(0);
    setStatus('waiting');
    setLoading(true);
  };

  const getConnection = useCallback(async () => {
    let url = `http:${userIp}:3000/connection/verify-connection-server`;
    try {
      const { data } = await axios.get(url);

      return data.connection;
    } catch (err) {
      return false;
    }
  }, []);

  const verifyConnection = useCallback(async () => {
    const serverConnection: boolean = await new Promise((resolve) =>
      setTimeout(async () => {
        const connection = await getConnection();

        resolve(connection);
      }, 3000),
    );

    if (serverConnection) {
      setStatus('success');
      setLoading(false);
      setTimeout(() => {
        setIPNetworkConnected(userIp);
        onClose();
        navigation.navigate('SelectAppsControl');
      }, 4500);
    } else {
      if (attemptsConnection <= 3) {
        setAttemptsConnection((prevState) => prevState + 1);
      } else {
        setStatus('error');
        setLoading(false);
      }
    }
  }, [getConnection, attemptsConnection, visible]);

  useEffect(() => {
    verifyConnection();
  }, [verifyConnection]);

  const renderStatus = () => {
    switch (status) {
      case 'success':
        return (
          <S.BoxStatus>
            <ConnectionSuccessSVG width={80} height={80} />
            <Typograph
              alignment="justify"
              font="Roboto-Medium"
              fontSize={12}
              color="text"
            >
              Conexão realizada com sucesso, você será redirecionado em
              instantes.
            </Typograph>
          </S.BoxStatus>
        );
      case 'error':
        return (
          <S.BoxStatus>
            <ConnectionErrorSVG width={80} height={80} />
            <Typograph
              alignment="justify"
              font="Roboto-Medium"
              fontSize={12}
              color="text"
            >
              Conexão com o servidor falhou, reveja a documentação e realize
              novamente o passo a passo para verificar se esqueceu algo.
            </Typograph>
            <Button
              title="Tentar novamente"
              activeOpacity={0.7}
              onPress={handleTryAgain}
            />
          </S.BoxStatus>
        );
      case 'waiting':
        return null;
    }
  };

  return (
    <S.RNModal isVisible={visible} useNativeDriver>
      <S.Container>
        {status === 'error' && (
          <S.ButtonClose onPress={onClose}>
            <Typograph
              alignment="center"
              font="Roboto-Bold"
              fontSize={20}
              color="primary"
            >
              x
            </Typograph>
          </S.ButtonClose>
        )}
        <S.Header>
          <Typograph
            alignment="center"
            font="Roboto-Bold"
            fontSize={20}
            color="primary"
          >
            Verificando conexão
          </Typograph>
        </S.Header>
        <S.Content>
          <S.BoxLoadingOrStatus>
            {loading ? (
              <S.WrapperLoadingMessage>
                <Typograph
                  alignment="justify"
                  font="Roboto-Medium"
                  fontSize={12}
                  color="text"
                >
                  Estamos verificando a conexão com o servidor, assim que for
                  estabelecida você será redicionado automáticamente.
                </Typograph>
                <S.Loading size={'large'} color={theme.colors.primary} />
              </S.WrapperLoadingMessage>
            ) : (
              renderStatus()
            )}
          </S.BoxLoadingOrStatus>
        </S.Content>
      </S.Container>
    </S.RNModal>
  );
};
