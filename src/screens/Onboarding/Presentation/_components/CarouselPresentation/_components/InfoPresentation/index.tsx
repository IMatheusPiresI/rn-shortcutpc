import React from 'react';

import * as S from './styles';
import { Typograph } from '@components/Typograph';
import {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type IProps = {
  title: string;
  description: string;
  index: number;
  currentIndex: SharedValue<number>;
};
export const InfoPresentation: React.FC<IProps> = ({
  description,
  title,
  currentIndex,
  index,
}) => {
  const rAnimatedShowHideInfo = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      [index - 0.7, index, index + 0.7],
      [0, 1, 0],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <S.Content style={rAnimatedShowHideInfo}>
      <Typograph color="primary" font="Roboto-Bold" fontSize={20}>
        {title}
      </Typograph>
      <Typograph
        color="text"
        font="Roboto-Regular"
        fontSize={18}
        alignment="justify"
      >
        {description}
      </Typograph>
    </S.Content>
  );
};
