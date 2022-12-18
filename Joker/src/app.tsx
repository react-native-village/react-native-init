import React from 'react';

import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import {Modals} from 'src/screens/modals';
import {app} from 'src/services';

export function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
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
        <Modals />
      </View>
    </SafeAreaView>
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
  },
});
