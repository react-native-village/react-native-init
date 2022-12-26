import React from 'react';

import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {Icon} from 'src/components/ui';
import {useTheme} from 'src/hooks';

export type MenuNavigationButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  hideArrow?: boolean;
};

export function MenuNavigationButton({
  onPress,
  children,
  style,
  hideArrow = false,
}: MenuNavigationButtonProps) {
  const {color} = useTheme().theme;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.content}>{children}</View>
        {!hideArrow && (
          <Icon i24 name="arrow_forward_small" color={color.graphicSecond3} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
});
