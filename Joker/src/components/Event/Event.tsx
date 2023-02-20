import React from 'react';

import {Dimensions, Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {EventTags} from './eventTags';

import {DATA} from '../HomeMarket';
import {Background} from '../ui/Background';
import {Text} from '../ui/text/text';

interface EventScreenProps {
  id?: string;
  pressBack?: () => void;
}

const widthScreen = Dimensions.get('screen').width;

export function Event({id = '1'}: EventScreenProps) {
  const event = DATA.find(item => item.id === id);
  const price = 300;
  const currencySymbols = 'ETH';
  const {styles} = useThematicStyles(rawStyles);
  return (
    <Background style={styles.container}>
      <Image source={{uri: event?.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <EventTags tags={event!.tags} />
        <Text t19 style={styles.name}>
          {event?.name}
        </Text>
        <View style={styles.row}>
          <View style={styles.rowTicket}>
            <MaterialCommunityIcons
              name={'ticket-confirmation-outline'}
              style={styles.iconStyle1}
            />
            <Text t11>One time usage</Text>
          </View>
          <View style={styles.price}>
            <Text t20 color={Color.primary1}>
              {`${price} ${currencySymbols}`}
            </Text>
            <Text t12 color={Color.graphicSecond4}>
              (19,564213$)
            </Text>
          </View>
        </View>
        <View style={styles.rowInfo}>
          <View style={styles.circle}>
            <MaterialCommunityIcons
              name="calendar-check"
              style={styles.iconStyle2}
            />
          </View>
          <View>
            <Text t7 style={styles.dateText}>
              Start Date: {event?.startData}
            </Text>
            <Text t9>Saturday, 4:00 PM</Text>
            <Text t7 style={styles.dateText}>
              End Date: {event?.endData}
            </Text>
            <Text t9>Saturday, 10:00 PM</Text>
          </View>
        </View>
      </View>
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: widthScreen,
    height: widthScreen,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  iconStyle1: {
    color: Color.textSecond1,
    marginRight: 10,
    fontSize: 24,
  },
  iconStyle2: {
    color: Color.primary2,
    fontSize: 30,
  },
  dateText: {
    marginBottom: 5,
  },
  details: {
    paddingHorizontal: 24,
  },
  name: {
    marginVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  rowTicket: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    alignItems: 'center',
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  circle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 100,
    backgroundColor: Color.primary3,
  },
});
