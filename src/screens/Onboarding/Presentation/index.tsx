import React from 'react';

import * as S from './styles';

import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { CarouselPresentation } from './_components/CarouselPresentation';
import { useNavigation } from '@react-navigation/native';

const Presentation: React.FC = () => {
  const navigation = useNavigation();

  const goToConfigIpAddress = () => {
    navigation.navigate('ConfigServerOnPC');
  };

  return (
    <S.Container>
      <S.SafeArea>
        <S.SafeAreaContent>
          <S.BoxLogo>
            <Logo showText />
          </S.BoxLogo>
          <S.Content>
            <CarouselPresentation />
          </S.Content>
          <S.Footer>
            <Button title="Vamos lá!" onPress={goToConfigIpAddress} />
          </S.Footer>
        </S.SafeAreaContent>
      </S.SafeArea>
    </S.Container>
  );
};

export default Presentation;
