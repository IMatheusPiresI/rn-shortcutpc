import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Dot = styled(Animated.View)`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const DotComplete = styled(Animated.View)`
  width: 14px;
  height: 14px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
`;
