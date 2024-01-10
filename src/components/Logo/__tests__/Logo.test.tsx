import { render, screen } from '@testing-library/react-native';
import { Logo } from '@components/Logo';

describe('Logo Tests', () => {
  it('should be render logo', () => {
    render(<Logo />);

    const logo = screen.getByTestId('logo');

    expect(logo).toBeVisible();
  });

  it('should be render title app', () => {
    render(<Logo showText />);

    const titleLogo = screen.getByText('ShortcutPC');

    expect(titleLogo).toBeVisible();
  });
});
