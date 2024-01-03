import React from 'react';

import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { IOpenningOption } from 'mocks/appList';
import { verifyURL } from 'resources/utils/verifyURL';

type IProps = {
  app: IOpenningOption;
} & TouchableOpacityProps;

export const CardAppSelect: React.FC<IProps> = ({ app, ...rest }) => {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <S.Logo
        source={{
          uri: verifyURL(app.logo),
        }}
        resizeMode="contain"
      />
      <S.BoxSelect>{app.selected && <S.BoxSelected />}</S.BoxSelect>
    </S.Container>
  );
};
