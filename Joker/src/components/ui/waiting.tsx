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
  const {
    theme: {color},
  } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color={color.graphicGreen2} />
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
