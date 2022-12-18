import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useTypedNavigation} from '../hooks';

export function TabScreen1() {
  const naviagtion = useTypedNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="go to first screen for modal"
        onPress={() => {
          naviagtion.navigate('firstScreen');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
