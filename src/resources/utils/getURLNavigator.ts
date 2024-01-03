import { INavigators } from 'mocks/webApps';

export const getUrlIconNavigator = (navigator: INavigators) => {
  switch (navigator) {
    case INavigators.Google_Chrome:
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png';
    case INavigators.Safari:
      return 'https://w7.pngwing.com/pngs/397/51/png-transparent-safari-computer-icons-ios-7-web-browser-safari-blue-angle-logo.png';
    case INavigators.Opera:
      return 'https://w7.pngwing.com/pngs/459/99/png-transparent-opera-mini-web-browser-computer-icons-opera-logo-number-google-chrome.png';
    case INavigators.Firefox:
      return 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Firefox_logo%2C_2019.png';
    case INavigators.Microsoft_Edge:
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png';
    case INavigators.Opera_GX:
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Opera_GX_Icon.svg/2048px-Opera_GX_Icon.svg.png';
    case INavigators.Arc:
      return 'https://seeklogo.com/images/A/arc-logo-D5E236F329-seeklogo.com.png';
  }
};
