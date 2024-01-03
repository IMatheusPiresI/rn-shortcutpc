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
    <Stack.Navigator initialRouteName="Home" screenOptions={stackConfig}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ConfigApp" component={ConfigApp} />
    </Stack.Navigator>
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
