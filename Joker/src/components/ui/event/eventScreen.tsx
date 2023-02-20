import React from 'react';

import {Dimensions, Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {EventTags} from './eventTags';

import {DATA} from '../../HomeMarket';
import {Background} from '../Background';
import {Text} from '../text/text';

interface EventScreenProps {
  id?: string;
  pressBack?: () => void;
}

const widthScreen = Dimensions.get('screen').width;

export function EventScreen({id = '1', pressBack}: EventScreenProps) {
  const event = DATA.find(item => item.id === id);
  const price = 300;
  const currencySymbols = 'ETH';
  const {styles} = useThematicStyles(useStyles);
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
              style={styles.iconStyle}
            />
            <Text t11>One time usage</Text>
          </View>
          <Text t20 color={Color.primary}>{`${price} ${currencySymbols}`}</Text>
        </View>
      </View>
    </Background>
  );
}

const useStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: widthScreen,
    height: widthScreen,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  iconStyle: {
    color: Color.textSecond1,
    marginRight: 10,
    fontSize: 30,
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
  },
  rowTicket: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
