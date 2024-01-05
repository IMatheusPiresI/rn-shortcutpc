import { FlatList } from 'react-native';
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
`;

export const Header = styled.View`
  padding: 0 20px;
  margin-top: 16px;
`;

export const Footer = styled.View`
  padding: 0 20px 20px;
`;

export const BoxList = styled.View`
  flex: 1;
`;

export const ListApps = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  showsVerticalScrollIndicator: false,
})`` as unknown as typeof FlatList;

export const LoadingComponent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;

export const EmptyComponent = styled.View`
  margin-top: 24px;
`;
