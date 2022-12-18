import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {DARK_TEXT_YELLOW_1, LIGHT_TEXT_BASE_3} from 'src/variables';

export interface TestModalProps {
  onClose: () => void;
}

export function TestModal({onClose}: TestModalProps) {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.text}>Hello, this is test modal for Joker!</Text>
      <Button onPress={onClose} title="Close modal" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: DARK_TEXT_YELLOW_1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: LIGHT_TEXT_BASE_3,
    textAlign: 'center',
  },
});
