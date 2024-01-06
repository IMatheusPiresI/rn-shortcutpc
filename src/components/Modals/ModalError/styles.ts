import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Container = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
`;

export const Header = styled.View``;

export const Content = styled.View`
  margin-top: 12px;
`;

export const BoxLoadingOrStatus = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WrapperLoadingMessage = styled.View`
  gap: 24px;
  margin-bottom: 24px;
`;

export const BoxStatus = styled.View`
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
`;

export const Loading = styled.ActivityIndicator``;

export const ButtonClose = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 22,
    left: 22,
    right: 22,
    bottom: 22,
  },
})`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 99;
`;

export const RNModal = styled(Modal)`
  margin: 0;
  align-items: center;
`;
