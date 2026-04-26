/**
 * @file ProfileScreen.tsx
 * @description User profile with settings and menu options
 * Navigation: Profile -> Login (on logout)
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';

// ─── Components ───────────────────────────────────────────
import ProfileHeader from './components/ProfileHeader';
import ProfileStats from './components/ProfileStats';
import ProfileMenuItem from './components/ProfileMenuItem';
import useProfile from './hooks/useProfile';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;
};

// ─── Section Component ────────────────────────────────────
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionCard}>{children}</View>
  </View>
);

// ─── Divider ──────────────────────────────────────────────
const Divider = () => <View style={styles.menuDivider} />;

const ProfileScreen = ({ navigation }: Props) => {
  const {
    user,
    notificationsEnabled,
    setNotificationsEnabled,
    darkModeEnabled,
    setDarkModeEnabled,
    handleLogout,
  } = useProfile();

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () =>
            handleLogout(() => navigation.replace('Login')),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header Title */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Header */}
        <ProfileHeader
          user={user}
          onEditPress={() => console.log('Edit profile')}
        />

        {/* Stats */}
        <ProfileStats />

        {/* Account Section */}
        <Section title="Account">
          <ProfileMenuItem
            icon="person-outline"
            title="Personal Information"
            subtitle="Name, email, phone"
            onPress={() => console.log('Personal info')}
          />
          <Divider />
          <ProfileMenuItem
            icon="location-outline"
            iconColor="#5B8FF9"
            iconBg="#EEF3FF"
            title="Saved Addresses"
            subtitle="Home, Work, Other"
            onPress={() => console.log('Addresses')}
          />
          <Divider />
          <ProfileMenuItem
            icon="card-outline"
            iconColor="#7B61FF"
            iconBg="#F0EEFF"
            title="Payment Methods"
            subtitle="Cards, wallets"
            onPress={() => console.log('Payment')}
          />
        </Section>

        {/* Orders Section */}
        <Section title="Orders">
          <ProfileMenuItem
            icon="receipt-outline"
            iconColor="#FF8C00"
            iconBg="#FFF4E5"
            title="Order History"
            subtitle="View all past orders"
            onPress={() => console.log('Order history')}
          />
          <Divider />
          <ProfileMenuItem
            icon="heart-outline"
            iconColor="#FF4D6A"
            iconBg="#FFF0F3"
            title="Favourite Restaurants"
            subtitle="Your saved places"
            onPress={() => console.log('Favourites')}
          />
        </Section>

        {/* Settings Section */}
        <Section title="Settings">
          <ProfileMenuItem
            icon="notifications-outline"
            iconColor="#FF9500"
            iconBg="#FFF4E5"
            title="Notifications"
            subtitle="Push, email alerts"
            showSwitch
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
          />
          <Divider />
          <ProfileMenuItem
            icon="moon-outline"
            iconColor="#5B6CF9"
            iconBg="#EEEEFF"
            title="Dark Mode"
            showSwitch
            switchValue={darkModeEnabled}
            onSwitchChange={setDarkModeEnabled}
          />
          <Divider />
          <ProfileMenuItem
            icon="language-outline"
            iconColor="#34C759"
            iconBg="#EDFAF1"
            title="Language"
            subtitle="English"
            onPress={() => console.log('Language')}
          />
        </Section>

        {/* Support Section */}
        <Section title="Support">
          <ProfileMenuItem
            icon="help-circle-outline"
            iconColor="#32ADE6"
            iconBg="#E5F6FF"
            title="Help & Support"
            onPress={() => console.log('Help')}
          />
          <Divider />
          <ProfileMenuItem
            icon="shield-checkmark-outline"
            iconColor="#30B050"
            iconBg="#EDFAF1"
            title="Privacy Policy"
            onPress={() => console.log('Privacy')}
          />
          <Divider />
          <ProfileMenuItem
            icon="document-text-outline"
            iconColor="#8E8E93"
            iconBg="#F2F2F7"
            title="Terms of Service"
            onPress={() => console.log('Terms')}
          />
        </Section>

        {/* Logout */}
        <View style={styles.logoutSection}>
          <ProfileMenuItem
            icon="log-out-outline"
            iconColor={Colors.error}
            iconBg="#FFF0F3"
            title="Logout"
            isDestructive
            showArrow={false}
            onPress={confirmLogout}
          />
        </View>

        {/* Version */}
        <Text style={styles.version}>Version 1.0.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  section: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionCard: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  menuDivider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginLeft: Spacing.lg + 40 + Spacing.md,
  },
  logoutSection: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  version: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: Spacing.xxxl,
  },
});

export default ProfileScreen;