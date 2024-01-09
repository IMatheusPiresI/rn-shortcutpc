import { render, screen } from '@testing-library/react-native';
import appList from 'mocks/appList';
import { ThemeProvider } from 'styled-components/native';
import theme from 'resources/theme';
import { CardApp } from '@components/CardApp';

describe('CardApp Tests', () => {
  const mockApp = appList[0];

  const renderApp = () => (
    <ThemeProvider theme={theme}>
      <CardApp app={mockApp} />
    </ThemeProvider>
  );

  it('Verify title Card', () => {
    render(renderApp());

    const name = screen.getByText(mockApp.name);

    expect(name).toBeTruthy();
  });

  it('Verify CardApp is selected', () => {
    mockApp.selected = true;
    render(renderApp());

    const appSelected = screen.getByTestId('cardAppSelected');

    expect(appSelected).toBeTruthy();
  });
});
