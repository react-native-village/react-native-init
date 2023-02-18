import React, {useState} from 'react';

import {FlatList, StyleSheet, TouchableHighlight, View} from 'react-native';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {HeaderList} from './headerList';

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
  isSelected: boolean;
  onPress: () => void;
}

export function Categories() {
  const [selectItem, setSelectItem] = useState('0');
  // eslint-disable-next-line react/no-unstable-nested-components
  return (
    <View style={styles.container}>
      <HeaderList title={'Categories'} button={'See all'} />
      <FlatList
        horizontal
        data={DATA}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
        renderItem={({item: {id, title}}) => (
          <CategoryItem
            onPress={() => setSelectItem(id)}
            isSelected={selectItem === `${id}`}
            title={title}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

function CategoryItem({title, isSelected, onPress}: CategoryItemProps) {
  const color = isSelected ? Color.textBase3 : Color.primary;
  const {colors} = useTheme();
  const background = isSelected ? colors.primary : colors.card;
  return (
    <TouchableHighlight
      underlayColor={'rgba(255, 104, 131, 0.4)'}
      activeOpacity={0.65}
      style={[
        styles.touchable,
        {
          backgroundColor: background,
        },
      ]}
      onPress={onPress}>
      <View style={styles.itemButton}>
        <Text t5 color={color} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginBottom: 20,
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
  scrollContent: {
    paddingHorizontal: 20,
  },
});
