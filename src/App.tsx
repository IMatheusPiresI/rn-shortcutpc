import React from 'react';
import theme from '@resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from 'routes';
import { AppConfigurationProvider } from 'contexts/AppConfiguration';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppConfigurationProvider>
        <AppRoutes />
      </AppConfigurationProvider>
    </ThemeProvider>
  );
};

export default App;
