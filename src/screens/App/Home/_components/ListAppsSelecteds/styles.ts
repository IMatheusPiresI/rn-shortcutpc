import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const ListApps = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
    gap: 20,
  },
})`` as unknown as typeof FlatList;

export const ContainerEmpty = styled.View`
  margin: 20px 0;
`;
