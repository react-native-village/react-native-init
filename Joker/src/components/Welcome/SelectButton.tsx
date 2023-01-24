import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {s, vs} from 'react-native-size-matters';

import {Checkmark, Text} from 'src/components/ui';

interface SelectButtonProps {
  title: string;
  selected?: boolean;
  onPress: () => void;
}

export function SelectButton({title, selected, onPress}: SelectButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Checkmark style={styles.checkmarkContainer} isFilled={selected} />
      <Text shadow ibm1>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: vs(10),
  },
  checkmarkContainer: {
    marginRight: s(10),
  },
});
