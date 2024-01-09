import { renderHook } from '@testing-library/react-native';
import { useAppConfigurationMMKV } from './useAppConfigurationMMKV';
import appList from 'mocks/appList';

describe('useAppConfigurationMMKV Tests', () => {
  it('should be set IP Network Connected and verify IP', () => {
    const { result } = renderHook(() => useAppConfigurationMMKV());

    result.current.setIPNetworkConnected('192.168.1.1');
    const ip = result.current.getIPNetworkConnected();

    expect(ip).toBe('192.168.1.1');
  });

  it('should be set list app configuration and verify', () => {
    const { result } = renderHook(() => useAppConfigurationMMKV());

    result.current.setListAppConfiguration(appList);
    const listApps = result.current.getListAppConfiguration();

    expect(listApps).toStrictEqual(appList);
  });

  it('should be set list app configuration and verify', () => {
    const { result } = renderHook(() => useAppConfigurationMMKV());

    const passwordMock = 'passwordPC';

    result.current.setComputerPasswordConfigValue(passwordMock);
    const passwordPC = result.current.getComputerPasswordConfigValue();

    expect(passwordPC).toBe(passwordMock);
  });

  it('should be return null on dont exist apps list', () => {
    const { result } = renderHook(() => useAppConfigurationMMKV());

    const passwordPC = result.current.getListAppConfiguration();

    expect(passwordPC).toBe(null);
  });
});
