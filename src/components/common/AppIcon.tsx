// /**
//  * @file AppIcon.tsx
//  * @description Reusable SVG icon component
//  * Works perfectly on both iOS and Android
//  * Usage: <AppIcon name="arrow-forward" size={20} color={Colors.white} />
//  */

// import React from 'react';
// import Svg, { Path, Circle, Line, Polyline } from 'react-native-svg';
// import { Colors } from '@theme/colors';

// // ─── Types ────────────────────────────────────────────────
// type IconName =
//   | 'arrow-forward'
//   | 'chevron-forward'
//   | 'rocket'
//   | 'close'
//   | 'check'
//   | 'star'
//   | 'search'
//   | 'home'
//   | 'cart'
//   | 'person'
//   | 'location'
//   | 'time'
//   | 'heart'
//   | 'plus'
//   | 'minus'
//   | 'back'
//   | 'eye'        // Add karo
//   | 'eye-off'
//   | 'close-circle'
//   | 'options-outline'
//   | 'cart-outline'

// interface AppIconProps {
//   name?: IconName;
//   size?: number;
//   color?: string;
// }

// // ─── Icon Paths ───────────────────────────────────────────
// const AppIcon = ({ name, size = 24, color = Colors.textPrimary }: AppIconProps) => {
//   const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' };
//   const stroke = { stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

//   switch (name) {
//     case 'arrow-forward':
//       return (
//         <Svg {...props}>
//           <Path d="M5 12h14M12 5l7 7-7 7" {...stroke} />
//         </Svg>
//       );

//     case 'chevron-forward':
//       return (
//         <Svg {...props}>
//           <Path d="M9 18l6-6-6-6" {...stroke} />
//         </Svg>
//       );

//     case 'rocket':
//       return (
//         <Svg {...props}>
//           <Path d="M12 2C12 2 7 6 7 12c0 2.5 1 4.5 2.5 6L12 22l2.5-4C16 16.5 17 14.5 17 12c0-6-5-10-5-10z" {...stroke} />
//           <Circle cx="12" cy="12" r="2" {...stroke} />
//         </Svg>
//       );

//     case 'close':
//       return (
//         <Svg {...props}>
//           <Path d="M18 6L6 18M6 6l12 12" {...stroke} />
//         </Svg>
//       );

//     case 'check':
//       return (
//         <Svg {...props}>
//           <Path d="M20 6L9 17l-5-5" {...stroke} />
//         </Svg>
//       );

//     case 'star':
//       return (
//         <Svg {...props}>
//           <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={color} {...stroke} />
//         </Svg>
//       );

//     case 'search':
//       return (
//         <Svg {...props}>
//           <Circle cx="11" cy="11" r="8" {...stroke} />
//           <Path d="M21 21l-4.35-4.35" {...stroke} />
//         </Svg>
//       );

//     case 'home':
//       return (
//         <Svg {...props}>
//           <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" {...stroke} />
//           <Path d="M9 22V12h6v10" {...stroke} />
//         </Svg>
//       );

//     case 'cart':
//       return (
//         <Svg {...props}>
//           <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" {...stroke} />
//           <Path d="M16 10a4 4 0 01-8 0" {...stroke} />
//         </Svg>
//       );

//     case 'person':
//       return (
//         <Svg {...props}>
//           <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" {...stroke} />
//           <Circle cx="12" cy="7" r="4" {...stroke} />
//         </Svg>
//       );

//     case 'location':
//       return (
//         <Svg {...props}>
//           <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" {...stroke} />
//           <Circle cx="12" cy="10" r="3" {...stroke} />
//         </Svg>
//       );

//     case 'time':
//       return (
//         <Svg {...props}>
//           <Circle cx="12" cy="12" r="10" {...stroke} />
//           <Path d="M12 6v6l4 2" {...stroke} />
//         </Svg>
//       );

//     case 'heart':
//       return (
//         <Svg {...props}>
//           <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" {...stroke} />
//         </Svg>
//       );

//     case 'plus':
//       return (
//         <Svg {...props}>
//           <Path d="M12 5v14M5 12h14" {...stroke} />
//         </Svg>
//       );

//     case 'minus':
//       return (
//         <Svg {...props}>
//           <Path d="M5 12h14" {...stroke} />
//         </Svg>
//       );

//     case 'back':
//       return (
//         <Svg {...props}>
//           <Path d="M19 12H5M12 19l-7-7 7-7" {...stroke} />
//         </Svg>
//       );

//       case 'eye':
//         return (
//           <Svg {...props}>
//             <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" {...stroke} />
//             <Circle cx="12" cy="12" r="3" {...stroke} />
//           </Svg>
//         );
      
//       case 'eye-off':
//         return (
//           <Svg {...props}>
//             <Path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" {...stroke} />
//             <Line x1="1" y1="1" x2="23" y2="23" {...stroke} />
//           </Svg>
//         );

//     default:
//       return null;
//   }
// };

// export default AppIcon;


/**
 * @file AppIcon.tsx
 * @description Reusable Icon component using react-native-vector-icons
 * Supports Ionicons and MaterialIcons
 * Usage: <AppIcon name="home-outline" size={24} color={Colors.primary} />
 * Icons reference: https://ionic.io/ionicons
 */

import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '@theme/colors';

// ─── Types ────────────────────────────────────────────────
type IconSet = 'ionicons' | 'material' | 'checkmark' | 'bicycle' | 'happy' | 'call' | 'chatbubble-outline' | 'restaurant-outline';


interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
  iconSet?: IconSet;
}

// ─── Component ────────────────────────────────────────────
/**
 * Wrapper around react-native-vector-icons
 * Default: Ionicons
 * For material icons pass iconSet="material"
 */
const AppIcon = ({
  name,
  size = 24,
  color = Colors.textPrimary,
  iconSet = 'ionicons',
}: AppIconProps) => {
  if (iconSet === 'material') {
    return <MaterialIcon name={name} size={size} color={color} />;
  }

  return <IonIcon name={name} size={size} color={color} />;
};

export default AppIcon;