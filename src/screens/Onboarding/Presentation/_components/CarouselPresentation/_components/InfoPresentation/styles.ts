import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Content = styled(Animated.View)`
  width: ${({ theme }) => theme.metrics.screenWidth}px;
  padding: 0 20px;
  align-items: center;

  gap: 16px;
`;
