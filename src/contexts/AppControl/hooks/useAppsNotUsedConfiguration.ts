import { IApp } from 'mocks/appList';
import { useState } from 'react';
import { getAllAppsUnuseds } from 'resources/helpers/getAllAppsUnuseds';

export const useAppsNotUsedConfiguration = (appList: IApp[]) => {
  const [appsNotUsed, setAppsNotUsed] = useState<IApp[]>([]);

  const getAppsNotUsed = async () => {
    const result = await getAllAppsUnuseds(appList);

    setAppsNotUsed(result);
  };

  const editAppNotUsedConfiguration = (app: IApp) => {
    const newList = appsNotUsed.map((appList) => {
      if (appList.name === app.name) {
        return app;
      }

      return appList;
    });

    setAppsNotUsed(newList);
  };

  return {
    appsNotUsed,
    getAppsNotUsed,
    editAppNotUsedConfiguration,
  };
};
