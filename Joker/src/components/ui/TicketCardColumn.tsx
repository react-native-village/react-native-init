import React from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import {TicketCardTags} from './TicketCardTags';

import {Spacer, Text} from './';

export function TicketCardColumn({
  onPress,
  ...itemProps
}: TicketInfo & {onPress?: (item: TicketInfo) => void}) {
  const {styles} = useThematicStyles(rawStyles);
  const {
    name,
    startData,
    endData,
    tags,
    imageUrl,
    geoPosition,
    price,
    currencySymbols,
  } = itemProps;

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onPress?.(itemProps)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
        </View>
        <View style={styles.infoContainer}>
          <Text t6>{name}</Text>
          <Spacer height={8} />
          <View style={styles.costAndTagContainer}>
            <TicketCardTags tags={tags} />
            <Spacer width={10} />
            <View style={styles.flexOne}>
              {price && currencySymbols && (
                <Text
                  numberOfLines={1}
                  t5
                  color={Color.primary}>{`${price} ${currencySymbols}`}</Text>
              )}
            </View>
          </View>
          <Spacer height={8} />
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
          <Spacer height={6} />
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
    </TouchableOpacity>
  );
}

const borderW = 0.6;
const rawStyles = StyleSheet.create({
  container: {
    width: 220,
    height: 380,
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    backgroundColor: Color.card,
  },
  imageContainer: {
    width: 220,
    height: 220,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 4,
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
  flexOne: {
    flex: 1,
  },
});
