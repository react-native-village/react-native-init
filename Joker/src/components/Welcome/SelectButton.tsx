import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../ui';

interface SelectButtonProps {
  title: string;
  onPress: () => void;
}

export function SelectButton({title, onPress}: SelectButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text shadow ibm1>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
