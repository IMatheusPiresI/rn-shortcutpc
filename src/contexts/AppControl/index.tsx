import { IApp } from 'mocks/appList';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

type IProviderChildren = {
  children: ReactNode;
};

type IValuesProvider = {
  appsList: IApp[];
  editAppSelectedConfiguration: (app: IApp) => void;
  removeAppSelectedConfiguration: (app: IApp) => void;
  removeMultiplesAppsConfiguration: (apps: IApp[]) => void;
};

export const AppControlContext = createContext<IValuesProvider>(
  {} as IValuesProvider,
);

export const AppControlProvider = ({ children }: IProviderChildren) => {
  const [appsList, setAppsList] = useState<IApp[]>([]);
  const {
    getListAppConfiguration,
    editAppConfiguration,
    removeAppConfiguration,
    setListAppConfiguration,
  } = useAppConfigurationMMKV();

  const getAppList = useCallback(() => {
    const appList = getListAppConfiguration();

    if (!appList) return;
    setAppsList(appList);
  }, []);

  const editAppSelectedConfiguration = (app: IApp) => {
    editAppConfiguration(app);
    const newList = appsList.map((appList) => {
      if (appList.id === app.id) {
        return app;
      }
      return appList;
    });

    setAppsList(newList);
  };

  const removeAppSelectedConfiguration = (app: IApp) => {
    removeAppConfiguration(app);
    const newList = appsList.filter((appList) => appList.id !== app.id);

    setAppsList(newList);
  };

  const removeMultiplesAppsConfiguration = (apps: IApp[]) => {
    const newList = appsList.filter((appList) => {
      if (!apps.some((app) => app.id === appList.id)) {
        return appList;
      }
    });
    setListAppConfiguration(newList);
    setAppsList(newList);
  };

  useEffect(() => {
    getAppList();
  }, [getAppList]);

  return (
    <AppControlContext.Provider
      value={{
        appsList,
        editAppSelectedConfiguration,
        removeAppSelectedConfiguration,
        removeMultiplesAppsConfiguration,
      }}
    >
      {children}
    </AppControlContext.Provider>
  );
};

export const useAppControlContext = () => {
  const context = useContext(AppControlContext);
  return context;
};
