import React, {useEffect} from 'react';

import {Button, StatusBar, StyleSheet, View} from 'react-native';

import {Waiting} from 'src/components/lottie';
import {Text} from 'src/components/ui';
import {hideModal} from 'src/helpers';
import {useTheme, useThemeObject} from 'src/hooks';
import {ColorTheme} from 'src/types';
import {IS_ANDROID} from 'src/variables';

export type LoadingModalProps = {
  text?: string;
};
export function LoadingModal({text}: LoadingModalProps) {
  const {color} = useTheme();
  const styles = useThemeObject(createStyles);
  useEffect(() => {
    if (IS_ANDROID) {
      StatusBar.setBackgroundColor(color.graphicGreen2);
      return () => StatusBar.setBackgroundColor(color.bg1);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Waiting style={styles.waiting} />
      {text && (
        <Text t4 style={styles.text}>
          {text}
        </Text>
      )}
      <Button title={'hide'} onPress={() => hideModal('loading')} />
    </View>
  );
}
const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: color.graphicGreen2,
    },
    text: {color: color.textBase3, width: 230, textAlign: 'center'},
    waiting: {marginBottom: 40},
  });
  return styles;
};
