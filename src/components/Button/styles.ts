import styled, { css } from 'styled-components/native';
import { IButtonVariants } from '.';

type IVariant = {
  variant?: IButtonVariants;
};

export const Container = styled.TouchableOpacity<IVariant>`
  width: 100%;
  height: 42px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.gray};
    `}

  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-color: ${theme.colors.primary};
    `}

  ${({ variant, theme }) =>
    variant === 'critical' &&
    css`
      background-color: ${theme.colors.critical_light};
    `}
`;
