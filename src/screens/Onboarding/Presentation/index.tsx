import React from 'react';

import * as S from './styles';

import { Logo } from '@components/Logo';
import { Button } from '@components/Button';
import { CarouselPresentation } from './_components/CarouselPresentation';

const Presentation: React.FC = () => {
  return (
    <S.Container>
      <S.SafeArea>
        <S.BoxLogo>
          <Logo showText />
        </S.BoxLogo>
        <S.Content>
          <CarouselPresentation />
        </S.Content>
        <S.Footer>
          <Button title="Vamos lá!" />
        </S.Footer>
      </S.SafeArea>
    </S.Container>
  );
};

export default Presentation;
