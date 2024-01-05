import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const SafeAreaContent = styled.View`
  padding: 20px 0;
  flex: 1;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 24px;
  z-index: 99;
`;
export const BoxLogo = styled.View``;

export const Content = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const BoxDescription = styled.View`
  gap: 14px;
  padding: 0 20px;
`;

export const BoxListApps = styled.View`
  flex: 1;
  margin: 4px 0;
`;

export const ListApps = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 12,
    padding: 20,
  },
})`` as unknown as typeof FlatList;

export const Footer = styled.View`
  padding: 0 20px;
`;
export const Header = styled.View``;
export const BoxOptionsNavigators = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`;

export const EmptyComponent = styled.View`
  margin-top: 24px;
`;

export const LoadingComponent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;
