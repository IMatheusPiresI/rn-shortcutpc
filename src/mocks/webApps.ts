type IWebApps = {
  id: string;
  name: string;
  logo: string;
};

export enum INavigators {
  Google_Chrome = 'Google Chrome',
  Safari = 'Safari',
  Opera = 'Opera',
  Firefox = 'Firefox',
  Microsoft_Edge = 'Microsoft Edge',
  Opera_GX = 'Opera GX',
  Arc = 'Arc',
}

const webApps: IWebApps[] = [
  {
    id: '1',
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png',
    name: 'Netflix',
  },
  {
    id: '2',
    logo: 'https://logodownload.org/wp-content/uploads/2018/07/prime-video-logo-1.png',
    name: 'Prime Video',
  },
];

export default webApps;
