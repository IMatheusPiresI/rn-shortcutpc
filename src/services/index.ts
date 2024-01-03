import axios from 'axios';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

export const api = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getApiUrlFromStorage = () => {
  const { getIPNetworkConnected } = useAppConfigurationMMKV();

  const userIp = getIPNetworkConnected();

  console.log(`http://${userIp}:3000`);

  return `http://${userIp}:3000`;
};

api.interceptors.request.use(
  async (config) => {
    const apiUrl = getApiUrlFromStorage();

    if (apiUrl) {
      config.baseURL = apiUrl;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
