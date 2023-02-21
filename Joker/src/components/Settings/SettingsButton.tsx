import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Text} from '../ui';

interface SettingsButtonProps {
  onPress: () => void;
  title?: string;
  icon: string;
}

export function SettingsButton({onPress, title, icon}: SettingsButtonProps) {
  const {styles} = useThematicStyles(rawStyles);

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.containerTextChevron}>
        <View style={styles.circleIconContainer}>
          <Icon name={icon} style={styles.iconStyle} />
        </View>
        <Text t8 style={styles.textStyle}>
          {title}
        </Text>
      </View>
      <Icon name="chevron-forward" style={styles.chevronStyle} />
    </TouchableOpacity>
  );
}

const rawStyles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    color: Color.primary,
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
  circleIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 999,
    backgroundColor: Color.primary1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
