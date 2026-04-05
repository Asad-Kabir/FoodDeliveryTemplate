/**
 * @file OnboardingScreen.tsx
 * @description App onboarding flow with 3 slides
 * Shows app features to new users before login
 * Navigation: Onboarding -> Login
 */

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { Spacing, BorderRadius } from '@theme/spacing';
import { FontSize, FontWeight } from '@theme/typography';
import { ONBOARDING_DATA } from '@constants/index';
import { RootStackParamList } from '@typings/index';

// ─── Types ────────────────────────────────────────────────
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
};

const { width, height } = Dimensions.get('window');

// ─── Slide Item Component ─────────────────────────────────
/**
 * Individual onboarding slide
 */
const SlideItem = ({ item }: { item: typeof ONBOARDING_DATA[0] }) => {
  return (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      {/* Emoji Illustration */}
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

// ─── Dot Indicator Component ──────────────────────────────
/**
 * Animated pagination dots
 */
const DotIndicator = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <View style={styles.dotsContainer}>
      {ONBOARDING_DATA.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentIndex ? Colors.primary : Colors.border,
              width: index === currentIndex ? 24 : 8,
            },
          ]}
        />
      ))}
    </View>
  );
};

// ─── Main Screen ──────────────────────────────────────────
const OnboardingScreen = ({ navigation }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Handle next button
  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace('Login');
    }
  };

  // Handle skip
  const handleSkip = () => {
    navigation.replace('Login');
  };

  // Track current slide
  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const isLastSlide = currentIndex === ONBOARDING_DATA.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      {/* Skip Button */}
      {!isLastSlide && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        renderItem={({ item }) => <SlideItem item={item} />}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Dot Indicators */}
        <DotIndicator currentIndex={currentIndex} />

        {/* Next / Get Started Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {isLastSlide ? "Get Started 🚀" : "Next →"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ─── Styles ───────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  skipButton: {
    position: 'absolute',
    top: Spacing.xl,
    right: Spacing.lg,
    zIndex: 1,
    padding: Spacing.sm,
  },
  skipText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.textSecondary,
  },
  slide: {
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emojiContainer: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xxl,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  emoji: {
    fontSize: 100,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.md,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: Spacing.md,
  },
  bottomContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    paddingTop: Spacing.lg,
    backgroundColor: Colors.background,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
    gap: Spacing.xs,
  },
  dot: {
    height: 8,
    borderRadius: BorderRadius.full,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.textWhite,
  },
});

export default OnboardingScreen;