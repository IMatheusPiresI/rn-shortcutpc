import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 75px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  overflow: hidden;
`;

export const ContainerColor = styled(Animated.View)`
  flex: 1;
  justify-content: center;
`;

export const BoxOption = styled(Animated.View)`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  position: absolute;
  left: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BoxOff = styled.View`
  position: absolute;
  right: 12px;
`;

export const BoxOn = styled.View`
  position: absolute;
  left: 12px;
`;
