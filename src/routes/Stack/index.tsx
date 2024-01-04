import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import Presentation from '@screens/Onboarding/Presentation';
import RecoverUserIP from '@screens/Onboarding/ConfigShortcut/RecoverUserIP';
import SelectAppsControl from 'screens/Onboarding/ConfigShortcut/SelectAppsControl';
import ConfigApp from 'screens/Onboarding/ConfigShortcut/ConfigApp';
import ConfigServerOnPC from 'screens/Onboarding/ConfigShortcut/ConfigServerOnPC';
import Home from 'screens/App/Home';
import { useAppConfigurationMMKV } from 'resources/hooks/useAppConfigurationMMKV';
import EditConfigApp from 'screens/App/EditConfigApp';
import { AppControlContext, AppControlProvider } from 'contexts/AppControl';
import Settings from 'screens/App/Settings';

const Stack = createStackNavigator();

const stackConfig: StackNavigationOptions = {
  headerShown: false,
};

const StackPresentation = () => {
  return (
    <Stack.Navigator
      initialRouteName="PresentationHome"
      screenOptions={stackConfig}
    >
      <Stack.Screen name="PresentationHome" component={Presentation} />
      <Stack.Screen name="RecoverUserIP" component={RecoverUserIP} />
      <Stack.Screen name="SelectAppsControl" component={SelectAppsControl} />
      <Stack.Screen name="ConfigApp" component={ConfigApp} />
      <Stack.Screen name="ConfigServerOnPC" component={ConfigServerOnPC} />
    </Stack.Navigator>
  );
};

const StackApp = () => {
  return (
    <AppControlProvider>
      <Stack.Navigator initialRouteName="Home" screenOptions={stackConfig}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditConfigApp" component={EditConfigApp} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </AppControlProvider>
  );
};

export const StackRoutes = () => {
  const { getListAppConfiguration } = useAppConfigurationMMKV();

  const listApps = getListAppConfiguration();

  if (!listApps) {
    return (
      <Stack.Navigator screenOptions={stackConfig}>
        <Stack.Screen name="Presentation" component={StackPresentation} />
        <Stack.Screen name="App" component={StackApp} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={stackConfig}>
      <Stack.Screen name="App" component={StackApp} />
    </Stack.Navigator>
  );
};
