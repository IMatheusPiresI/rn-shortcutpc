import React, { ReactNode } from 'react';

import * as S from './styles';
import theme from '@resources/theme';
import { TextProps } from 'react-native';

export type IFonts = 'Roboto-Regular' | 'Roboto-Medium' | 'Roboto-Bold';

type IProps = {
  children: ReactNode;
  fontSize?: number;
  font?: IFonts;
  color?: 'primary' | 'text' | 'white' | 'critical';
  flex?: boolean;
  alignment?: 'justify' | 'center';
  lineHeight?: number;
} & TextProps;

export const Typograph: React.FC<IProps> = ({
  children,
  color,
  font = 'Roboto-Regular',
  fontSize = 12,
  flex,
  alignment,
  lineHeight,
  ...rest
}) => {
  const getColor = (): string => {
    switch (color) {
      case 'primary':
        return theme.colors.primary;
      case 'text':
        return theme.colors.text;
      case 'white':
        return theme.colors.white;
      case 'critical':
        return theme.colors.critical;
      default:
        return theme.colors.black;
    }
  };

  return (
    <S.TypographText
      color={getColor()}
      font={font}
      fontSize={fontSize}
      flex={flex}
      alignment={alignment}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </S.TypographText>
  );
};
