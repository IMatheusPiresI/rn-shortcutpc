import { fireEvent, render, screen } from '@testing-library/react-native';
import { Button, IButtonVariants } from '@components/Button';
import { ThemeProvider } from 'styled-components/native';
import theme from 'resources/theme';

describe('Button Tests', () => {
  const onPress = jest.fn();
  const renderButton = (variant?: IButtonVariants, disabled?: boolean) => (
    <ThemeProvider theme={theme}>
      <Button
        title="Title Button"
        variant={variant}
        disabled={disabled}
        onPress={onPress}
      />
    </ThemeProvider>
  );
  it('Should be render title button', () => {
    render(renderButton());

    const titleButton = screen.getByText('Title Button');

    expect(titleButton).toBeVisible();
  });

  it('Should be render outline variant', () => {
    render(renderButton('outline'));

    const button = screen.getByTestId('button');
    expect(button).toHaveStyle({
      borderColor: theme.colors.primary,
      borderWidth: 1,
    });
  });

  it('Should be render critical variant', () => {
    render(renderButton('critical'));

    const button = screen.getByTestId('button');
    expect(button).toHaveStyle({
      backgroundColor: theme.colors.critical_light,
    });
  });

  it('Should be render correct disabled style', () => {
    render(renderButton('critical', true));

    const button = screen.getByTestId('button');

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.gray,
    });
  });

  it('Should be verify onPress button', async () => {
    render(renderButton('critical'));

    const button = screen.getByTestId('button');

    await fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
