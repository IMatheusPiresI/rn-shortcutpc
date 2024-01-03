import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack';

export const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
