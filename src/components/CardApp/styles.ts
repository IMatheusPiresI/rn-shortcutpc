import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;

  elevation: 5;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 8px 20px;
  min-height: 42px;

  flex-direction: row;
`;

export const BoxName = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const BoxSelect = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const BoxSelected = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.Image`
  width: 28px;
  height: 36px;
`;
