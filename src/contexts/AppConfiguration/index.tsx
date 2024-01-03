import appList, { IApp } from 'mocks/appList';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

type IProviderChildren = {
  children: ReactNode;
};

type IValuesProvider = {
  appsList: IApp[];
  setAppConfiguration: (appSelected: IApp) => void;
  setAppsInstalledList: (apps: IApp[]) => void;
  removeConfigurationApp: (appSelected: IApp) => void;
  finishOnboardingSelectedApps: () => void;
};

export const AppConfigurationContext = createContext<IValuesProvider>(
  {} as IValuesProvider,
);

export const AppConfigurationProvider = ({ children }: IProviderChildren) => {
  const [appsList, setAppsList] = useState<IApp[]>([]);
  const { setListAppConfiguration } = useAppConfigurationMMKV();

  const setAppConfiguration = (appSelected: IApp) => {
    setAppsList((prevState) =>
      prevState.map((app) => {
        if (app.id === appSelected.id) {
          appSelected.selected = true;
          return appSelected;
        } else {
          return app;
        }
      }),
    );
  };

  const removeConfigurationApp = (appSelected: IApp) => {
    setAppsList((prevState) =>
      prevState.map((app) => {
        if (app.id === appSelected.id) {
          app.selected = false;
          app.appOpenningOptions?.web?.map((navigator) => {
            navigator.selected = false;
            return navigator;
          });

          return app;
        } else {
          return app;
        }
      }),
    );
  };

  const setAppsInstalledList = (apps: IApp[]) => {
    setAppsList(apps);
  };

  const finishOnboardingSelectedApps = () => {
    setListAppConfiguration(appsList);
  };

  return (
    <AppConfigurationContext.Provider
      value={{
        appsList,
        setAppConfiguration,
        setAppsInstalledList,
        removeConfigurationApp,
        finishOnboardingSelectedApps,
      }}
    >
      {children}
    </AppConfigurationContext.Provider>
  );
};

export const useAppListConfiguration = () => {
  const context = useContext(AppConfigurationContext);
  return context;
};
