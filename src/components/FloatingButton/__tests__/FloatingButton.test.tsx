import { fireEvent, render, screen } from '@testing-library/react-native';
import theme from 'resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { FloatingButton } from '@components/FloatingButton';
import { useAppConfigurationMMKV } from '@resources/hooks/useAppConfigurationMMKV';
import { ServerPCService } from 'services/serverPC';

// Mock useAppConfigurationMMKV
jest.mock('@resources/hooks/useAppConfigurationMMKV', () => {
  const originalModule = jest.requireActual(
    '@resources/hooks/useAppConfigurationMMKV',
  );

  return {
    ...originalModule,
    useAppConfigurationMMKV: jest.fn(),
  };
});

// Mock ServerPCService.postUnblock
jest.mock('services/serverPC');
const mockPostUnblock = jest.fn();
ServerPCService.postUnblock = mockPostUnblock;

describe('FloatingButton Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const renderFloatingButton = () => (
    <ThemeProvider theme={theme}>
      <FloatingButton />
    </ThemeProvider>
  );

  it('Should be execute Service Unblock Screen with the password mock', async () => {
    (useAppConfigurationMMKV as jest.Mock).mockReturnValue({
      getComputerPasswordConfigValue: jest.fn(() => 'sua-string-de-mock'),
    });

    render(renderFloatingButton());

    const floatingButton = screen.getByTestId('FloatingButton');

    fireEvent.press(floatingButton);

    expect(mockPostUnblock).toHaveBeenCalledWith({
      password: 'sua-string-de-mock',
    });
    expect(mockPostUnblock).toHaveBeenCalledTimes(1);
  });

  it('Should be not execute ServerPCService without password', async () => {
    (useAppConfigurationMMKV as jest.Mock).mockReturnValue({
      getComputerPasswordConfigValue: jest.fn(() => undefined),
    });
    render(renderFloatingButton());

    const floatingButton = screen.getByTestId('FloatingButton');

    fireEvent.press(floatingButton);

    expect(mockPostUnblock).not.toHaveBeenCalled();
  });
});
