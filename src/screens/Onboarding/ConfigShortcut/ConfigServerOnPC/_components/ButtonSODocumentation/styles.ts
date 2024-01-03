import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;

  elevation: 5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  border-radius: 12px;
`;

export const BoxName = styled.View`
  flex: 1;
  margin-left: 24px;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  width: 32px;
  height: 32px;
`;
