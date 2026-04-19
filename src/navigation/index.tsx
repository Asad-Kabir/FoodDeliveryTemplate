/**
 * @file navigation/index.tsx
 * @description Root navigation setup for FoodDelivery app
 * Handles Auth flow and Main app flow separately
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// ─── Screens Import ───────────────────────────────────────
import OnboardingScreen from '@screens/Auth/Onboarding/OnboardingScreen';
import LoginScreen from '@screens/Auth/Login/LoginScreen';
import SignupScreen from '@screens/Auth/Signup/SignupScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import CartScreen from '@screens/Cart/CartScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import RestaurantScreen from '@screens/Restaurant/RestaurantScreen';

// ─── Types ────────────────────────────────────────────────
import { RootStackParamList } from '@typings/index';
import { Colors } from '@theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// ─── Bottom Tab Navigator ─────────────────────────────────
/**
 * Main tab navigation shown after login
 * Contains: Home, Cart, Profile
 */
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.border,
          height: 60,
          paddingBottom: 8,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>🛒</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 20, color }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// ─── Root Navigator ───────────────────────────────────────
/**
 * Root stack navigator
 * Controls auth flow vs main app flow
 */
const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />

      {/* Main App */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

// ─── App Navigator ────────────────────────────────────────
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;