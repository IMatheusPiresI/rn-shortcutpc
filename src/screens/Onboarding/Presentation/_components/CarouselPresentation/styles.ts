import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs(
  {},
)`` as unknown as typeof FlatList;

export const Content = styled.View`
  margin-top: 42px;
  align-items: center;
  gap: 45px;
`;

export const FooterCarousel = styled.View``;
