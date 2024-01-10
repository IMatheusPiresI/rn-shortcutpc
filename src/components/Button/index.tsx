import React, { ReactNode } from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Typograph } from '@components/Typograph';
import theme from 'resources/theme';

export type IButtonVariants = 'outline' | 'critical';
type IProps = {
  title: string;
  variant?: IButtonVariants;
} & TouchableOpacityProps;

export const Button: React.FC<IProps> = ({ title, variant, ...rest }) => {
  const getColor = () => {
    switch (variant) {
      case 'critical':
        return 'critical';
      case 'outline':
        return 'primary';
      default:
        return 'white';
    }
  };
  return (
    <S.Container variant={variant} {...rest} testID="button">
      <Typograph color={getColor()} font="Roboto-Bold" fontSize={18}>
        {title}
      </Typograph>
    </S.Container>
  );
};
