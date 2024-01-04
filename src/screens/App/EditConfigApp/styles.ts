import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const SafeAreaContent = styled.View`
  padding: 20px 0;
  flex: 1;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 24px;
  z-index: 99;
`;
export const BoxLogo = styled.View`
  align-items: center;
`;

export const BoxLogoAppSelected = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;
  width: 82px;
  height: 82px;
  elevation: 5;
  padding: 12px;
  border-radius: 12px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 28px;
  padding: 0 20px;
`;

export const BoxDescription = styled.View`
  margin-top: 16px;
  align-items: center;
`;

export const BoxOptions = styled.View`
  margin-top: 24px;
  gap: 16px;
`;

export const BoxListOppeningOptions = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Footer = styled.View`
  padding: 0 20px;
  gap: 12px;
`;
export const Header = styled.View``;
export const BoxOptionsNavigators = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
