import { IApp } from 'mocks/appList';
import React, { ReactNode, createContext, useContext, useEffect } from 'react';
import { useAppsSelectedsConfiguration } from './hooks/useAppsSelectedsConfiguration';
import { useAppsNotUsedConfiguration } from './hooks/useAppsNotUsedConfiguration';

type IProviderChildren = {
  children: ReactNode;
};

type IValuesProvider = {
  appsList: IApp[];
  editAppNotUsedConfiguration: (app: IApp) => void;
  editAppSelectedConfiguration: (app: IApp) => void;
  removeAppSelectedConfiguration: (app: IApp) => void;
  removeMultiplesAppsConfiguration: (apps: IApp[]) => void;
  getAppsNotUsed: () => Promise<void>;
  addMultiplesAppsOnSelecteds: (apps: IApp[]) => void;
  appsNotUsed: IApp[];
};

export const AppControlContext = createContext<IValuesProvider>(
  {} as IValuesProvider,
);

export const AppControlProvider = ({ children }: IProviderChildren) => {
  const {
    appsList,
    editAppSelectedConfiguration,
    getAppList,
    removeAppSelectedConfiguration,
    removeMultiplesAppsConfiguration,
    addMultiplesAppsOnSelecteds,
  } = useAppsSelectedsConfiguration();

  const { appsNotUsed, getAppsNotUsed, editAppNotUsedConfiguration } =
    useAppsNotUsedConfiguration(appsList);

  useEffect(() => {
    getAppList();
  }, [getAppList]);

  return (
    <AppControlContext.Provider
      value={{
        appsList,
        appsNotUsed,
        getAppsNotUsed,
        addMultiplesAppsOnSelecteds,
        editAppNotUsedConfiguration,
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
