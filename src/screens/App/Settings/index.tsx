import React, { useState } from 'react';

import * as S from './styles';

import { Header } from 'components/Header';

const Settings: React.FC = () => {
  return (
    <S.Container>
      <S.SafeArea>
        <Header />
      </S.SafeArea>
    </S.Container>
  );
};

export default Settings;
