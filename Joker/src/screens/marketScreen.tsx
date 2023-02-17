import React from 'react';

import {StyleSheet} from 'react-native';

import {SearchBar} from 'src/components/searchBar';
import {Background} from 'src/components/ui';

const DATA = [
  {
    id: '1',
    title: 'AlcoParty',
    description: '',
    src: '../../assets/images/1.jpg',
  },
  {
    id: '2',
    title: 'SuperParty',
    description: '',
    src: '../../assets/images/2.jpg',
  },
  {
    id: '3',
    title: 'MegaParty',
    description: '',
    src: '../../assets/images/3.jpg',
  },
  {
    id: '4',
    title: 'SuperPuperParty',
    description: '',
    src: '../../assets/images/4.jpg',
  },
  {
    id: '5',
    title: 'TechnoParty',
    description: '',
    src: '../../assets/images/5.jpg',
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
