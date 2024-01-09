import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;

  width: 60px;
  height: 60px;

  bottom: 80px;
  right: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 80px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.2;
  shadow-radius: 3.84px;

  elevation: 5;

  align-items: center;
  justify-content: center;
`;
