import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
} from '@testing-library/react-native';
import theme from 'resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { SwitchOption } from '@components/SwitchOption';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';

describe('SwitchOption Tests', () => {
  const KEY_SWITCH_OPTION_BUTTON = 'SwitchOptionButton';

  const renderSwitchOption = (optionSelected: boolean) => {
    const setOptionSelected = jest.fn();

    return (
      <ThemeProvider theme={theme}>
        <SwitchOption
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      </ThemeProvider>
    );
  };
  it('should be render init witch OFF option selected and change to ON', () => {
    render(renderSwitchOption(false));

    const switchOption = screen.getByTestId(KEY_SWITCH_OPTION_BUTTON);

    fireEvent.press(switchOption);

    const nameOn = screen.getByText('ON');

    expect(nameOn).toBeVisible();
  });

  it('should be render init witch ON option selected and change to OFF', () => {
    render(renderSwitchOption(true));

    const switchOption = screen.getByTestId(KEY_SWITCH_OPTION_BUTTON);

    fireEvent.press(switchOption);

    const nameOff = screen.getByText('OFF');

    expect(nameOff).toBeVisible();
  });

  it('should be get option MMKV and start witch ON', () => {
    render(renderSwitchOption(false));

    const switchOption = screen.getByTestId(KEY_SWITCH_OPTION_BUTTON);

    fireEvent.press(switchOption);

    const nameOn = screen.getByText('ON');

    expect(nameOn).toBeVisible();
  });
});
