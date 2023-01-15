import React from 'react';

import {StyleSheet, View} from 'react-native';

export function CenteredView({children}: {children: React.ReactNode}) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
