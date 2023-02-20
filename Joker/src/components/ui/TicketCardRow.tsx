import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import {Spacer} from './spacer';
import {Text} from './text/text';
import {TicketCardTags} from './TicketCardTags';

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
        <Text numberOfLines={1} t3 color={Color.textBase1}>
          {name}
        </Text>
        <Spacer height={8} />
        <View style={styles.costAndTagContainer}>
          <TicketCardTags tags={tags} />
          {price && currencySymbols && (
            <Text
              t5
              color={Color.primary}>{`${price} ${currencySymbols}`}</Text>
          )}
        </View>
        <Spacer height={12} />
        <View style={styles.iconWithTextContainer}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            style={styles.iconStyle}
          />
          <View style={styles.textContainer}>
            <Text numberOfLines={2} t11>
              {geoPosition}
            </Text>
          </View>
        </View>
        <Spacer height={8} />
        <View style={styles.iconWithTextContainer}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            style={styles.iconStyle}
          />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} t11>
              Start: {startData}
            </Text>
            <Text numberOfLines={1} t11>
              End: {endData}
            </Text>
          </View>
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
    flex: 2.6,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: Color.grayStroke,
    borderTopWidth: borderW,
    borderBottomWidth: borderW,
    borderRightWidth: borderW,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
  },
  costAndTagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    color: Color.textSecond1,
    marginRight: 8,
    fontSize: 30,
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1,
  },
});
