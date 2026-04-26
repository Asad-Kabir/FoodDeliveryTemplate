/**
 * @file useProfile.ts
 * @description Profile screen state & actions
 */

import { useState } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

const useProfile = () => {
  const [user] = useState<UserProfile>({
    name: 'Asad Kabir',
    email: 'asad@example.com',
    phone: '+92 300 1234567',
    avatar: '👨‍💻',
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = (onLogout: () => void) => {
    onLogout();
  };

  return {
    user,
    notificationsEnabled,
    setNotificationsEnabled,
    darkModeEnabled,
    setDarkModeEnabled,
    handleLogout,
  };
};

export default useProfile;