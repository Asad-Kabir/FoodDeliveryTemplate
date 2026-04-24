/**
 * @file OrderScreen.tsx
 * @description Live order tracking screen
 * Navigation: OrderTracking -> Home (on delivered)
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';

// ─── Components ───────────────────────────────────────────
import OrderHeader from './components/OrderHeader';
import DeliveryMap from './components/DeliveryMap';
import TrackingSteps from './components/TrackingSteps';
import RiderInfo from './components/RiderInfo';
import useOrderTracking from './hooks/useOrderTracking';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OrderTracking'>;
  route: RouteProp<RootStackParamList, 'OrderTracking'>;
};

const OrderScreen = ({ navigation, route }: Props) => {
  const { orderId } = route.params;

  const {
    steps,
    currentStep,
    isDelivered,
    getStepStatus,
  } = useOrderTracking(orderId);

  const estimatedTime =
    currentStep === 'confirmed'
      ? '30 mins'
      : currentStep === 'preparing'
      ? '20 mins'
      : currentStep === 'on_the_way'
      ? '10 mins'
      : 'Delivered!';

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <OrderHeader
        orderId={orderId}
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Delivered Banner */}
        {isDelivered && (
          <View style={styles.deliveredBanner}>
            <Text style={styles.deliveredEmoji}>🎉</Text>
            <View>
              <Text style={styles.deliveredTitle}>Order Delivered!</Text>
              <Text style={styles.deliveredSubtitle}>
                Enjoy your meal!
              </Text>
            </View>
          </View>
        )}

        {/* Map */}
        <DeliveryMap
          currentStep={currentStep}
          estimatedTime={estimatedTime}
        />

        {/* Rider Info — only when on the way */}
        {(currentStep === 'on_the_way' || currentStep === 'delivered') && (
          <RiderInfo />
        )}

        {/* Tracking Steps */}
        <TrackingSteps
          steps={steps}
          getStepStatus={getStepStatus}
        />

      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.footer}>
        {isDelivered ? (
          <TouchableOpacity
            style={styles.rateButton}
            onPress={() => navigation.navigate('MainTabs')}
            activeOpacity={0.8}>
            <Text style={styles.rateButtonText}>Rate Your Order ⭐</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.helpButton}
            activeOpacity={0.8}>
            <Text style={styles.helpButtonText}>Need Help?</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  scrollContent: {
    paddingTop: Spacing.md,
    paddingBottom: 100,
  },
  deliveredBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    backgroundColor: '#E8F8F0',
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.success,
  },
  deliveredEmoji: {
    fontSize: 36,
  },
  deliveredTitle: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.success,
  },
  deliveredSubtitle: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  rateButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  rateButtonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textWhite,
  },
  helpButton: {
    backgroundColor: Colors.backgroundGrey,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  helpButtonText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
});

export default OrderScreen;