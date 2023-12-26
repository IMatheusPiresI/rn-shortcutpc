import React, { ReactNode } from 'react';

import * as S from './styles';
import ShortcutLogoSVG from '@assets/shortcutlogo.svg';
import { Typograph } from '@components/Typograph';

type IProps = {
  fontSize?: number;
  logoWidth?: number;
  logoHeight?: number;
  showText: boolean;
};

export const Logo: React.FC<IProps> = ({
  showText,
  fontSize = 28,
  logoHeight = 162,
  logoWidth = 180,
}) => {
  return (
    <S.Container>
      <ShortcutLogoSVG width={logoWidth} height={logoHeight} />
      {showText && (
        <Typograph fontSize={fontSize} color="primary" font="Roboto-Bold">
          ShortcutPC
        </Typograph>
      )}
    </S.Container>
  );
};
