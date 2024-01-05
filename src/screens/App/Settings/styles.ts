import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.View`
  padding: 0 20px 20px;
`;

export const InputIP = styled.TextInput`
  width: 100%;
  padding: 6px 0;
  min-height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Roboto_Bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: 12px;
`;
