import { Modal } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

type IBoder = {
  border?: boolean;
};

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 20px;

  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
`;

export const BoxName = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const ButtonIconOption = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 24,
    left: 24,
    right: 24,
    bottom: 24,
  },
})`
  gap: 4px;
`;

export const CancelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ButtonDelete = styled.TouchableOpacity``;

export const CancelButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px 12px;

  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 40px;
`;

export const BoxHorizontalBar = styled(Animated.View)`
  width: 20px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const RNModal = styled(Modal)`
  margin: 0;
`;

export const MContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  top: 40px;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const BoxButton = styled.TouchableOpacity``;

export const BoxContentOptions = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const ButtonOption = styled.TouchableOpacity<IBoder>`
  padding: 8px 12px;
  flex-direction: row;
  gap: 6px;
  align-items: center;

  ${({ border }) =>
    border &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.gray};
    `}
`;
