/**
 * @file ProfileMenuItem.tsx
 * @description Reusable profile menu item
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

interface ProfileMenuItemProps {
  icon: string;
  iconColor?: string;
  iconBg?: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  isDestructive?: boolean;
}

const ProfileMenuItem = ({
  icon,
  iconColor = Colors.primary,
  iconBg = '#FFF0E8',
  title,
  subtitle,
  onPress,
  showArrow = true,
  showSwitch = false,
  switchValue,
  onSwitchChange,
  isDestructive = false,
}: ProfileMenuItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={showSwitch}>
      {/* Icon */}
      <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
        <AppIcon
          name={icon}
          size={20}
          color={isDestructive ? Colors.error : iconColor}
        />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            isDestructive && styles.destructiveTitle,
          ]}>
          {title}
        </Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {/* Right Side */}
      {showSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: Colors.border, true: Colors.primary }}
          thumbColor={Colors.background}
        />
      ) : showArrow ? (
        <AppIcon
          name="chevron-forward"
          size={18}
          color={Colors.textLight}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    backgroundColor: Colors.background,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  destructiveTitle: {
    color: Colors.error,
  },
  subtitle: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

export default ProfileMenuItem;