import React, {useState} from 'react';

import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {Color} from 'src/themeTypes';

import {Text} from '.';

const DATA = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Music',
  },
  {
    id: '2',
    title: 'Festival',
  },
  {
    id: '3',
    title: 'Bootcamp',
  },
  {
    id: '4',
    title: 'Fair',
  },
  {
    id: '5',
    title: 'Geek',
  },
];

function Separator() {
  return <View style={styles.separator} />;
}

interface CategoryItemProps {
  title: string;
  id: string;
}

export function Categories() {
  const [selectItem, setSelectItem] = useState('0');
  // eslint-disable-next-line react/no-unstable-nested-components
  function CategoryItem({title, id}: CategoryItemProps) {
    const isSelect = selectItem == id;
    const color = isSelect ? Color.textBase3 : Color.primary;
    const background = isSelect ? '#FF6883' : '#FFFFFF';
    const marginLeft = id == 0 ? 24 : 0;
    const marginRight = id == DATA.length - 1 ? 24 : 0;
    return (
      <TouchableHighlight
        underlayColor={'rgba(255, 104, 131, 0.3)'}
        activeOpacity={0.3}
        style={[
          styles.touchable,
          {
            backgroundColor: background,
            marginLeft: marginLeft,
            marginRight: marginRight,
          },
        ]}
        onPress={() => setSelectItem(id)}>
        <View style={styles.itemButton}>
          <Text t5 color={color} style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text t5>Categories</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text t5 color={Color.primary}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => (
          <CategoryItem title={item.title} id={item.id} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
      />
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
    marginVertical: 20,
  },
  // eslint-disable-next-line react-native/no-color-literals
  itemButton: {
    borderRadius: 150,
    borderColor: '#FF6883',
    borderWidth: 2,
  },
  separator: {
    marginHorizontal: 7.5,
  },
  text: {
    paddingHorizontal: 21,
    paddingVertical: 9,
  },
  touchable: {
    borderRadius: 100,
  },
});
