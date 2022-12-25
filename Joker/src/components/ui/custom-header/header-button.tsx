import React from 'react';

import {ColorValue, Pressable, StyleSheet, View} from 'react-native';

import {Icon, IconButton, IconProps, Text} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {DEFAULT_HITSLOP} from 'src/variables';

export type HeaderButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  iconColor?: ColorValue;
  icon?: IconProps['name'];
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
  const {color} = useTheme().theme;
  if (icon) {
    return (
      <IconButton
        disabled={disabled}
        onPress={() => onPress?.()}
        hitSlop={DEFAULT_HITSLOP}>
        {icon && <Icon name={icon} color={iconColor ?? color.textBase1} />}
      </IconButton>
    );
  }

  if (text /*|| i18n*/) {
    return (
      <Pressable onPress={() => !disabled && onPress?.()}>
        <Text t10 color={disabled ? color.textBase2 : iconColor} center>
          {text}
        </Text>
      </Pressable>
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
