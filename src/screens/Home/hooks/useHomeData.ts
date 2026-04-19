/**
 * @file useHomeData.ts
 * @description Home screen data & state management
 */

import { useState, useCallback } from 'react';
import {
  DUMMY_RESTAURANTS,
  FOOD_CATEGORIES,
} from '@constants/index';
import { Restaurant, Category } from '@typings/index';

const useHomeData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter restaurants by search & category
  const filteredRestaurants = DUMMY_RESTAURANTS.filter(restaurant => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || restaurant.cuisine === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredRestaurants = DUMMY_RESTAURANTS.filter(r => r.isFeatured);

  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(prev => (prev === categoryId ? '' : categoryId));
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    handleCategorySelect,
    filteredRestaurants,
    featuredRestaurants,
    categories: FOOD_CATEGORIES,
    isLoading,
  };
};

export default useHomeData;