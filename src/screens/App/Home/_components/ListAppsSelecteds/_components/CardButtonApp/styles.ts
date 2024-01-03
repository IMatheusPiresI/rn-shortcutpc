import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const BoxLogo = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Container = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.screenHeight * 0.2}px;
  width: ${({ theme }) => theme.metrics.screenWidth * 0.5 - 40}px;
  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;

  align-items: center;
  justify-content: center;

  elevation: 5;
  border-radius: 24px;
`;

export const LogoApp = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BoxOnSelect = styled(Animated.View)`
  position: absolute;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.8);

  align-items: center;
  justify-content: center;
`;

export const ButtonSelect = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxEdit = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const BoxSelect = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 28px;
  position: absolute;

  top: 12px;
  right: 12px;
  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const BoxSelected = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;
