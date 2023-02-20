import React, {useState} from 'react';

import {format} from 'date-fns';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, Spacer, Text} from 'src/components/ui';
import {Background} from 'src/components/ui/Background';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import {TicketDetailBuy} from './TicketDetailBuy';
import {TicketDetailTags} from './TicketDetailTags';

interface TicketDetailProps extends TicketInfo {
  onBack?: () => void;
  priceInDollars?: number;
}

export function TicketDetail({
  onBack,
  priceInDollars,
  ...item
}: TicketDetailProps) {
  const [showBuy, setShowBuy] = useState(false);
  const insets = useSafeAreaInsets();
  const {styles, colors} = useThematicStyles(rawStyles);

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <TouchableOpacity
          style={styles.goBackContainer}
          onPress={onBack}
          activeOpacity={0.7}>
          <Ionicons size={22} color={colors.graphicBase3} name="arrow-back" />
        </TouchableOpacity>
        <View style={styles.details}>
          <TicketDetailTags tags={item.tags} />
          <Text t19 style={styles.name}>
            {item.name}
          </Text>
          <View style={styles.row}>
            <View style={styles.rowTicket}>
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                style={styles.iconStyle1}
              />
              <Text t11>One time usage</Text>
            </View>
            <View style={styles.price}>
              {item.price && item.currencySymbols && (
                <Text t20 color={Color.primary}>
                  {`${item.price} ${item.currencySymbols}`}
                </Text>
              )}
              {priceInDollars && (
                <Text t12 color={Color.graphicSecond4}>
                  {priceInDollars}$
                </Text>
              )}
            </View>
          </View>
          <View style={styles.rowInfo}>
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="calendar-check"
                style={styles.iconStyle2}
              />
            </View>
            <View style={styles.flexOne}>
              <Text t7 style={styles.dateText}>
                Start Date: {format(item.startData, 'MMM d, y')}
              </Text>
              <Text t9 style={styles.dateText}>
                {format(item.startData, 'EEEE, hh:mm a')}
              </Text>
              <Spacer height={10} />
              <Text t7 style={styles.dateText}>
                End Date: {format(item.endData, 'MMM d, y')}
              </Text>
              <Text t9 style={styles.dateText}>
                {format(item.endData, 'EEEE, hh:mm a')}
              </Text>
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
              <Text t9>{item.geoPosition}</Text>
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
              <Spacer height={8} />
              <Text t7 style={styles.dateText}>
                Ticket Approval
              </Text>
              <Text t9>0x0cd46a783f8cxv45x6z5cxhxv13782</Text>
            </View>
          </View>
          <Button onPress={() => setShowBuy(true)}>Buy Ticket</Button>
        </View>
        <Spacer height={insets.bottom} />
      </ScrollView>
      {showBuy && (
        <TicketDetailBuy
          priceInDollars={priceInDollars}
          onClose={() => setShowBuy(false)}
        />
      )}
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: Color.primary,
    borderRadius: 100,
    width: '100%',
    height: 55,
    marginHorizontal: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1 / 1,
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 25,
  },
  iconStyle1: {
    color: Color.textSecond1,
    marginRight: 10,
    fontSize: 24,
  },
  iconStyle2: {
    color: Color.primary,
    fontSize: 30,
  },
  dateText: {
    marginBottom: 2,
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
    backgroundColor: Color.primary1,
  },
  goBackContainer: {
    position: 'absolute',
    left: 25,
    top: 67,
  },
  flexOne: {
    flex: 1,
  },
});
