import React from 'react';

import {StyleSheet} from 'react-native';

import {SearchBar} from 'src/components/searchBar';
import {Background} from 'src/components/ui';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    description: '',
    src: '../../assets/images/1.jpg',
  },
];

export function MarketScreen() {
  return (
    <Background style={styles.container}>
      <SearchBar />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
