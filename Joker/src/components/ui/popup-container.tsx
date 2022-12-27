import React from 'react';

import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type PopupContainerViewProps = {plain: true} & ViewProps;
type PopupContainerScrollProps = {plain?: undefined} & ScrollViewProps;
export type PopupContainerProps =
  | PopupContainerViewProps
  | PopupContainerScrollProps;

export function PopupContainer({
  children,
  style,
  ...props
}: PopupContainerProps) {
  const insets = useSafeAreaInsets();

  const propStyle = StyleSheet.compose(
    {flexGrow: 1, paddingBottom: insets.bottom},
    style,
  );

  if ('plain' in props) {
    return (
      <View {...props} style={propStyle}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={propStyle}
      overScrollMode="never"
      bounces={false}
      {...props}>
      {children}
    </ScrollView>
  );
}
