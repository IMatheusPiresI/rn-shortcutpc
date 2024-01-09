import React from 'react';
import theme from '@resources/theme';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from 'routes';
import { AppConfigurationProvider } from 'contexts/AppConfiguration';
import { ErrorControlProvider } from 'contexts/ErrorControl';
import { Platform, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorControlProvider>
        <AppConfigurationProvider>
          <AppRoutes />
          {Platform.OS === 'android' && (
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          )}
        </AppConfigurationProvider>
      </ErrorControlProvider>
    </ThemeProvider>
  );
};

export default App;
