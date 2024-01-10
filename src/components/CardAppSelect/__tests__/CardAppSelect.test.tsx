import { render, screen } from '@testing-library/react-native';
import { CardAppSelect } from '@components/CardAppSelect';
import appList from 'mocks/appList';
import { ThemeProvider } from 'styled-components/native';
import theme from 'resources/theme';

describe('CardAppSelect Tests', () => {
  const mockApp = appList[0];

  const renderCardAppSelect = () => (
    <ThemeProvider theme={theme}>
      <CardAppSelect app={mockApp} />
    </ThemeProvider>
  );

  it('should be render logo app', () => {
    render(renderCardAppSelect());

    const logo = screen.getByTestId('CardAppSelectLogo');

    expect(logo).toBeVisible();
  });

  it('should be render selected layout', () => {
    mockApp.selected = true;
    render(renderCardAppSelect());

    const boxSelected = screen.getByTestId('CardAppSelectedBox');

    expect(boxSelected).toBeVisible();
  });

  it('should be not render logo undefined or null', () => {
    mockApp.logo = undefined;
    render(renderCardAppSelect());

    const boxSelected = screen.queryByTestId('CardAppSelectLogo');
    expect(boxSelected).toBeNull();
  });
});
