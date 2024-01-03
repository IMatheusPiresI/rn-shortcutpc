import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;

  elevation: 5;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  width: 70px;
  height: 70px;
  padding: 12px;
`;

export const BoxSelect = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 4px;
  right: 4px;
`;

export const BoxSelected = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
