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

export const BoxConfigurePassword = styled.View`
  margin-top: 16px;
`;

export const BoxRow = styled.View`
  flex-direction: row;
`;

export const BoxFlex = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  padding: 0 20px 20px;
`;

export const InputIP = styled.TextInput`
  width: 100%;
  padding: 6px 0;
  height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Roboto_Bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: 12px;
`;

export const InputPassword = styled.TextInput`
  width: 100%;
  padding: 6px 0;
  height: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Roboto_Bold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const BoxInputPassword = styled.View`
  justify-content: center;
`;

export const ButtonIconPassword = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const BoxPasswordContent = styled.View`
  margin-top: 12px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 12px;

  gap: 12px;
`;
