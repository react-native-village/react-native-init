import * as React from 'react';
import {useCallback, useMemo} from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import {Color} from 'src/colors';
import {Icon, IconProps} from 'src/components/ui/icon/icon';
import {Text} from 'src/components/ui/text/text';
import {I18N} from 'src/i18n';

export type ButtonValue =
  | {title: string; i18n?: undefined}
  | {i18n: I18N; title?: undefined};

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
  onPress: () => void;
  loading?: boolean;
  textColor?: string;
} & ButtonValue &
  ButtonRightIconProps &
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
  i18n,
  variant = ButtonVariant.text,
  size = ButtonSize.large,
  style,
  disabled,
  onPress,
  iconRight,
  iconRightColor,
  iconLeft,
  iconLeftColor,
  textColor,
  loading = false,
  ...props
}: ButtonProps) {
  const onPressButton = useCallback(() => {
    if (!(disabled || loading)) {
      onPress();
    }
  }, [disabled, loading, onPress]);

  const containerStyle = useMemo(
    () => [
      page.container,
      page[`${variant}Container`] ?? null,
      page[`${size}Container`] ?? null,
      disabled && `${variant}DisabledContainer` in page
        ? page[`${variant}DisabledContainer`]
        : null,
      style,
    ],
    [size, disabled, style, variant],
  );

  const textStyle = useMemo(
    () => [
      iconLeft && page.textIconLeft,
      iconRight && page.textIconRight,
      page[`${variant}Text`] ?? null,
      disabled && `${variant}DisabledText` in page
        ? page[`${variant}DisabledText`]
        : null,
    ],
    [disabled, iconLeft, iconRight, variant],
  );

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPressButton}
      activeOpacity={0.7}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={Color.textBase3} />
      ) : (
        <>
          {iconLeft && (
            <Icon name={iconLeft} color={iconLeftColor} style={page.icon} />
          )}
          <Text
            t9={size !== ButtonSize.small}
            t12={size === ButtonSize.small}
            style={textStyle}
            color={textColor}
            i18n={i18n}>
            {title}
          </Text>
          {iconRight && (
            <Icon name={iconRight} color={iconRightColor} style={page.icon} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const page = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13, // originally 16 but for android 16 - 3
    paddingHorizontal: 28,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  smallContainer: {
    paddingVertical: 3, // originally 6 but for android 6 - 3
    paddingHorizontal: 12,
    height: 34,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  middleContainer: {
    paddingVertical: 9, // originally 12 but for android 12 - 3
    paddingHorizontal: 20,
    height: 46,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  containedContainer: {
    backgroundColor: Color.graphicGreen1,
    borderRadius: 12,
    height: 54,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  containedDisabledContainer: {
    backgroundColor: Color.graphicSecond1,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  outlinedContainer: {
    borderColor: Color.graphicGreen1,
    borderRadius: 12,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  secondContainer: {
    backgroundColor: Color.bg2,
    borderRadius: 12,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  secondDisabledContainer: {
    backgroundColor: Color.graphicSecond1,
  },
  textIconRight: {
    marginRight: 8,
  },
  textIconLeft: {
    marginLeft: 8,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  containedText: {
    color: Color.textBase3,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  containedDisabledText: {
    color: Color.textSecond1,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  errorText: {
    color: Color.textRed1,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  secondText: {
    color: Color.textGreen1,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  secondDisabledText: {
    color: Color.textSecond1,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
