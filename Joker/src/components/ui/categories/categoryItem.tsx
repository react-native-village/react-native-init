import React from 'react';

import {StyleSheet, TouchableHighlight, View} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '..';

interface CategoryItemProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export function CategoryItem({title, isSelected, onPress}: CategoryItemProps) {
  const {styles, colors} = useThematicStyles(useStyles);
  const color = isSelected ? Color.textBase3 : Color.primary;
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

const useStyles = StyleSheet.create({
  itemButton: {
    borderRadius: 150,
    borderColor: Color.primary,
    borderWidth: 2,
  },
  text: {
    paddingHorizontal: 21,
    paddingVertical: 9,
  },
  touchable: {
    borderRadius: 100,
  },
});
