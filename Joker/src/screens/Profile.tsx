import React, {useCallback} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

import {Profile} from 'src/components/Profile';
export function ProfileScreen() {
  const {goBack} = useNavigation();
  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  return <Profile onPressBack={goBack} />;
}
