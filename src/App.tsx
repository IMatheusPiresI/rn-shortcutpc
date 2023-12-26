import React from 'react';
import theme from '@resources/theme';
import Presentation from 'screens/Onboarding/Presentation';
import { ThemeProvider } from 'styled-components/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Presentation />
    </ThemeProvider>
  );
};

export default App;
