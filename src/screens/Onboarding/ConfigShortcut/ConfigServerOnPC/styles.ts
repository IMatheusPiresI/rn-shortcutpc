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
export const BoxLogo = styled.View``;

export const Content = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const BoxDescription = styled.View`
  gap: 14px;
  padding: 0 20px;
`;
export const BoxButtonsSO = styled.View`
  margin-top: 20px;
  gap: 14px;
  padding: 0 20px;
`;

export const Footer = styled.View`
  padding: 0 20px;
`;
export const Header = styled.View``;
