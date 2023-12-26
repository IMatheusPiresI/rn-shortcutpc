import React, { ReactNode } from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Typograph } from '@components/Typograph';

type IProps = {
  title: string;
} & TouchableOpacityProps;

export const Button: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <S.Container {...rest}>
      <Typograph color="white" font="Roboto-Bold" fontSize={18}>
        {title}
      </Typograph>
    </S.Container>
  );
};
