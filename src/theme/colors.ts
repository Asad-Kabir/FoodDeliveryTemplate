/**
 * @file colors.ts
 * @description Global color palette for FoodDelivery Template
 * All colors used across the app are defined here.
 * Usage: import { Colors } from '@theme/colors'
 */

export const Colors = {
    // Primary Brand Colors
    primary: '#FF6B35',      // Main orange - buttons, highlights
    primaryDark: '#E55A25',  // Darker orange - pressed states
    primaryLight: '#FF8C5A', // Lighter orange - backgrounds
  
    // Secondary Colors
    secondary: '#2D3748',    // Dark navy - headings
    secondaryLight: '#4A5568', // Medium grey - subtext
  
    // Background Colors
    background: '#FFFFFF',   // Main background
    backgroundGrey: '#F7F8FA', // Screen background
    backgroundDark: '#1A202C', // Dark mode background
  
    // Text Colors
    textPrimary: '#1A202C',  // Main text
    textSecondary: '#718096', // Subtitle text
    textLight: '#A0AEC0',    // Placeholder text
    textWhite: '#FFFFFF',    // White text
  
    // Status Colors
    success: '#48BB78',      // Green - order confirmed
    warning: '#ECC94B',      // Yellow - pending
    error: '#FC8181',        // Red - errors
    info: '#63B3ED',         // Blue - info
  
    // Rating
    star: '#F6C90E',         // Star rating color
  
    // Border & Divider
    border: '#E2E8F0',       // Light border
    divider: '#EDF2F7',      // Divider lines
  
    // Shadow
    shadow: '#000000',       // Shadow color
  
    // Overlay
    overlay: 'rgba(0,0,0,0.5)', // Modal overlay
  } as const;
  
  export type ColorType = keyof typeof Colors;