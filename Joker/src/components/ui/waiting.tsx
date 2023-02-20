import React from 'react';

import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {useTheme} from 'src/hooks';

type WaitingProps = {
  style?: StyleProp<ViewStyle>;
};

export function Waiting({style}: WaitingProps) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
