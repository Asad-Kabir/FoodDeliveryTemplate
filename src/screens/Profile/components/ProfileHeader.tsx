/**
 * @file ProfileHeader.tsx
 * @description Profile screen header with avatar and user info
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
import { UserProfile } from '../hooks/useProfile';

interface ProfileHeaderProps {
  user: UserProfile;
  onEditPress: () => void;
}

const ProfileHeader = ({ user, onEditPress }: ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>{user.avatar}</Text>
        <TouchableOpacity
          style={styles.editAvatarButton}
          onPress={onEditPress}
          activeOpacity={0.8}>
          <AppIcon name="camera-outline" size={14} color={Colors.textWhite} />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={onEditPress}
        activeOpacity={0.8}>
        <AppIcon name="create-outline" size={16} color={Colors.primary} />
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.background,
    marginBottom: Spacing.md,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  avatar: {
    fontSize: 72,
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: 100,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: 'hidden',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  name: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  email: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    backgroundColor: Colors.background,
  },
  editText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.primary,
  },
});

export default ProfileHeader;