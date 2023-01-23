import * as React from 'react';
import {useCallback, useMemo} from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {Text} from 'src/components/ui';
import {Icon, IconProps} from 'src/components/ui/icon';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

//will be changed to i18next
/* export type ButtonValue =
  | {title: string; i18n?: undefined}
  | {i18n: I18N; title?: undefined}; */

export type ButtonRightIconProps =
  | {iconRight: IconProps['name']; iconRightColor: IconProps['color']}
  | {iconRight?: undefined; iconRightColor?: undefined};

export type ButtonLeftIconProps =
  | {iconLeft: IconProps['name']; iconLeftColor: IconProps['color']}
  | {iconLeft?: undefined; iconLeftColor?: undefined};

export type ButtonProps = Omit<ViewProps, 'children'> & {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  loading?: boolean;
  textColor?: Color;
  buttonColor?: Color;
  circleBorders?: boolean;
  title?: string;
} & ButtonRightIconProps &
  ButtonLeftIconProps;

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
  iconRight,
  iconRightColor,
  iconLeft,
  iconLeftColor,
  textColor,
  buttonColor,
  loading = false,
  ...props
}: ButtonProps) {
  const {styles, colors} = useThematicStyles(rawStyles);
  const onPressButton = useCallback(() => {
    if (!(disabled || loading)) {
      onPress?.();
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
        buttonColor && {backgroundColor: colors[buttonColor]},
        style,
      ]),
    [size, disabled, style, variant, buttonColor, circleBorders],
  );

  const textStyle = useMemo(
    () =>
      StyleSheet.flatten<TextStyle>([
        iconLeft && styles.textIconLeft,
        iconRight && styles.textIconRight,
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
    [disabled, iconLeft, iconRight, variant],
  );

  return (
    <TouchableOpacity
      style={containerStyle as ViewStyle}
      onPress={onPressButton}
      activeOpacity={0.7}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.textBase3} />
      ) : (
        <>
          {iconLeft && (
            <Icon name={iconLeft} color={iconLeftColor} style={styles.icon} />
          )}
          <Text
            t19={size !== ButtonSize.small}
            t12={size === ButtonSize.small}
            style={textStyle}
            color={textColor}>
            {title}
          </Text>
          {iconRight && (
            <Icon name={iconRight} color={iconRightColor} style={styles.icon} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const rawStyles = StyleSheet.create({
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
    backgroundColor: Color.graphicGreen1,
    borderRadius: 12,
    height: 54,
  },
  containedDisabledContainer: {
    backgroundColor: Color.graphicSecond1,
  },
  outlinedContainer: {
    borderColor: Color.graphicGreen1,
    borderRadius: 12,
  },
  secondContainer: {
    backgroundColor: Color.bg2,
    borderRadius: 12,
  },
  secondDisabledContainer: {
    backgroundColor: Color.graphicSecond1,
  },
  errorContainer: {
    backgroundColor: Color.bg7,
  },
  textIconRight: {
    marginRight: 8,
  },
  textIconLeft: {
    marginLeft: 8,
  },
  containedText: {
    color: Color.textBase3,
  },
  containedDisabledText: {
    color: Color.textSecond1,
  },
  errorText: {
    color: Color.textRed1,
  },
  secondText: {
    color: Color.textGreen1,
  },
  secondDisabledText: {
    color: Color.textSecond1,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
