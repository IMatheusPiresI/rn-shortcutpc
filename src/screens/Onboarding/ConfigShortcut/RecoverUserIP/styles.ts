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
  justify-content: flex-end;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  z-index: 99;
`;
export const BoxLogo = styled.View``;

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: flex-end;
`;

export const BoxDescription = styled.View`
  margin-top: 16px;
  margin-bottom: 28px;
  gap: 16px;
`;

export const Footer = styled.View`
  margin-top: 40px;
  flex: 1;
  justify-content: flex-end;
`;

export const IPSection = styled.View`
  margin-bottom: 20px;
`;

export const BoxIpAdress = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  align-items: center;
  min-height: 50px;
  justify-content: center;
  margin-top: 16px;
  z-index: 99;
`;

export const BoxErrorConnection = styled.View`
  align-items: center;
`;

export const InputIP = styled.TextInput`
  width: 100%;
  padding: 6px 0;
  min-height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Roboto_Bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
