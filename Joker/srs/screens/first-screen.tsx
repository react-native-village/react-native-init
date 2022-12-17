import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Modals} from './modals';
import {showModal} from '../helpers';

export function FirstScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Show modal"
        onPress={() => {
          showModal('test');
        }}
      />
      <Modals />
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
