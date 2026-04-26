/**
 * @file ProfileStats.tsx
 * @description User order stats card
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

const stats = [
  { label: 'Orders', value: '12', emoji: '🛍️' },
  { label: 'Reviews', value: '8', emoji: '⭐' },
  { label: 'Saved', value: '5', emoji: '❤️' },
];

const ProfileStats = () => {
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <View style={styles.statItem}>
            <Text style={styles.emoji}>{stat.emoji}</Text>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
          {index < stats.length - 1 && (
            <View style={styles.divider} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  emoji: {
    fontSize: 24,
  },
  value: {
    fontSize: FontSize.xl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  label: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  divider: {
    width: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.xs,
  },
});

export default ProfileStats;