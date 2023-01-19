import * as React from 'react';

import {
  ColorValue,
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {useTheme} from 'src/hooks';

//will be changed to i18next
/*export type TextValue =
  | {children: React.ReactNode; i18n?: undefined; i18params?: undefined}
  | {i18n: I18N; i18params?: Record<string, string>; children?: undefined};
*/

export type TextProps = Omit<RNTextProps, 'style' | 'children'> & {
  t1?: boolean;
  t2?: boolean;
  t3?: boolean;
  t4?: boolean;
  t5?: boolean;
  t6?: boolean;
  t7?: boolean;
  t8?: boolean;
  t9?: boolean;
  t10?: boolean;
  t11?: boolean;
  t12?: boolean;
  t13?: boolean;
  t14?: boolean;
  t15?: boolean;
  t16?: boolean;
  t17?: boolean;
  t18?: boolean;
  center?: boolean;
  right?: boolean;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export function Text({
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  style,
  children = undefined,
  center,
  right,
  color,
  ...props
}: TextProps) {
  const {textBase1} = useTheme().color;
  return (
    <RNText
      allowFontScaling={false}
      testID="text"
      style={[
        //u
        t1 && StyleSheet.flatten([styles.t1Style, style]),
        t2 && StyleSheet.flatten([styles.t2Style, style]),
        t3 && StyleSheet.flatten([styles.t3Style, style]),
        t4 && StyleSheet.flatten([styles.t4Style, style]),
        t5 && StyleSheet.flatten([styles.t5Style, style]),
        t6 && StyleSheet.flatten([styles.t6Style, style]),
        t7 && StyleSheet.flatten([styles.t7Style, style]),
        t8 && StyleSheet.flatten([styles.t8Style, style]),
        t9 && StyleSheet.flatten([styles.t9Style, style]),
        t10 && StyleSheet.flatten([styles.t10Style, style]),
        t11 && StyleSheet.flatten([styles.t11Style, style]),
        t12 && StyleSheet.flatten([styles.t12Style, style]),
        t13 && StyleSheet.flatten([styles.t13Style, style]),
        t14 && StyleSheet.flatten([styles.t14Style, style]),
        t15 && StyleSheet.flatten([styles.t15Style, style]),
        t16 && StyleSheet.flatten([styles.t16Style, style]),
        t17 && StyleSheet.flatten([styles.t17Style, style]),
        t18 && StyleSheet.flatten([styles.t18Style, style]),
        {color: color ?? textBase1},
        center && styles.center,
        right && styles.right,
      ]}
      {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  t1Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    lineHeight: 46,
  },
  t2Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    lineHeight: 38,
  },
  t3Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    lineHeight: 30,
  },
  t4Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    lineHeight: 30,
  },
  t5Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 24,
  },
  t6Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 24,
  },
  t7Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
  t8Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 22,
  },
  t9Style: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 22,
  },
  t10Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 18,
  },
  t11Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
  },
  t12Style: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  t13Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    lineHeight: 16,
  },
  t14Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
  t15Style: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  t16Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    lineHeight: 12,
  },
  t17Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    lineHeight: 12,
  },
  t18Style: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    lineHeight: 12,
  },
});
