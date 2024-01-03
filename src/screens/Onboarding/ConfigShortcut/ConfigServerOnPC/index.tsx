import React, { useState } from 'react';

import * as S from './styles';

import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { Typograph } from '@components/Typograph';

import ArrowBackSVG from '@assets/arrow-back.svg';
import { useNavigation } from '@react-navigation/native';
import { ButtonSODocumentation } from './_components/ButtonSODocumentation';
import { ModalVerifyConnection } from 'components/Modals/ModalVerifyConnection';

const ConfigServerOnPC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleFinishConfigurePC = () => {
    navigation.navigate('RecoverUserIP');
  };

  return (
    <S.Container>
      <S.SafeArea>
        <S.SafeAreaContent>
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowBackSVG />
          </S.ButtonGoBack>
          <S.BoxLogo>
            <Logo showText logoWidth={100} logoHeight={90} fontSize={24} />
          </S.BoxLogo>
          <S.Content>
            <S.BoxDescription>
              <Typograph
                font="Roboto-Bold"
                fontSize={20}
                alignment="justify"
                color="primary"
              >
                1 - Configuração do servidor para comunicação entre os
                dispositivos.
              </Typograph>
              <Typograph
                font="Roboto-Bold"
                fontSize={12}
                alignment="justify"
                color="text"
              >
                Agora vamos precisar realizar a configuração em seu computador,
                selecione dentre as opções abaixo o seu sistema operacional e
                siga todos os passos para que o aplicaitivo estabeleça uma
                conexão com seu computador. Após finalizar, clique em
                "Finalizei."
              </Typograph>
            </S.BoxDescription>
            <S.BoxButtonsSO>
              <ButtonSODocumentation
                title="Windows"
                url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/2048px-Windows_logo_-_2012_%28dark_blue%29.svg.png"
              />
              <ButtonSODocumentation
                title="Linux"
                url="https://pngimg.com/d/linux_PNG1.png"
              />
              <ButtonSODocumentation
                title="Mac OS"
                url="https://cdn-icons-png.flaticon.com/512/2/2235.png"
              />
            </S.BoxButtonsSO>
          </S.Content>
          <S.Footer>
            <Button title="Finalizei" onPress={handleFinishConfigurePC} />
          </S.Footer>
        </S.SafeAreaContent>
      </S.SafeArea>
    </S.Container>
  );
};

export default ConfigServerOnPC;
