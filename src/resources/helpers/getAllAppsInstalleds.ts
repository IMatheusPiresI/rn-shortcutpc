import { IApp } from 'mocks/appList';
import { INavigators } from 'mocks/webApps';
import { getUrlIconNavigator } from 'resources/utils/getURLNavigator';
import { FirebaseService } from 'services/firebase';
import { ServerPCService } from 'services/serverPC';

export const getAllAppsDownloadeds = async () => {
  const appsInstalleds = await ServerPCService.getAppsList();
  const webApps = await FirebaseService.getAppsList();
  const webAppsFormatted: IApp[] = webApps.map((app) => {
    return {
      id: app.id,
      name: app.name,
      logo: app.logo,
      url: app.url,
      selected: false,
      appOpenningOptions: {
        web: appsInstalleds.navigators.map((navigator: INavigators, index) => {
          return {
            id: String(index),
            name: navigator,
            logo: getUrlIconNavigator(navigator),
            selected: false,
          };
        }),
      },
    };
  });
  const myApps: IApp[] = appsInstalleds.apps.map((app) => {
    return {
      id: app.id,
      name: app.name,
      logo: app.image,
      selected: false,
      appOpenningOptions: {
        app: {
          id: app.id,
          name: app.name,
          logo: app.image,
          selected: false,
        },
      },
    };
  });

  const allApsInstalleds = [...webAppsFormatted, ...myApps];

  return allApsInstalleds;
};
