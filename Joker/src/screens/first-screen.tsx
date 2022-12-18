import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Modals} from './modals';
import {showModal} from '../helpers';
import { useTypedNavigation } from 'src/hooks';

export function FirstScreen() {
  const navigation = useTypedNavigation()

  return (
    <View style={styles.container}>
      <Button
        title="Show modal"
        onPress={() => {
          showModal('test');
        }}
      />
      <Button
        title="go to tab"
        onPress={() => {navigation.navigate('tab3')
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
