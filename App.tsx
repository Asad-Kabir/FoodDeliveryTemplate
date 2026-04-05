/**
 * @file App.tsx
 * @description Root component of FoodDelivery Template
 */

import AppNavigator from '@navigation/index';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from '@navigation/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;