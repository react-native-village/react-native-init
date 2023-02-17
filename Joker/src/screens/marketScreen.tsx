import React from 'react';

import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {MarketItem} from 'src/components/marketItem';
import {SearchBar} from 'src/components/searchBar';
import {Background} from 'src/components/ui';

const DATA = [
  {
    id: '1',
    title: ' Cube Party ',
    description:
      'This is description. Bla. Bla, bla. Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla. Bla.',
    place: 'Bangkok, Thailand',
    time: '23:30',
    src: require('../../assets/images/1.jpg'),
  },
  {
    id: '2',
    title: ' Moon Party ',
    description:
      'This is description. Bla. Bla, bla. Bla, bla, bla, bla, bla. Bla.',
    place: 'Bom, Belgium',
    time: '22:30',
    src: require('../../assets/images/2.jpg'),
  },
  {
    id: '3',
    title: ' Space Party ',
    description:
      'This is description. Bla. Bla, bla. Bla, bla, bla, bla, bla. Bla.',
    place: 'London, United Kingdom',
    time: '21:30',
    src: require('../../assets/images/3.jpg'),
  },
  {
    id: '4',
    title: ' Future Party ',
    description:
      'This is description. Bla. Bla, bla. Bla, bla, bla, bla, bla. Bla.',
    place: 'Berlin, Germany',
    time: '22:00',
    src: require('../../assets/images/4.jpg'),
  },
  {
    id: '5',
    title: ' Techno Party ',
    description:
      'This is description. Bla. Bla, bla. Bla, bla, bla, bla, bla. Bla.',
    place: 'Paris, France',
    time: '22:30',
    src: require('../../assets/images/5.jpg'),
  },
];

export function MarketScreen() {
  return (
    <Background style={styles.container}>
      <SearchBar />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <MarketItem
            title={item.title}
            description={item.description}
            src={item.src}
            place={item.place}
            time={item.time}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  separator: {
    marginVertical: 10,
  },
});
