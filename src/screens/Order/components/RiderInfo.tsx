/**
 * @file RiderInfo.tsx
 * @description Rider info card with call & chat buttons
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

const RiderInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.riderRow}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>👨‍🦱</Text>
        </View>

        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.name}>Ahmad Hassan</Text>
          <View style={styles.ratingRow}>
            <AppIcon name="star" size={12} color={Colors.star} />
            <Text style={styles.rating}>4.8 • Your Rider</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.callButton]}
            activeOpacity={0.8}>
            <AppIcon name="call" size={18} color={Colors.textWhite} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.chatButton]}
            activeOpacity={0.8}>
            <AppIcon name="chatbubble-outline" size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
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
  riderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.backgroundGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  rating: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callButton: {
    backgroundColor: Colors.primary,
  },
  chatButton: {
    backgroundColor: Colors.backgroundGrey,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
});

export default RiderInfo;