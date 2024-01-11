import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import theme from 'resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { Header } from '@components/Header';
import { NavigationContainer } from '@react-navigation/native';

type IProps = {
  showArrow: boolean;
  onSelectApps: boolean;
  showDeleteOption: boolean;
  showMenu: boolean;
};
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => mockNavigation,
}));

describe('Header Tests', () => {
  const onDeletePress = jest.fn();
  const onCancel = jest.fn();
  const renderHeader = ({
    onSelectApps,
    showArrow,
    showDeleteOption,
    showMenu,
  }: IProps) => (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Header
          showArrow={showArrow}
          onDeletePress={onDeletePress}
          onCancel={onCancel}
          onSelectApps={onSelectApps}
          showDeleteOption={showDeleteOption}
          showMenu={showMenu}
        />
      </ThemeProvider>
    </NavigationContainer>
  );

  it('should be render logo app', () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const logo = screen.getByTestId('logo');

    expect(logo).toBeVisible();
  });

  it('should be render menu options', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const burguerMenu = screen.getByTestId('HeaderMenu');

    act(() => {
      fireEvent.press(burguerMenu);
    });

    const menuOptions = screen.getByTestId('ModalOptions');
    await waitFor(() => expect(menuOptions).toBeVisible());

    expect(menuOptions).toBeVisible();
  });

  it('should be press button Add More Apps on modal option and navigate to route AddMoreApps', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const burguerMenu = screen.getByTestId('HeaderMenu');

    act(() => {
      fireEvent.press(burguerMenu);
    });

    const menuOptions = screen.getByTestId('ModalOptionAdd');

    fireEvent.press(menuOptions);

    await waitFor(() => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith('AddMoreAppss');
    });
  });

  it('should be press button Settings on modal option and navigate to route Settings', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const burguerMenu = screen.getByTestId('HeaderMenu');

    act(() => {
      fireEvent.press(burguerMenu);
    });

    const buttonSettings = screen.getByTestId('ModalOptionSettings');

    fireEvent.press(buttonSettings);

    await waitFor(() => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith('Settings');
    });
  });

  it('should be press arrow go back and verify goBack function is called', async () => {
    render(
      renderHeader({
        showArrow: true,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const goBackButton = screen.getByTestId('HeaderGoBack');

    fireEvent.press(goBackButton);

    await waitFor(() => {
      expect(mockNavigation.goBack).toHaveBeenCalled();
    });
  });

  it('should be show header on select apps mode and called onCancel', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: true,
        showDeleteOption: true,
        showMenu: true,
      }),
    );

    const buttonCancelSelect = screen.getByTestId('HeaderCancelSelectApps');

    act(() => {
      fireEvent.press(buttonCancelSelect);
    });

    expect(onCancel).toHaveBeenCalled();
  });

  it('should be show header on select apps mode and called onCancel', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: true,
        showDeleteOption: true,
        showMenu: true,
      }),
    );

    const buttonDeleteSelectedApps = screen.getByTestId(
      'HeaderDeleteSelectedApps',
    );

    act(() => {
      fireEvent.press(buttonDeleteSelectedApps);
    });

    expect(onDeletePress).toHaveBeenCalled();
  });

  it('should be show header on select apps mode and called onCancel', async () => {
    render(
      renderHeader({
        showArrow: false,
        onSelectApps: false,
        showDeleteOption: false,
        showMenu: true,
      }),
    );

    const burguerMenu = screen.getByTestId('HeaderMenu');

    act(() => {
      fireEvent.press(burguerMenu);
    });

    const touchableFeedback = screen.getByTestId('HeaderTouchCloseModal');

    act(() => {
      fireEvent.press(touchableFeedback);
    });

    const modal = screen.queryByTestId('ModalOptions');

    expect(modal).not.toBeVisible();
  });
});
