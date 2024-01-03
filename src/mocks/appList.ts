export type IApp = {
  id: string;
  name: string;
  selected: boolean;
  logo: string;
  appOpenningOptions: IOpenningOptions;
  url?: string;
};

export type IAppOpenned = {
  id: string;
  name: string;
  url?: string;
  appOpenningOptions: IOpenningOptions;
};

export type IOpenningOptions = {
  web?: IOpenningOption[];
  app?: IOpenningOption;
};

export type IOpenningOption = {
  id: string;
  name: string;
  selected: boolean;
  logo?: string;
};

const appList: IApp[] = [
  {
    id: '1aadsdasd',
    name: 'Netflix',
    selected: false,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png',
    appOpenningOptions: {
      web: [
        {
          id: '112321321',
          name: 'Safari',
          selected: false,
          logo: 'https://cdn.icon-icons.com/icons2/2552/PNG/512/safari_ios_browser_logo_icon_152966.png',
        },
        {
          id: '2asdsadasdasdasdsa',
          name: 'Google Chrome',
          selected: false,
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZAhfbL5trHXMNqYsDGUaUX8dd_8lWSX7Mk4FmINaBg&s',
        },
      ],
    },
  },
  {
    id: '21232131231232133123',
    name: 'Prime Video',
    selected: false,
    logo: 'https://logodownload.org/wp-content/uploads/2018/07/prime-video-logo-1.png',
    appOpenningOptions: {
      web: [
        {
          id: '1sadsacsacsadsadsa',
          name: 'Safari',
          selected: false,
          logo: 'https://cdn.icon-icons.com/icons2/2552/PNG/512/safari_ios_browser_logo_icon_152966.png',
        },
        {
          id: '2csacsacasdasdsadsa',
          name: 'Google Chrome',
          selected: false,
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZAhfbL5trHXMNqYsDGUaUX8dd_8lWSX7Mk4FmINaBg&s',
        },
      ],
    },
  },
  {
    id: '3wewqeweewqewqewqewq',
    name: 'Teams',
    selected: false,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
    appOpenningOptions: {
      web: [
        {
          id: '1sadsadsadsadsa',
          name: 'Safari',
          selected: false,
          logo: 'https://cdn.icon-icons.com/icons2/2552/PNG/512/safari_ios_browser_logo_icon_152966.png',
        },
        {
          id: '2cxzczxcsadsadasd',
          name: 'Google Chrome',
          selected: false,
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZAhfbL5trHXMNqYsDGUaUX8dd_8lWSX7Mk4FmINaBg&s',
        },
      ],
      app: {
        id: '535325325',
        name: 'Teams',
        selected: false,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
      },
    },
  },
  {
    id: 'dff;asf;asflafl;a',
    name: 'Discord',
    selected: false,
    logo: 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-7-1.png',
    appOpenningOptions: {
      web: [
        {
          id: '1sadsadsadsadsa',
          name: 'Safari',
          selected: false,
          logo: 'https://cdn.icon-icons.com/icons2/2552/PNG/512/safari_ios_browser_logo_icon_152966.png',
        },
        {
          id: '2cxzczxcsadsadasd',
          name: 'Google Chrome',
          selected: false,
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZAhfbL5trHXMNqYsDGUaUX8dd_8lWSX7Mk4FmINaBg&s',
        },
      ],
      app: {
        id: 'adsadsadsadsad',
        name: 'Discord',
        selected: false,
        logo: 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-7-1.png',
      },
    },
  },
];

export default appList;
