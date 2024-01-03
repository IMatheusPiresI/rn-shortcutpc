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

export const BoxLogo = styled.View`
  margin-top: 60px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  padding: 0 20px;
`;
