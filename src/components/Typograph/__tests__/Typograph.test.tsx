import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import { IColors, Typograph } from '@components/Typograph';
import theme from 'resources/theme';

describe('Typograph Tests', () => {
  const renderTypograph = (color: IColors) => (
    <ThemeProvider theme={theme}>
      <Typograph
        font="Roboto-Bold"
        fontSize={12}
        color={color}
        alignment="justify"
        flex
        lineHeight={24}
      >
        My Text
      </Typograph>
    </ThemeProvider>
  );

  it('should be render correct text', () => {
    render(renderTypograph('primary'));

    const text = screen.getByText('My Text');

    expect(text).toBeTruthy();
  });

  it('should be render the correct gray color', () => {
    render(renderTypograph('gray'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ color: theme.colors.gray });
  });

  it('should be render the correct primary color', () => {
    render(renderTypograph('primary'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ color: theme.colors.primary });
  });

  it('should be render the correct text color', () => {
    render(renderTypograph('text'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ color: theme.colors.text });
  });

  it('should be render the correct white color', () => {
    render(renderTypograph('white'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ color: theme.colors.white });
  });

  it('should be render the correct critical color', () => {
    render(renderTypograph('critical'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ color: theme.colors.critical });
  });

  it('should be render the correct flex style', () => {
    render(renderTypograph('critical'));

    const typograph = screen.getByText('My Text');

    expect(typograph).toHaveStyle({ flexGrow: 1 });
  });
});
