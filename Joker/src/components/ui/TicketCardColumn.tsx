import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import {TicketCardTags} from './TicketCardTags';

import {Spacer, Text} from './';

// imageUrl=
// name=
// geoPosition=

export function TicketCardColumn({
  name,
  startData,
  endData,
  tags,
  imageUrl,
  geoPosition,
  price = 300,
  currencySymbols = 'ETH',
}: Omit<TicketInfo, 'id'>) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}>
        <Image style={styles.image} source={{uri: imageUrl}} />
      </View>
      <View style={styles.infoContainer}>
        <Text t6>{name}</Text>
        <Spacer height={10} />
        <View style={styles.costAndTagContainer}>
          <TicketCardTags tags={tags} />
          {price && currencySymbols && (
            <Text
              t5
              color={Color.primary}>{`${price} ${currencySymbols}`}</Text>
          )}
        </View>
        <Spacer height={10} />
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
    width: 220,
    height: 328,
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    backgroundColor: Color.card,
  },
  imageStyle: {
    flex: 5,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    flex: 5.5,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderColor: Color.grayStroke,
    borderLeftWidth: borderW,
    borderBottomWidth: borderW,
    borderRightWidth: borderW,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  costAndTagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    color: Color.textSecond1,
    marginRight: 8,
    fontSize: 30,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1,
  },
});
