import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import { Typograph } from 'components/Typograph';
import theme from 'resources/theme';

import ConnectionSuccessSVG from '@assets/connection-success.svg';
import ConnectionErrorSVG from '@assets/connection-error.svg';
import { Button } from 'components/Button';
import axios from 'axios';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
import { useErrorControlContext } from 'contexts/ErrorControl';

type IProps = {
  visible: boolean;
};
export const ModalError: React.FC<IProps> = ({ visible }) => {
  const { closeModalError } = useErrorControlContext();
  const { getIPNetworkConnected } = useAppConfigurationMMKV();
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [status, setStatus] = useState<'success' | 'error' | 'waiting'>(
    'waiting',
  );

  const handleReset = () => {
    setShowResult(false);
    setLoading(false);
    setStatus('waiting');
  };

  const getConnection = useCallback(async () => {
    const userIp = getIPNetworkConnected();
    let url = `http:${userIp}:3000/connection/verify-connection-server`;
    try {
      const { data } = await axios.get(url);

      return data.connection;
    } catch (err) {
      return false;
    }
  }, []);

  const verifyConnection = async () => {
    setShowResult(true);
    setLoading(true);
    setStatus('waiting');
    const serverConnection: boolean = await new Promise((resolve) =>
      setTimeout(async () => {
        const connection = await getConnection();

        resolve(connection);
      }, 2000),
    );

    if (serverConnection) {
      setStatus('success');
      setLoading(false);
    } else {
      setStatus('error');
      setLoading(false);
    }
  };

  useEffect(() => {
    handleReset();
  }, [visible]);

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
              Conexão realizada com sucesso, teste novamente a funcionalidade e
              caso o erro persista, remova o aplicativo e adicione novamente.
            </Typograph>
            <Button title="Fechar" onPress={closeModalError} />
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
              onPress={verifyConnection}
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
        <S.ButtonClose onPress={closeModalError}>
          <Typograph
            alignment="center"
            font="Roboto-Bold"
            fontSize={20}
            color="primary"
          >
            x
          </Typograph>
        </S.ButtonClose>
        <S.Header>
          <Typograph
            alignment="center"
            font="Roboto-Bold"
            fontSize={20}
            color="critical"
          >
            Ooops... Ocorreu um erro!
          </Typograph>
        </S.Header>
        <S.Content>
          <S.BoxLoadingOrStatus>
            {(status === 'waiting' || !showResult) && (
              <S.WrapperLoadingMessage>
                <Typograph
                  alignment="justify"
                  font="Roboto-Medium"
                  fontSize={12}
                  color="text"
                >
                  Parece que uma ação não pode ser executada. Verifique a
                  conexão com o servidor, caso o erro persistir consulte a
                  documentação e siga o passo a passo para configuração do
                  servidor em seu computador.
                </Typograph>
              </S.WrapperLoadingMessage>
            )}
            {showResult ? (
              loading ? (
                <S.Loading size={'large'} color={theme.colors.primary} />
              ) : (
                renderStatus()
              )
            ) : (
              <Button title="Verificar conexão" onPress={verifyConnection} />
            )}
          </S.BoxLoadingOrStatus>
        </S.Content>
      </S.Container>
    </S.RNModal>
  );
};
