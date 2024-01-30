import React from 'react';
import * as S from './styles';
import { Typograph } from 'components/Typograph';
import { TouchableOpacityProps } from 'react-native';
import ArrowLeft from '@assets/arrow-left.svg';

type IProps = {
  title: string;
  url: string;
} & TouchableOpacityProps;

export const ButtonSODocumentation: React.FC<IProps> = ({
  title,
  url,
  ...rest
}) => {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.ImageLogo
        source={{
          uri: url,
        }}
        resizeMode="contain"
      />
      <S.BoxName>
        <Typograph font="Roboto-Bold" color="text" fontSize={16}>
          {title}
        </Typograph>
      </S.BoxName>
      <ArrowLeft width={16} height={16} />
    </S.Container>
  );
};
