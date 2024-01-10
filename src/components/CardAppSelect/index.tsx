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
      {app.logo && (
        <S.Logo
          source={{
            uri: verifyURL(app.logo),
          }}
          resizeMode="contain"
          testID="CardAppSelectLogo"
        />
      )}
      <S.BoxSelect>
        {app.selected && <S.BoxSelected testID="CardAppSelectedBox" />}
      </S.BoxSelect>
    </S.Container>
  );
};
