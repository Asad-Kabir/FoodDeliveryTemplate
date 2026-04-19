/**
 * @file HomeScreen.tsx
 * @description Main home screen — restaurants discovery
 * Navigation: Home -> RestaurantDetail | Home -> Cart
 */

import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { Spacing } from '@theme/spacing';
import { FontSize, FontFamily } from '@theme/typography';
import { RootStackParamList } from '@typings/index';

// ─── Components ───────────────────────────────────────────
import HomeHeader from './components/HomeHeader';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import RestaurantCard from './components/RestaurantCard';
import SectionHeader from './components/SectionHeader';
import useHomeData from './hooks/useHomeData';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;
};

const HomeScreen = ({ navigation }: Props) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredRestaurants,
    featuredRestaurants,
    categories,
  } = useHomeData();

  const handleRestaurantPress = (id: string) => {
    // TODO: Navigate to RestaurantDetail
    // console.log('Restaurant:', id);
    navigation.navigate('RestaurantDetail', { restaurantId: id });
  };

  const handleCartPress = () => {
    // TODO: Navigate to Cart
    console.log('Cart pressed');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <HomeHeader onCartPress={handleCartPress} cartCount={2} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>

        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Good Morning! 👋</Text>
          <Text style={styles.welcomeSubtext}>What would you like to eat?</Text>
        </View>

        {/* Search Bar — Sticky */}
        <View style={styles.searchWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFilterPress={() => console.log('Filter')}
          />
        </View>

        {/* Categories */}
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Featured Restaurants */}
        {featuredRestaurants.length > 0 && (
          <View style={styles.section}>
            <SectionHeader
              title="Featured"
              onSeeAll={() => console.log('See all featured')}
            />
            <FlatList
              data={featuredRestaurants}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.featuredList}
              renderItem={({ item }) => (
                <RestaurantCard
                  restaurant={item}
                  onPress={handleRestaurantPress}
                  variant="horizontal"
                />
              )}
            />
          </View>
        )}

        {/* All Restaurants */}
        <View style={styles.section}>
          <SectionHeader
            title={
              filteredRestaurants.length > 0
                ? 'All Restaurants'
                : 'No Results'
            }
          />
          {filteredRestaurants.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>🍽️</Text>
              <Text style={styles.emptyText}>No restaurants found</Text>
              <Text style={styles.emptySubtext}>Try a different search</Text>
            </View>
          ) : (
            filteredRestaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onPress={handleRestaurantPress}
                variant="vertical"
              />
            ))
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
  },
  welcomeContainer: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
    backgroundColor: Colors.backgroundGrey,
  },
  welcomeText: {
    fontSize: FontSize.xxl,
    fontFamily: FontFamily.bold,
    color: Colors.textPrimary,
  },
  welcomeSubtext: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  searchWrapper: {
    backgroundColor: Colors.backgroundGrey,
    paddingVertical: Spacing.xs,
  },
  section: {
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  featuredList: {
    paddingLeft: Spacing.lg,
    paddingRight: Spacing.sm,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: Spacing.xxxl,
  },
  emptyEmoji: {
    fontSize: 50,
    marginBottom: Spacing.md,
  },
  emptyText: {
    fontSize: FontSize.lg,
    fontFamily: FontFamily.semiBold,
    color: Colors.textPrimary,
  },
  emptySubtext: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.regular,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
});

export default HomeScreen;