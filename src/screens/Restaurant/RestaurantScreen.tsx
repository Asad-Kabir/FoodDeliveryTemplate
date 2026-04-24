/**
 * @file RestaurantScreen.tsx
 * @description Restaurant detail with menu and cart
 * Navigation: RestaurantDetail -> Cart
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';

// ─── Components ───────────────────────────────────────────
import RestaurantHeader from './components/RestaurantHeader';
import FoodItemCard from './components/FoodItemCard';
import CartFooter from './components/CartFooter';
import useRestaurantDetail from './hooks/useRestaurantDetail';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RestaurantDetail'>;
  route: RouteProp<RootStackParamList, 'RestaurantDetail'>;
};

const RestaurantScreen = ({ navigation, route }: Props) => {
  const { restaurantId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    restaurant,
    categories,
    filteredItems,
    selectedCategory,
    setSelectedCategory,
    totalCartItems,
    getItemQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  } = useRestaurantDetail(restaurantId);

  if (!restaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Restaurant not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          totalCartItems > 0 ? styles.scrollWithCart : undefined
        }
      >
        {/* Header */}
        <RestaurantHeader
          restaurant={restaurant}
          onBack={() => navigation.goBack()}
          onFavorite={() => setIsFavorite(prev => !prev)}
          isFavorite={isFavorite}
        />

        {/* Category Tabs */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories?.map(category => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryTab,
                  selectedCategory === category && styles.categoryTabSelected,
                ]}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.categoryTabText,
                    selectedCategory === category &&
                      styles.categoryTabTextSelected,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Food Items */}
        <View style={styles.itemsContainer}>
          <Text style={styles.itemsCount}>{filteredItems.length} items</Text>
          {filteredItems.map(item => (
            <FoodItemCard
              key={item.id}
              item={item}
              quantity={getItemQuantity(item.id)}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
            />
          ))}
        </View>
      </ScrollView>

      {/* Cart Footer */}
      <CartFooter
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  scrollWithCart: {
    paddingBottom: 100,
  },
  categoryContainer: {
    backgroundColor: Colors.background,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginVertical: Spacing.md,
  },
  categoryList: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  categoryTab: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.backgroundGrey,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  categoryTabSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryTabText: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.semiBold,
    color: Colors.textSecondary,
  },
  categoryTabTextSelected: {
    color: Colors.textWhite,
  },
  itemsContainer: {
    paddingTop: Spacing.md,
  },
  itemsCount: {
    fontSize: FontSize.sm,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  errorText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.semiBold,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.xxxl,
  },
});

export default RestaurantScreen;
