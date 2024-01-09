import { IApp } from 'mocks/appList';
import { MMKV } from 'react-native-mmkv';

export const useAppConfigurationMMKV = () => {
  const KEY_APP_LIST_CONFIGURATION = 'listAppsConfiguration';
  const KEY_APP_IP_CONFIGURATION = 'IPConnection';
  const KEY_APP_COMPUTER_PASSWORD = 'ComputerPassword';
  const KEY_APP_COMPUTER_PASSWORD_VALUE = 'ComputerPasswordValue';

  const store = new MMKV({
    id: '@shortcutPC',
  });

  const setIPNetworkConnected = (ip: string) => {
    store.set(KEY_APP_IP_CONFIGURATION, ip);
  };
  const getIPNetworkConnected = (): string | undefined => {
    const userIp = store.getString(KEY_APP_IP_CONFIGURATION);
    return userIp;
  };

  const setListAppConfiguration = (listApps: IApp[]) => {
    store.set(KEY_APP_LIST_CONFIGURATION, JSON.stringify(listApps));
  };

  const getComputerPasswordConfigBool = () => {
    const passwordConfigBool = store.getBoolean(KEY_APP_COMPUTER_PASSWORD);

    return passwordConfigBool;
  };

  const setComputerPasswordConfigBool = (optionValue: boolean) => {
    store.set(KEY_APP_COMPUTER_PASSWORD, optionValue);
  };

  const getComputerPasswordConfigValue = () => {
    const passwordValue = store.getString(KEY_APP_COMPUTER_PASSWORD_VALUE);

    return passwordValue;
  };

  const setComputerPasswordConfigValue = (password: string) => {
    store.set(KEY_APP_COMPUTER_PASSWORD_VALUE, password);
  };

  const getListAppConfiguration = (): IApp[] | null => {
    const jsonListApps = store.getString(KEY_APP_LIST_CONFIGURATION);

    if (jsonListApps) {
      const listApps: IApp[] = JSON.parse(jsonListApps);

      return listApps;
    }
    return null;
  };

  return {
    setListAppConfiguration,
    getListAppConfiguration,
    setIPNetworkConnected,
    getIPNetworkConnected,
    getComputerPasswordConfigBool,
    setComputerPasswordConfigBool,
    getComputerPasswordConfigValue,
    setComputerPasswordConfigValue,
  };
};
