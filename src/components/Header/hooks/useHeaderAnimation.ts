import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useHeaderAnimation = () => {
  const animationShowOption = useSharedValue(0);

  const rAnimatedHorizontalBarTop = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${interpolate(
          animationShowOption.value,
          [0, 1],
          [0, 45],
        )}deg`,
      },
    ],
    top: interpolate(animationShowOption.value, [0, 1], [0, 7]),
  }));

  const rAnimatedHorizontalBarHide = useAnimatedStyle(() => ({
    opacity: interpolate(animationShowOption.value, [0, 1], [1, 0]),
    left: interpolate(animationShowOption.value, [0, 1], [0, 20]),
  }));

  const rAnimatedHorizontalBarBottom = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${interpolate(
          animationShowOption.value,
          [0, 1],
          [0, -45],
        )}deg`,
      },
    ],
    top: interpolate(animationShowOption.value, [0, 1], [0, -7]),
  }));

  const rAnimatedBoxOptionsAppear = useAnimatedStyle(() => ({
    opacity: interpolate(animationShowOption.value, [0, 1], [0, 1]),
    right: interpolate(animationShowOption.value, [0, 1], [0, 20]),
    top: interpolate(animationShowOption.value, [0, 1], [0, 10]),
  }));

  const applyAnimationShowOption = (showOptions: boolean) => {
    if (showOptions) {
      animationShowOption.value = withTiming(1, { duration: 400 });
      return;
    }
    animationShowOption.value = withTiming(0, { duration: 400 });
  };

  return {
    applyAnimationShowOption,
    rAnimatedBoxOptionsAppear,
    rAnimatedHorizontalBarTop,
    rAnimatedHorizontalBarHide,
    rAnimatedHorizontalBarBottom,
  };
};
