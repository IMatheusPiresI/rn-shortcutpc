import React, { ReactNode } from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Typograph } from '@components/Typograph';

export type IButtonVariants = 'outline';
type IProps = {
  title: string;
  variant?: IButtonVariants;
} & TouchableOpacityProps;

export const Button: React.FC<IProps> = ({ title, variant, ...rest }) => {
  return (
    <S.Container variant={variant} {...rest}>
      <Typograph
        color={variant === 'outline' ? 'primary' : 'white'}
        font="Roboto-Bold"
        fontSize={18}
      >
        {title}
      </Typograph>
    </S.Container>
  );
};
