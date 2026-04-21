/**
 * @file App.tsx
 * @description Root component with Redux Provider
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { store } from '@store/index';
import AppNavigator from '@navigation/index';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash.hide({ fade: true });
    };
    hideSplash();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;