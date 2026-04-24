/**
 * @file useOrderTracking.ts
 * @description Order tracking state & simulation logic
 */

import { useState, useEffect } from 'react';
import { OrderStep, TrackingStep } from '@typings/index';

const TRACKING_STEPS: TrackingStep[] = [
  {
    id: 'confirmed',
    title: 'Order Confirmed',
    description: 'Restaurant has received your order',
    icon: 'checkmark-circle',
    time: 'Just now',
  },
  {
    id: 'preparing',
    title: 'Preparing',
    description: 'Chef is preparing your food',
    icon: 'restaurant',
    time: '5 mins',
  },
  {
    id: 'on_the_way',
    title: 'On the Way',
    description: 'Your rider is heading to you',
    icon: 'bicycle',
    time: '15 mins',
  },
  {
    id: 'delivered',
    title: 'Delivered',
    description: 'Enjoy your meal!',
    icon: 'happy',
    time: '30 mins',
  },
];

const STEP_ORDER: OrderStep[] = [
  'confirmed',
  'preparing',
  'on_the_way',
  'delivered',
];

const useOrderTracking = (orderId: string) => {
  const [currentStep, setCurrentStep] = useState<OrderStep>('confirmed');
  const [isDelivered, setIsDelivered] = useState(false);

  // Simulate order progress
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(
      setTimeout(() => setCurrentStep('preparing'), 3000),
    );
    timers.push(
      setTimeout(() => setCurrentStep('on_the_way'), 6000),
    );
    timers.push(
      setTimeout(() => {
        setCurrentStep('delivered');
        setIsDelivered(true);
      }, 9000),
    );

    return () => timers.forEach(clearTimeout);
  }, [orderId]);

  const currentStepIndex = STEP_ORDER.indexOf(currentStep);

  const getStepStatus = (stepId: OrderStep) => {
    const stepIndex = STEP_ORDER.indexOf(stepId);
    if (stepIndex < currentStepIndex) return 'completed';
    if (stepIndex === currentStepIndex) return 'active';
    return 'pending';
  };

  return {
    steps: TRACKING_STEPS,
    currentStep,
    currentStepIndex,
    isDelivered,
    getStepStatus,
    orderId,
  };
};

export default useOrderTracking;