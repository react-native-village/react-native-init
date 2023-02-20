import React, {useState} from 'react';

import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BottomSheet} from 'src/components/bottom-sheet';
import {Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

const h = Dimensions.get('window').height;
const closeDistance = h / 5;

interface EventBuyProps {
  onClose: () => void;
}

export function EventBuy({onClose}: EventBuyProps) {
  const [count, setCount] = useState(1);
  const {styles} = useThematicStyles(rawStyles);

  const price = 300;
  const currencySymbols = 'ETH';

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
          <Text t3 color={Color.primary1}>
            {`${price} ${currencySymbols}`}
          </Text>
          <Text t12 color={Color.graphicSecond4}>
            (19,564213$)
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onClose}
        activeOpacity={0.6}>
        <Text t4 color={Color.textBase3}>
          Continue
        </Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: Color.primary2,
    borderRadius: 100,
    width: '100%',
    height: 55,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: Color.primary3,
  },
  iconStyle: {
    fontSize: 30,
    color: Color.primary2,
  },
});
