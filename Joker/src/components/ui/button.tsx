import * as React from 'react';
import {useCallback, useMemo} from 'react';

import {
  ActivityIndicator,
  ColorValue,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {useTheme, useThemeObject} from 'src/hooks';
import {ColorTheme} from 'src/types';

import {Text} from './text';

//will be changed to i18next
/* export type ButtonValue =
  | {title: string; i18n?: undefined}
  | {i18n: I18N; title?: undefined}; */

export type ButtonProps = Omit<ViewProps, 'children'> & {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress: () => void;
  loading?: boolean;
  textColor?: ColorValue;
  buttonColor?: ColorValue;
  circleBorders?: boolean;
  title?: string;
};

export enum ButtonVariant {
  text = 'text',
  error = 'error',
  contained = 'contained',
  outlined = 'outlined',
  second = 'second',
}

export enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export function Button({
  title,
  variant = ButtonVariant.text,
  size = ButtonSize.large,
  style,
  circleBorders,
  disabled,
  onPress,
  textColor,
  buttonColor,
  loading = false,
  ...props
}: ButtonProps) {
  const {color} = useTheme().theme;
  const styles = useThemeObject(createStyles);
  const onPressButton = useCallback(() => {
    if (!(disabled || loading)) {
      onPress();
    }
  }, [disabled, loading, onPress]);

  const containerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.container,
        variant === ButtonVariant.error && styles.errorContainer,
        variant === ButtonVariant.second && styles.secondContainer,
        variant === ButtonVariant.contained && styles.containedContainer,
        variant === ButtonVariant.outlined && styles.outlinedContainer,
        size === ButtonSize.small && styles.smallContainer,
        size === ButtonSize.middle && styles.middleContainer,
        size === ButtonSize.large && styles.largeContainer,
        circleBorders && styles.circleBorders,
        disabled &&
          variant === ButtonVariant.second &&
          styles.secondDisabledContainer,
        disabled &&
          variant === ButtonVariant.contained &&
          styles.containedDisabledContainer,
        buttonColor && {backgroundColor: buttonColor},
        style,
      ]),
    [size, disabled, style, variant, buttonColor, circleBorders],
  );

  const textStyle = useMemo(
    () =>
      StyleSheet.flatten<TextStyle>([
        variant === ButtonVariant.error && styles.errorText,
        variant === ButtonVariant.second && styles.secondText,
        variant === ButtonVariant.contained && styles.containedText,
        disabled &&
          variant === ButtonVariant.second &&
          styles.secondDisabledText,
        disabled &&
          variant === ButtonVariant.contained &&
          styles.containedDisabledText,
      ]),
    [disabled, variant],
  );

  return (
    <TouchableOpacity
      style={containerStyle as ViewStyle}
      onPress={onPressButton}
      activeOpacity={0.7}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={color.textBase3} />
      ) : (
        <>
          <Text
            t9={size !== ButtonSize.small}
            t12={size === ButtonSize.small}
            style={textStyle}
            color={textColor}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 13, // originally 16 but for android 16 - 3
      paddingHorizontal: 28,
    },
    circleBorders: {
      borderRadius: 100,
    },
    smallContainer: {
      paddingVertical: 3, // originally 6 but for android 6 - 3
      paddingHorizontal: 12,
      height: 34,
    },
    middleContainer: {
      paddingVertical: 9, // originally 12 but for android 12 - 3
      paddingHorizontal: 20,
      borderRadius: 12,
      height: 46,
    },
    largeContainer: {
      paddingVertical: 16, // originally 6 but for android 6 - 3
      paddingHorizontal: 12,
    },
    containedContainer: {
      backgroundColor: color.graphicGreen1,
      borderRadius: 12,
      height: 54,
    },
    containedDisabledContainer: {
      backgroundColor: color.graphicSecond1,
    },
    outlinedContainer: {
      borderColor: color.graphicGreen1,
      borderRadius: 12,
    },
    secondContainer: {
      backgroundColor: color.bg2,
      borderRadius: 12,
    },
    secondDisabledContainer: {
      backgroundColor: color.graphicSecond1,
    },
    errorContainer: {
      backgroundColor: color.bg7,
    },
    containedText: {
      color: color.textBase3,
    },
    containedDisabledText: {
      color: color.textSecond1,
    },
    errorText: {
      color: color.textRed1,
    },
    secondText: {
      color: color.textGreen1,
    },
    secondDisabledText: {
      color: color.textSecond1,
    },
  });

  return styles;
};
