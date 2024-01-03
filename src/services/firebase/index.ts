import firestore from '@react-native-firebase/firestore';
import { IApp } from 'mocks/appList';
import webApps from 'mocks/webApps';

const appsCollection = firestore().collection('WebApps');

export const FirebaseService = {
  setMockWebAppsOnFirebase: async () => {
    await appsCollection.add({
      apps: webApps,
    });
  },
  getAppsList: async (): Promise<IApp[]> => {
    const result = await appsCollection.get();

    return result.docs[0].data()?.apps as IApp[];
  },
};
