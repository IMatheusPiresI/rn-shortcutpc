import { IApp } from 'mocks/appList';
import { getAllAppsDownloadeds } from './getAllAppsInstalleds';

export const getAllAppsUnuseds = async (appsList: IApp[]) => {
  const allAppsInstalleds = await getAllAppsDownloadeds();

  const allApps = allAppsInstalleds.map((appSelecionado) => {
    const appExistente = appsList.find(
      (app) => app.name === appSelecionado.name,
    );

    if (appExistente) {
      return appExistente;
    }

    return { ...appSelecionado };
  });

  const allAppsUnused = allApps.filter((app) => !app.selected);
  return allAppsUnused;
};
