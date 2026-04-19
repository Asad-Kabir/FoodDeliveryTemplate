/**
 * @file SearchBar.tsx
 * @description Search bar for restaurants
 */

import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from '@components/common/AppIcon';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress?: () => void;
}

const SearchBar = ({ value, onChangeText, onFilterPress }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <AppIcon name="search-outline" size={20} color={Colors.textLight} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Search restaurants or food..."
          placeholderTextColor={Colors.textLight}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={() => onChangeText('')}>
            <AppIcon name="close-circle" size={18} color={Colors.textLight} />
          </TouchableOpacity>
        )}
      </View>

      {/* Filter Button */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterPress}
        activeOpacity={0.8}>
        <AppIcon name="options-outline" size={20} color={Colors.textWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundGrey,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
    height: 50,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  input: {
    flex: 1,
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textPrimary,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;