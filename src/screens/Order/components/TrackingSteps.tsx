/**
 * @file TrackingSteps.tsx
 * @description Animated order tracking steps
 */

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { TrackingStep } from '@typings/index';

interface TrackingStepsProps {
  steps: TrackingStep[];
  getStepStatus: (id: any) => 'completed' | 'active' | 'pending';
}

const StepItem = ({
  step,
  status,
  isLast,
}: {
  step: TrackingStep;
  status: 'completed' | 'active' | 'pending';
  isLast: boolean;
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(
    status === 'pending' ? 0.4 : 1,
  )).current;

  useEffect(() => {
    if (status === 'active') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.15,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }

    Animated.timing(opacityAnim, {
      toValue: status === 'pending' ? 0.4 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [status]);

  const iconColor =
    status === 'completed'
      ? Colors.success
      : status === 'active'
      ? Colors.primary
      : Colors.textLight;

  const bgColor =
    status === 'completed'
      ? '#E8F8F0'
      : status === 'active'
      ? '#FFF0E8'
      : Colors.backgroundGrey;

  return (
    <Animated.View style={[styles.stepContainer, { opacity: opacityAnim }]}>
      {/* Icon + Line */}
      <View style={styles.iconColumn}>
        <Animated.View
          style={[
            styles.iconContainer,
            { backgroundColor: bgColor },
            status === 'active' && styles.activeIconContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}>
          {status === 'completed' ? (
            <AppIcon name="checkmark" size={20} color={Colors.success} />
          ) : (
            <AppIcon name={step.icon} size={20} color={iconColor} />
          )}
        </Animated.View>

        {!isLast && (
          <View
            style={[
              styles.connector,
              status === 'completed' && styles.connectorCompleted,
            ]}
          />
        )}
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.stepTitle,
            status === 'active' && styles.stepTitleActive,
          ]}>
          {step.title}
        </Text>
        <Text style={styles.stepDescription}>{step.description}</Text>
        {step.time && status !== 'pending' && (
          <Text style={styles.stepTime}>{step.time}</Text>
        )}
      </View>
    </Animated.View>
  );
};

const TrackingSteps = ({ steps, getStepStatus }: TrackingStepsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          step={step}
          status={getStepStatus(step.id)}
          isLast={index === steps.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  stepContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  iconColumn: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  connector: {
    width: 2,
    flex: 1,
    minHeight: 24,
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  connectorCompleted: {
    backgroundColor: Colors.success,
  },
  textContainer: {
    flex: 1,
    paddingBottom: Spacing.md,
  },
  stepTitle: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  stepTitleActive: {
    color: Colors.primary,
  },
  stepDescription: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  stepTime: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    color: Colors.textLight,
    marginTop: 4,
  },
});

export default TrackingSteps;