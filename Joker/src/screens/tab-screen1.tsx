import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useTypedNavigation} from '../hooks';
import {app} from '../services';
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
