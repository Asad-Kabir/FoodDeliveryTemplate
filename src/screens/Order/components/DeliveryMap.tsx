/**
 * @file DeliveryMap.tsx
 * @description Animated delivery map placeholder
 * Replace with real map (react-native-maps) in production
 */

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { OrderStep } from '@typings/index';

const { width } = Dimensions.get('window');

interface DeliveryMapProps {
  currentStep: OrderStep;
  estimatedTime: string;
}

const DeliveryMap = ({ currentStep, estimatedTime }: DeliveryMapProps) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const riderAnim = useRef(new Animated.Value(0)).current;

  // Pulse animation for active marker
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  // Rider movement animation
  useEffect(() => {
    if (currentStep === 'on_the_way') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(riderAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(riderAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [currentStep]);

  const riderTranslate = riderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 10],
  });

  return (
    <View style={styles.container}>
      {/* Map Background */}
      <View style={styles.mapBackground}>
        {/* Grid Lines */}
        {[...Array(5)].map((_, i) => (
          <View key={`h${i}`} style={[styles.gridLine, styles.horizontalLine, { top: `${20 * (i + 1)}%` }]} />
        ))}
        {[...Array(5)].map((_, i) => (
          <View key={`v${i}`} style={[styles.gridLine, styles.verticalLine, { left: `${20 * (i + 1)}%` }]} />
        ))}

        {/* Route Line */}
        <View style={styles.routeLine} />

        {/* Restaurant Marker */}
        <View style={[styles.marker, styles.restaurantMarker]}>
          <Text style={styles.markerEmoji}>🍔</Text>
        </View>

        {/* Rider Marker */}
        {currentStep === 'on_the_way' && (
          <Animated.View
            style={[
              styles.marker,
              styles.riderMarker,
              { transform: [{ translateX: riderTranslate }] },
            ]}>
            <Text style={styles.markerEmoji}>🛵</Text>
          </Animated.View>
        )}

        {/* Home Marker */}
        <Animated.View
          style={[
            styles.marker,
            styles.homeMarker,
            { transform: [{ scale: pulseAnim }] },
          ]}>
          <AppIcon name="location" size={24} color={Colors.primary} />
        </Animated.View>

        {/* ETA Badge */}
        <View style={styles.etaBadge}>
          <AppIcon name="time-outline" size={14} color={Colors.primary} />
          <Text style={styles.etaText}>{estimatedTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  mapBackground: {
    height: 200,
    backgroundColor: '#E8F4EA',
    position: 'relative',
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  horizontalLine: {
    left: 0,
    right: 0,
    height: 1,
  },
  verticalLine: {
    top: 0,
    bottom: 0,
    width: 1,
  },
  routeLine: {
    position: 'absolute',
    top: '50%',
    left: '20%',
    right: '20%',
    height: 3,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    borderStyle: 'dashed',
  },
  marker: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantMarker: {
    left: '15%',
    top: '35%',
    backgroundColor: Colors.background,
    borderRadius: 20,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  riderMarker: {
    left: '45%',
    top: '35%',
  },
  homeMarker: {
    right: '15%',
    top: '30%',
  },
  etaBadge: {
    position: 'absolute',
    bottom: Spacing.md,
    alignSelf: 'center',
    left: '30%',
    right: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  etaText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.bold,
    color: Colors.primary,
  },
  markerEmoji: {
    fontSize: 20,
  },
});

export default DeliveryMap;