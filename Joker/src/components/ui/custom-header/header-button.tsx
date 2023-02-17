import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {IconButton, Text} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {DEFAULT_HITSLOP} from 'src/variables';

export type HeaderButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  iconColor?: Color;
  icon?: string;
  text?: string;
  /* i18n?: I18N; */
};

export function HeaderButton({
  onPress,
  disabled,
  iconColor,
  icon,
  text,
}: HeaderButtonProps) {
  const {colors} = useTheme();
  if (icon) {
    return (
      <IconButton
        disabled={disabled}
        onPress={() => onPress?.()}
        hitSlop={DEFAULT_HITSLOP}>
        {icon && (
          <Icon
            name={icon}
            size={22}
            color={iconColor ? colors[iconColor] : colors.textBase1}
          />
        )}
      </IconButton>
    );
  }

  if (text /*|| i18n*/) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text t10 color={disabled ? Color.textBase1 : iconColor} center>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  return <View style={styles.spacer} />;
}

const styles = StyleSheet.create({
  spacer: {
    width: 24,
    height: 24,
  },
});
