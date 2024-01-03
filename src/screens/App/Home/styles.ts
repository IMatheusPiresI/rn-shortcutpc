import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
