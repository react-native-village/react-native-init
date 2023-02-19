import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Background, CustomHeader, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

interface SettingsScreenT {
  onPressEdit: () => void;
  onPressWallet: () => void;
  onPressDisconnect: () => void;
  onPressBack: () => void;
}
export function Settings({
  onPressEdit,
  onPressWallet,
  onPressDisconnect,
  onPressBack,
}: SettingsScreenT) {
  const {styles} = useThematicStyles(rawStyles);
  return (
    <Background>
      <CustomHeader
        iconLeft="arrow-back"
        title={'Settings'}
        colorLeft={Color.primary}
        onPressLeft={onPressBack}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPressOut={onPressEdit}>
        <View style={styles.containerTextChevron}>
          <View style={styles.iconContainer}>
            <Icon name={'person'} style={styles.iconStyle} />
          </View>
          <Text t8 style={styles.textStyle}>
            Edit Username
          </Text>
        </View>
        <Icon name={'chevron-forward'} style={styles.chevronStyle} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPressOut={onPressWallet}>
        <View style={styles.containerTextChevron}>
          <View style={styles.iconContainer}>
            <Icon name={'wallet'} style={styles.iconStyle} />
          </View>
          <Text t8 style={styles.textStyle}>
            My Wallet
          </Text>
        </View>
        <Icon name={'chevron-forward'} style={styles.chevronStyle} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.7}
        onPressOut={onPressDisconnect}>
        <View style={styles.containerTextChevron}>
          <View style={styles.exitContainer}>
            <Icon name={'exit'} style={styles.iconStyle} />
          </View>
          <Text t8 style={styles.textStyle}>
            Disconnect
          </Text>
        </View>
      </TouchableOpacity>
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    color: Color.primary,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 999,
    backgroundColor: Color.bg3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Color.bg3,
  },
  textStyle: {
    marginLeft: 15,
  },
  chevronStyle: {
    fontSize: 25,
    color: Color.primary,
  },
  containerTextChevron: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exitContainer: {
    height: 50,
    width: 50,
    borderRadius: 999,
    backgroundColor: Color.opacityPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
