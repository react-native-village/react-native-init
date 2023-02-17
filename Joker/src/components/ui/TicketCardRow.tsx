import React from 'react';

import {Image, StyleSheet, View} from 'react-native';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import {Text} from './text/text';
// import {TicketCardTags} from './TicketCardTags';

export function TicketCardRow({
  name,
  startData,
  endData,
  tags,
  imageUrl,
  geoPosition,
  price,
  currencySymbols,
}: Omit<TicketInfo, 'id'>) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUrl}} />
      </View>
      <View style={styles.infoContainer}>
        <Text t5 color={Color.textBase1}>
          {name}
        </Text>
        <View>
          {/* <TicketCardTags tags={tags} /> */}
          {price && currencySymbols && (
            <Text color={Color.primary}>{`${price} ${currencySymbols}`}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
const borderW = 0.6;
const rawStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    height: 185,
    flexDirection: 'row',
    marginVertical: 12.5,
    backgroundColor: Color.card,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderColor: Color.grayStroke,
    borderTopWidth: borderW,
    borderBottomWidth: borderW,
    borderRightWidth: borderW,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
  },
});
