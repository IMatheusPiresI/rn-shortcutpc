import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 28px;
`;

export const Dot = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
`;
