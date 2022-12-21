import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {Color} from 'src/colors';
import {Text} from 'src/components/ui';
import {useTypedNavigation} from 'src/hooks';
import {app} from 'src/services';
import {LIGHT_BG_1} from 'src/variables';

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
      <Button
        title="Sign in"
        onPress={() => {
          app.githubAuth.authenticate();
        }}
      />
      <Button
        title="Sign out"
        onPress={() => {
          app.githubAuth.logout();
        }}
      />
      <View style={styles.test}>
        <Text color={Color.graphicGreen1}>Test theme hook</Text>
      </View>
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
  test: {
    width: 200,
    height: 200,
    backgroundColor: Color.graphicBase1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
