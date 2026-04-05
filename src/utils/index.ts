/**
 * @file utils/index.ts
 * @description Utility/helper functions used across the app
 */

/**
 * Format price to 2 decimal places with $ sign
 * @example formatPrice(12.5) => '$12.50'
 */
export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };
  
  /**
   * Format rating to 1 decimal place
   * @example formatRating(4.567) => '4.6'
   */
  export const formatRating = (rating: number): string => {
    return rating.toFixed(1);
  };
  
  /**
   * Truncate text to given length
   * @example truncateText('Hello World', 5) => 'Hello...'
   */
  export const truncateText = (text: string, length: number): string => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };
  
  /**
   * Calculate total price of cart items
   */
  export const calculateCartTotal = (
    subtotal: number,
    deliveryFee: number,
  ): number => {
    return subtotal + deliveryFee;
  };