/**
 * @file App.tsx
 * @description Root component of FoodDelivery Template
 */

import AppNavigator from '@navigation/index';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash'

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash?.hide({ fade: true });
    };
    hideSplash();
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;