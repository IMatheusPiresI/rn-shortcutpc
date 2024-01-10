import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import theme from 'resources/theme';
import { Typograph } from 'components/Typograph';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

type IProps = {
  optionSelected: boolean;
  setOptionSelected: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SwitchOption: React.FC<IProps> = ({
  optionSelected,
  setOptionSelected,
}) => {
  const { getComputerPasswordConfigBool, setComputerPasswordConfigBool } =
    useAppConfigurationMMKV();
  const changeOptionAnimate = useSharedValue(0);

  const rAnimatedChangePositionOption = useAnimatedStyle(() => ({
    left: interpolate(changeOptionAnimate.value, [0, 1], [6, 44]),
  }));

  const rAnimatedBgColor = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      changeOptionAnimate.value,
      [0, 1],
      [theme.colors.gray, theme.colors.primary],
    ),
  }));

  const changeAnimation = useCallback(() => {
    if (optionSelected) {
      changeOptionAnimate.value = withTiming(1, { duration: 300 });
      return;
    }
    changeOptionAnimate.value = withTiming(0, { duration: 300 });
  }, [optionSelected]);

  const handleToogleOption = () => {
    setOptionSelected((prevState) => !prevState);
    if (!optionSelected) {
      setComputerPasswordConfigBool(true);
      return;
    }
    setComputerPasswordConfigBool(false);
  };

  const getPasswordConfigOption = useCallback(() => {
    const option = getComputerPasswordConfigBool();
    setOptionSelected(!!option);
  }, []);

  useEffect(() => {
    getPasswordConfigOption();
  }, [getPasswordConfigOption]);

  useEffect(() => {
    changeAnimation();
  }, [changeAnimation]);

  return (
    <S.Container
      activeOpacity={1}
      onPress={handleToogleOption}
      testID="SwitchOptionButton"
    >
      <S.ContainerColor style={rAnimatedBgColor} testID="bgAnimated">
        <S.BoxOff>
          <Typograph font="Roboto-Bold" color="primary" fontSize={12}>
            OFF
          </Typograph>
        </S.BoxOff>
        <S.BoxOn>
          <Typograph font="Roboto-Bold" color="gray" fontSize={12}>
            ON
          </Typograph>
        </S.BoxOn>
        <S.BoxOption style={rAnimatedChangePositionOption}></S.BoxOption>
      </S.ContainerColor>
    </S.Container>
  );
};
