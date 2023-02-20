import React, {useState} from 'react';

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {EventBuy} from './EventBuy';
import {EventTags} from './EventTags';

import {DATA} from '../HomeMarket';
import {Background} from '../ui/Background';
import {Text} from '../ui/text/text';

const widthScreen = Dimensions.get('screen').width;
interface EventScreenProps {
  id?: string;
  pressBack?: () => void;
}

export function Event({id = '1'}: EventScreenProps) {
  const [showBuy, setShowBuy] = useState(false);
  const insets = useSafeAreaInsets();
  const event = DATA.find(item => item.id === id);
  const price = 300;
  const currencySymbols = 'ETH';
  const {styles} = useThematicStyles(rawStyles);
  return (
    <Background
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ScrollView style={styles.container}>
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
          <View style={styles.rowInfo}>
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                style={styles.iconStyle2}
              />
            </View>
            <View>
              <Text t7 style={styles.dateText}>
                Location
              </Text>
              <Text t9>{event?.geoPosition}</Text>
            </View>
          </View>
          <View style={styles.rowInfo}>
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="account"
                style={styles.iconStyle2}
              />
            </View>
            <View>
              <Text t7 style={styles.dateText}>
                Ticket Provider
              </Text>
              <Text t9>0x0da46c783f8cxv85x6z5cxhxv12382</Text>
              <Text t7 style={styles.dateText}>
                Ticket Approval
              </Text>
              <Text t9>0x0cd46a783f8cxv45x6z5cxhxv13782</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowBuy(true)}
            activeOpacity={0.6}>
            <Text t4 color={Color.textBase3}>
              Buy Ticket
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showBuy && <EventBuy onClose={() => setShowBuy(false)} />}
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: Color.primary2,
    borderRadius: 100,
    width: '100%',
    height: 55,
    marginHorizontal: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 30,
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
