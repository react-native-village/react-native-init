import React from 'react';

import {StyleSheet, View} from 'react-native';
import {s} from 'react-native-size-matters';

import {
  ErrorIcon,
  InfoIcon,
  SvgIconProps,
  Text,
  WarningIcon,
} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

const Icons = {
  error: {
    component: (props: SvgIconProps) => <ErrorIcon {...props} />,
    color: Color.textRed1,
    bgColor: Color.opacityRed1,
  },
  warning: {
    component: (props: SvgIconProps) => <WarningIcon {...props} />,
    color: Color.textYellow1,
    bgColor: Color.opacityYellow1,
  },
  info: {
    component: (props: SvgIconProps) => <InfoIcon {...props} />,
    color: Color.textBlue1,
    bgColor: Color.opacityBlue1,
  },
};

interface BlockMessageProps {
  blockType?: keyof typeof Icons;
  hideIcon?: boolean;
  children?: React.ReactNode;
  numberOfLines?: number;
}

export function BlockMessage({
  blockType = 'info',
  hideIcon,
  children,
  numberOfLines,
}: BlockMessageProps) {
  const {styles, colors} = useThematicStyles(rawStyles);
  const {component: IconComponent, color, bgColor} = Icons[blockType];

  const textStyle = [styles.text, !hideIcon ? styles.iconText : null];
  const containerStyle = [styles.container, {backgroundColor: colors[bgColor]}];

  return (
    <View style={containerStyle}>
      {!hideIcon && <IconComponent size={s(24)} color={colors[color]} />}
      <View style={styles.textContainer}>
        <Text
          numberOfLines={numberOfLines}
          ibm3
          style={textStyle}
          color={color}>
          {children}
        </Text>
      </View>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    flexWrap: 'wrap',
  },
  iconText: {marginLeft: 10},
  text: {},
});
