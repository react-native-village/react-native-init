import * as React from 'react';

import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {IS_IOS} from 'src/variables';

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
  t19?: boolean;
  t20?: boolean;
  ibm1?: boolean;
  ibm2?: boolean;
  ibm3?: boolean;
  l1?: boolean;
  klmn1?: boolean;
  center?: boolean;
  right?: boolean;
  color?: Color;
  shadow?: boolean;
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
  t19,
  t20,
  ibm1,
  ibm2,
  ibm3,
  l1,
  klmn1,
  style,
  children = undefined,
  center,
  right,
  color,
  shadow,
  ...props
}: TextProps) {
  const textColor = useTheme().colors[color ?? 'textBase1'];
  return (
    <View>
      <RNText
        allowFontScaling={false}
        testID="text"
        style={[
          t1 && styles.t1Style,
          t2 && styles.t2Style,
          t3 && styles.t3Style,
          t4 && styles.t4Style,
          t5 && styles.t5Style,
          t6 && styles.t6Style,
          t7 && styles.t7Style,
          t8 && styles.t8Style,
          t9 && styles.t9Style,
          t10 && styles.t10Style,
          t11 && styles.t11Style,
          t12 && styles.t12Style,
          t13 && styles.t13Style,
          t14 && styles.t14Style,
          t15 && styles.t15Style,
          t16 && styles.t16Style,
          t17 && styles.t17Style,
          t18 && styles.t18Style,
          t19 && styles.t19Style,
          t20 && styles.t20Style,
          ibm1 && styles.ibm1Style,
          ibm2 && styles.ibm2Style,
          ibm3 && styles.ibm3Style,
          l1 && styles.l1Style,
          klmn1 && styles.klmn1style,
          style,
          {color: textColor},
          shadow && styles.shadow,
          center && styles.center,
          right && styles.right,
        ]}
        {...props}>
        {children}
      </RNText>
    </View>
  );
}

const shadowColor = '#FF06F4';
const aquaShadow = '#62F5D4';
const ibm = IS_IOS ? 'IBM 3270' : '3270';
const editUndo = IS_IOS ? 'Edit Undo Line BRK' : 'edit-undo-line';
const KLMN = IS_IOS ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix';

const styles = StyleSheet.create({
  shadow: {
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textShadowColor: shadowColor,
    shadowColor: aquaShadow,
    shadowOpacity: 1,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 1,
  },
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
    fontSize: 20,
    lineHeight: 30,
  },
  t4Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
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
  t19Style: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    lineHeight: 38,
  },
  t20Style: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    lineHeight: 38,
  },
  ibm1Style: {
    fontFamily: ibm,
    fontSize: 36,
    lineHeight: 46,
  },
  ibm2Style: {
    fontFamily: ibm,
    fontSize: 22,
    lineHeight: 30,
  },
  ibm3Style: {
    fontFamily: ibm,
    fontSize: 18,
    lineHeight: 24,
  },
  l1Style: {
    fontFamily: editUndo,
    fontSize: 30,
    lineHeight: 38,
    letterSpacing: 2,
  },
  klmn1style: {
    fontFamily: KLMN,
    fontSize: 30,
    lineHeight: 38,
  },
});
