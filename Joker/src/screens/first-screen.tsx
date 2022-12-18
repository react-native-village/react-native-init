import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {showModal} from 'src/helpers';
import {useTypedNavigation} from 'src/hooks';
import {LIGHT_BG_1} from 'src/variables';

export function FirstScreen() {
  const navigation = useTypedNavigation();

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
        onPress={() => {
          navigation.navigate('home', {screen: 'tab1'});
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_BG_1,
  },
});
