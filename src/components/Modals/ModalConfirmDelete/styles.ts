import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Container = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 24px;
`;

export const Content = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const BoxFlex = styled.View`
  flex: 1;
`;

export const RNModal = styled(Modal)`
  margin: 0;
  align-items: center;
`;
