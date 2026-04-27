# 🍔 FoodDelivery — React Native App Template

A fully functional, production-ready Food Delivery app template built with **React Native + TypeScript**. Clean code, scalable architecture, and beautiful UI — ready to customize and publish.

![React Native](https://img.shields.io/badge/React_Native-0.76-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.0-purple?style=for-the-badge&logo=redux)
![Platform](https://img.shields.io/badge/Platform-iOS_%7C_Android-green?style=for-the-badge)

---

## ✨ Features

- 🔐 **Auth Flow** — Onboarding, Login, Signup with validation
- 🏠 **Home Screen** — Search, categories, featured & all restaurants
- 🍽️ **Restaurant Detail** — Menu with categories, food items, add to cart
- 🛒 **Cart** — Redux-powered global cart, promo codes, order summary
- 📍 **Order Tracking** — Live animated order status with rider info
- 👤 **Profile** — User info, settings, order history, logout
- 🎨 **Clean UI** — Poppins font, consistent design system
- 📱 **iOS & Android** — Fully tested on both platforms

---

## 🛠️ Tech Stack

| Package | Version | Purpose |
|--------|---------|---------|
| React Native | 0.76 | Core framework |
| TypeScript | 5.0 | Type safety |
| Redux Toolkit | 2.0 | Global state (cart) |
| React Navigation | 6.x | Navigation |
| React Native Vector Icons | 10.x | Icons (Ionicons) |
| React Native Bootsplash | 6.x | Splash screen |
| React Native Safe Area Context | 4.x | Safe area handling |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Poppins font family
│   ├── images/         # App images & logo
│   └── icons/          # Custom icons
├── components/
│   └── common/         # Reusable components
│       ├── AppIcon.tsx         # Vector icons wrapper
│       ├── SkeletonLoader.tsx  # Loading skeleton
│       ├── FadeInView.tsx      # Fade animation
│       └── SlideInView.tsx     # Slide animation
├── constants/
│   └── index.ts        # App constants & dummy data
├── navigation/
│   └── index.tsx       # Root navigation setup
├── screens/
│   ├── Auth/
│   │   ├── Onboarding/ # 3-slide onboarding
│   │   ├── Login/      # Email + Google + Apple login
│   │   └── Signup/     # Full registration form
│   ├── Home/           # Restaurant discovery
│   ├── Restaurant/     # Menu & add to cart
│   ├── Cart/           # Cart management
│   ├── Order/          # Live order tracking
│   └── Profile/        # User profile & settings
├── store/
│   ├── index.ts        # Redux store setup
│   └── slices/
│       ├── cartSlice.ts        # Cart state
│       └── cartSelectors.ts    # Memoized selectors
├── theme/
│   ├── colors.ts       # Color palette
│   ├── spacing.ts      # Spacing & border radius
│   ├── typography.ts   # Font styles
│   └── index.ts        # Theme exports
├── types/
│   └── index.ts        # TypeScript interfaces
└── utils/
    └── index.ts        # Helper functions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

**1. Extract the project**
```bash
cd FoodDeliveryTemplate
```

**2. Install dependencies**
```bash
npm install
```

**3. iOS — Install pods**
```bash
cd ios && pod install && cd ..
```

**4. Run on iOS**
```bash
npx react-native run-ios
```

**5. Run on Android**
```bash
npx react-native run-android
```

---

## 🎨 Customization

### Colors
Edit `src/theme/colors.ts`:
```typescript
export const Colors = {
  primary: '#FF6B35',      // Change to your brand color
  primaryDark: '#E55A25',
};
```

### Fonts
Replace font files in `src/assets/fonts/` and update `src/theme/typography.ts`.

### API Integration
Replace dummy data in `src/constants/index.ts` with real API calls in `src/services/`.

---

## 📱 Screens Overview

| Screen | Description |
|--------|-------------|
| Onboarding | 3 animated slides with skip/next |
| Login | Email/password + Google + Apple |
| Signup | Full registration with validation |
| Home | Search, categories, restaurant lists |
| Restaurant Detail | Menu tabs, food items, cart |
| Cart | Items, promo code, order summary |
| Order Tracking | Live animated status tracking |
| Profile | Settings, account, logout |

---

## 🔧 Path Aliases

```typescript
@screens    → src/screens
@components → src/components
@navigation → src/navigation
@store      → src/store
@theme      → src/theme
@assets     → src/assets
@utils      → src/utils
@constants  → src/constants
@typings    → src/types
```

---

## 📦 Redux Cart Usage

```typescript
import { useAppDispatch, useAppSelector } from '@store/index';
import { addItem, removeItem, clearCart } from '@store/slices/cartSlice';
import { selectTotalItems, selectSubtotal } from '@store/slices/cartSelectors';

// Add to cart
dispatch(addItem({ foodItem, restaurantId, restaurantName }));

// Get cart count
const totalItems = useAppSelector(selectTotalItems);

// Get subtotal
const subtotal = useAppSelector(selectSubtotal);
```

---

## 🆘 Support

Questions or issues? Contact via Codecanyon comments section.

---

## 📄 License

Licensed under Codecanyon Regular/Extended License.

---

*Built with React Native & TypeScript*