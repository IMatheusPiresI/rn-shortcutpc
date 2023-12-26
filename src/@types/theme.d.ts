import theme from '@resources/theme';
import 'styled-components';

declare module 'styled-components' {
  type IThemeType = typeof theme;

  export interface DefaultTheme extends IThemeType {}
}
