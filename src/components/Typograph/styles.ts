import styled, { css } from 'styled-components/native';
import { IFonts } from '.';

type ITypographTextProps = {
  font: IFonts;
  fontSize: number;
  color: string;
  flex?: boolean;
  alignment?: 'justify';
};

export const TypographText = styled.Text<ITypographTextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};

  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}

  ${({ alignment }) =>
    alignment &&
    css`
      text-align: ${alignment};
    `}
`;
