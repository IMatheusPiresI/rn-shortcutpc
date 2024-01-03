import { IApp, IAppOpenned } from 'mocks/appList';
import { INavigators } from 'mocks/webApps';
import { api } from 'services';

type IGetAppsList = {
  apps: {
    id: string;
    name: string;
    image: string;
  }[];
  navigators: INavigators[];
};

export const ServerPCService = {
  verifyConnection: async () => {
    const result = await api.get('/connection/verify-connection-server');

    return result.data;
  },
  openAppSelected: async (app: IAppOpenned) => {
    const result = await api.post('/appAction/open-app-selected', app);

    return result.data;
  },
  getAppsList: async () => {
    const result = await api.get<IGetAppsList>('/appInstalled/list-apps');

    return result.data;
  },
};
