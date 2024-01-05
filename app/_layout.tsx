import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

const MainLayout = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <Slot />
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default MainLayout;
