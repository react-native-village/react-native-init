import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Color} from 'src/themeTypes';

import {Text} from '.';

interface HeaderListProps {
  title: string;
  button: string;
}

export function HeaderList({title, button}: HeaderListProps) {
  return (
    <View style={styles.rowContainer}>
      <Text t5>{title}</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Text t5 color={Color.primary}>
          {button}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
});
