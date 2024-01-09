import { IApp } from 'mocks/appList';
import { useCallback, useState } from 'react';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

export const useAppsSelectedsConfiguration = () => {
  const [appsList, setAppsList] = useState<IApp[]>([]);

  const { getListAppConfiguration, setListAppConfiguration } =
    useAppConfigurationMMKV();

  const getAppList = useCallback(() => {
    const appList = getListAppConfiguration();

    if (!appList) return;
    setAppsList(appList);
  }, []);

  const editAppSelectedConfiguration = (app: IApp) => {
    const newList = appsList.map((appList) => {
      if (appList.name === app.name) {
        return app;
      }
      return appList;
    });

    setAppsList(newList);
    setListAppConfiguration(newList);
  };

  const removeAppSelectedConfiguration = (app: IApp) => {
    const newList = appsList.map((appList) => {
      if (appList.name === app.name) {
        appList.selected = false;

        if (appList.appOpenningOptions?.web) {
          appList.appOpenningOptions.web.map((openning) => {
            openning.selected = false;
            return openning;
          });
        }
        if (appList.appOpenningOptions?.app) {
          appList.appOpenningOptions.app.selected = false;
        }

        return appList;
      }

      return appList;
    });

    setAppsList(newList);
    setListAppConfiguration(newList);
  };

  const removeMultiplesAppsConfiguration = (apps: IApp[]) => {
    const newList = appsList.map((appList) => {
      if (!apps.some((app) => app.name === appList.name)) {
        return appList;
      }
      appList.selected = false;

      if (appList.appOpenningOptions?.web) {
        appList.appOpenningOptions.web.map((openning) => {
          openning.selected = false;
          return openning;
        });
      }
      if (appList.appOpenningOptions?.app) {
        appList.appOpenningOptions.app.selected = false;
      }
      return appList;
    });
    setListAppConfiguration(newList);
    setAppsList(newList);
  };

  const addMultiplesAppsOnSelecteds = (apps: IApp[]) => {
    const newList = appsList.map((app1) => {
      const matchingApp2 = apps.find((app2) => app2.name === app1.name);

      if (matchingApp2?.selected) {
        return matchingApp2;
      }

      return app1;
    });

    setAppsList(newList);
    setListAppConfiguration(newList);
  };

  return {
    appsList,
    removeAppSelectedConfiguration,
    removeMultiplesAppsConfiguration,
    getAppList,
    editAppSelectedConfiguration,
    addMultiplesAppsOnSelecteds,
  };
};
