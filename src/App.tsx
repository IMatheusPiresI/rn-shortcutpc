import React from 'react';
import theme from '@resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from 'routes';
import { AppConfigurationProvider } from 'contexts/AppConfiguration';
import { ErrorControlProvider } from 'contexts/ErrorControl';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorControlProvider>
        <AppConfigurationProvider>
          <AppRoutes />
        </AppConfigurationProvider>
      </ErrorControlProvider>
    </ThemeProvider>
  );
};

export default App;
