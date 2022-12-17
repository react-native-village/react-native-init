import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import {showModal} from './srs/helpers';
import {Modals} from './srs/screens/modals';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Button
          title="Show modal"
          onPress={() => {
            showModal('test');
          }}
        />
        <Modals />
      </View>
    </SafeAreaView>
  );
};

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

export default App;
