import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack';
import SplashScreen from 'react-native-splash-screen';
import { ModalError } from 'components/Modals/ModalError';
import { useErrorControlContext } from 'contexts/ErrorControl';

export const AppRoutes: React.FC = () => {
  const { showModalError } = useErrorControlContext();
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}
    >
      <StackRoutes />
      <ModalError visible={showModalError} />
    </NavigationContainer>
  );
};
