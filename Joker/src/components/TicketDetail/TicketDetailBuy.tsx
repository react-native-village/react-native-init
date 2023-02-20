import React, {useState} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BottomSheet} from 'src/components/bottom-sheet';
import {Button, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

interface TicketDetailBuyProps {
  onClose: () => void;
  currencySymbols?: TicketInfo['currencySymbols'];
  price?: TicketInfo['price'];
  priceInDollars?: number;
}

export function TicketDetailBuy({
  onClose,
  currencySymbols,
  price,
  priceInDollars,
}: TicketDetailBuyProps) {
  const [count, setCount] = useState(1);
  const {styles} = useThematicStyles(rawStyles);
  const {height: H} = useWindowDimensions();

  const closeDistance = H / 5;

  const pressMinus = () => {
    if (count === 1) return;
    else setCount(count - 1);
  };
  const pressPlus = () => {
    if (count === 99) return;
    else setCount(count + 1);
  };
  return (
    <BottomSheet onClose={onClose} closeDistance={closeDistance}>
      <View style={styles.rowAmount}>
        <Text t7>Amount</Text>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressMinus}>
            <MaterialCommunityIcons name={'minus'} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text t4>{count}</Text>
          <TouchableOpacity
            style={styles.cube}
            activeOpacity={0.7}
            onPress={pressPlus}>
            <MaterialCommunityIcons name={'plus'} style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowTotal}>
        <Text t7>Total</Text>

        <View style={styles.price}>
          {price && currencySymbols && (
            <Text t3 color={Color.primary1}>
              {`${price} ${currencySymbols}`}
            </Text>
          )}
          {priceInDollars && (
            <Text t12 color={Color.graphicSecond4}>
              {priceInDollars}$
            </Text>
          )}
        </View>
      </View>
      <Button onPress={onClose}>Continue</Button>
    </BottomSheet>
  );
}

const rawStyles = StyleSheet.create({
  rowAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  price: {
    alignItems: 'flex-end',
  },
  count: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  cube: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: Color.primary1,
  },
  iconStyle: {
    fontSize: 30,
    color: Color.primary,
  },
});
