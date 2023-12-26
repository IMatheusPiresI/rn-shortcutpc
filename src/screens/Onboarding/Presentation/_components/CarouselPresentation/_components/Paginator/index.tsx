import React from 'react';

import * as S from './styles';
import { presentation } from '@screens/Onboarding/Presentation/mock/presentation';
import { Dot } from '../Dot';
import { SharedValue } from 'react-native-reanimated';

type IProps = {
  currentIndex: SharedValue<number>;
};

export const Paginator: React.FC<IProps> = ({ currentIndex }) => {
  return (
    <S.Container>
      {presentation.map((_, index) => (
        <Dot currentIndex={currentIndex} index={index} />
      ))}
    </S.Container>
  );
};
