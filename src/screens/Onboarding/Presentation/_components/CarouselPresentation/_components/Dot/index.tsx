import React from 'react';

import * as S from './styles';
import {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type IProps = {
  currentIndex: SharedValue<number>;
  index: number;
};

export const Dot: React.FC<IProps> = ({ currentIndex, index }) => {
  const rAnimatedDotSelected = useAnimatedStyle(() => ({
    width: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [12, 20, 12],
      Extrapolation.CLAMP,
    ),
    height: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [12, 20, 12],
      Extrapolation.CLAMP,
    ),
  }));

  const rAnimatedDotComplete = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0, 1, 0],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <S.Dot style={rAnimatedDotSelected}>
      <S.DotComplete style={rAnimatedDotComplete} />
    </S.Dot>
  );
};
