import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack';
import SplashScreen from 'react-native-splash-screen';

export const AppRoutes: React.FC = () => (
  <NavigationContainer
    onReady={() => {
      SplashScreen.hide();
    }}
  >
    <StackRoutes />
  </NavigationContainer>
);
