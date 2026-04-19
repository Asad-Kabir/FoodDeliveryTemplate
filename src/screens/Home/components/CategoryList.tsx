/**
 * @file CategoryList.tsx
 * @description Horizontal scrollable food categories
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { Category } from '@typings/index';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

const CategoryItem = ({
  item,
  isSelected,
  onPress,
}: {
  item: Category;
  isSelected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.categoryItem, isSelected && styles.categoryItemSelected]}
    onPress={onPress}
    activeOpacity={0.8}>
    <Text style={styles.categoryEmoji}>{item.icon}</Text>
    <Text
      style={[
        styles.categoryName,
        isSelected && styles.categoryNameSelected,
      ]}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            isSelected={selectedCategory === item.id}
            onPress={() => onSelectCategory(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.sm,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.backgroundGrey,
    borderWidth: 1.5,
    borderColor: Colors.border,
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  categoryItemSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryEmoji: {
    fontSize: 16,
  },
  categoryName: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.textSecondary,
  },
  categoryNameSelected: {
    color: Colors.textWhite,
  },
});

export default CategoryList;