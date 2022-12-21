import * as React from 'react';
import {useMemo} from 'react';

import {
  Platform,
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {Color} from 'src/colors';
import {I18N, getText} from 'src/i18n';
import {ColorType, FontT} from 'src/types';

export type TextValue =
  | {children: React.ReactNode}
  | {i18n: I18N; i18params?: Record<string, string>};

export type TextProps = Omit<RNTextProps, 'style' | 'children'> & {
  children?: React.ReactNode;
  i18n?: I18N;
  i18params?: Record<string, string>;
  t0?: boolean;
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
  u0?: boolean;
  clean?: boolean;
  center?: boolean;
  right?: boolean;
  color?: ColorType;
  style?: StyleProp<ViewStyle>;
} & TextValue;

export function Text({
  t0,
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
  u0,
  style,
  i18n = undefined,
  i18params = undefined,
  children = undefined,
  clean,
  center,
  right,
  color,
  ...props
}: TextProps) {
  const value = useMemo(
    () => (typeof i18n !== 'undefined' ? getText(i18n, i18params) : children),
    [children, i18n, i18params],
  );

  return clean ? (
    <RNText
      testID="clean-text"
      style={style}
      allowFontScaling={false}
      {...props}>
      {children}
    </RNText>
  ) : (
    <RNText
      testID="text"
      allowFontScaling={false}
      style={[
        t0 && StyleSheet.flatten([page.t0Style, style]),
        t1 && StyleSheet.flatten([page.t1Style, style]),
        t2 && StyleSheet.flatten([page.t2Style, style]),
        t3 && StyleSheet.flatten([page.t3Style, style]),
        t4 && StyleSheet.flatten([page.t4Style, style]),
        t5 && StyleSheet.flatten([page.t5Style, style]),
        t6 && StyleSheet.flatten([page.t6Style, style]),
        t7 && StyleSheet.flatten([page.t7Style, style]),
        t8 && StyleSheet.flatten([page.t8Style, style]),
        t9 && StyleSheet.flatten([page.t9Style, style]),
        t10 && StyleSheet.flatten([page.t10Style, style]),
        t11 && StyleSheet.flatten([page.t11Style, style]),
        t12 && StyleSheet.flatten([page.t12Style, style]),
        t13 && StyleSheet.flatten([page.t13Style, style]),
        t14 && StyleSheet.flatten([page.t14Style, style]),
        t15 && StyleSheet.flatten([page.t15Style, style]),
        t16 && StyleSheet.flatten([page.t16Style, style]),
        t17 && StyleSheet.flatten([page.t17Style, style]),
        u0 && StyleSheet.flatten([page.u0Style, style]),
        !!color && {color},
        center && page.center,
        right && page.right,
      ]}
      {...props}>
      {value}
    </RNText>
  );
}

const sfProTextRegular400: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
  },
  android: {
    fontFamily: 'SF-Pro-Display-Regular',
  },
});

const sfProDisplayBold700: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
  },
  android: {
    fontFamily: 'SF-Pro-Display-Bold',
  },
});

const sfProDisplaySemibold600: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
  },
  android: {
    fontFamily: 'SF-Pro-Display-Semibold',
  },
});

const sfProTextMedium500: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
  },
  android: {
    fontFamily: 'SF-ProText-Semibold',
  },
});

const sfProTextSemibold600: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
  },
  android: {
    fontFamily: 'SF-ProText-Semibold',
  },
});

const sfProTextBold700: FontT = Platform.select({
  ios: {
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
  },
  android: {
    fontFamily: 'SF-ProText-Bold',
  },
});

const page = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  u0Style: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 36,
    lineHeight: 43,
    letterSpacing: 0.38,
  },
  t0Style: {
    fontFamily: 'ElMessiri-Bold',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 46,
    color: Color.textBase1,
  },
  t1Style: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 46,
    color: Color.textBase1,
  },
  t2Style: {
    fontFamily: 'ElMessiri-Bold',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 46,
    color: Color.textBase1,
  },
  t3Style: {
    fontFamily: 'SF Pro Display',
    ...sfProDisplayBold700,
    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 38,
    color: Color.textBase1,
  },
  t4Style: {
    fontFamily: 'ElMessiri-Bold',
    fontStyle: 'normal',
    fontSize: 28,
    lineHeight: 38,
    color: Color.textBase1,
  },
  t5Style: {
    ...sfProDisplayBold700,
    fontSize: 22,
    lineHeight: 30,
    color: Color.textBase1,
  },
  t6Style: {
    ...sfProDisplaySemibold600,
    fontSize: 22,
    lineHeight: 30,
    color: Color.textBase1,
  },
  t7Style: {
    ...sfProTextBold700,
    fontSize: 18,
    lineHeight: 24,
    color: Color.textBase1,
  },
  t8Style: {
    ...sfProTextSemibold600,
    fontSize: 18,
    lineHeight: 24,
    color: Color.textBase1,
  },
  t9Style: {
    ...sfProDisplayBold700,
    fontSize: 16,
    lineHeight: 22,
    color: Color.textBase1,
  },
  t10Style: {
    ...sfProDisplaySemibold600,
    fontSize: 16,
    lineHeight: 22,
    color: Color.textBase1,
  },
  t11Style: {
    ...sfProTextRegular400,
    fontSize: 16,
    lineHeight: 22,
    color: Color.textBase1,
  },
  t12Style: {
    ...sfProDisplayBold700,
    fontSize: 14,
    lineHeight: 18,
    color: Color.textBase1,
  },
  t13Style: {
    ...sfProDisplaySemibold600,
    fontSize: 14,
    lineHeight: 18,
    color: Color.textBase1,
  },
  t14Style: {
    ...sfProTextRegular400,
    fontSize: 14,
    lineHeight: 18,
    color: Color.textBase1,
  },
  t15Style: {
    ...sfProTextRegular400,
    fontSize: 12,
    lineHeight: 16,
    color: Color.textBase1,
  },
  t16Style: {
    ...sfProTextBold700,
    fontSize: 10,
    lineHeight: 12,
    color: Color.textBase1,
  },
  t17Style: {
    ...sfProTextMedium500,
    fontSize: 10,
    lineHeight: 12,
    color: Color.textBase1,
  },
});
