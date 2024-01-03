import { IApp } from 'mocks/appList';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Presentation: undefined;
      App: undefined;
      RecoverUserIP: undefined;
      SelectAppsControl: undefined;
      ConfigApp: { app: IApp };
      ConfigServerOnPC: undefined;
    }
  }
}
