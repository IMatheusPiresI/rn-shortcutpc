import React from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { IApp } from 'mocks/appList';
import { Typograph } from 'components/Typograph';
import { verifyURL } from 'resources/utils/verifyURL';

type IProps = {
  app: IApp;
} & TouchableOpacityProps;

export const CardApp: React.FC<IProps> = ({ app, ...rest }) => {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.Logo
        source={{
          uri: verifyURL(app.logo),
        }}
        resizeMode="contain"
      />
      <S.BoxName>
        <Typograph>{app.name}</Typograph>
      </S.BoxName>
      <S.BoxSelect>{app.selected && <S.BoxSelected />}</S.BoxSelect>
    </S.Container>
  );
};
