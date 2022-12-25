import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {Text} from 'src/components/ui';
import {showLoadingWithText} from 'src/helpers';
import {useTheme, useThemeObject, useTypedNavigation} from 'src/hooks';
import {app} from 'src/services';
import {ColorTheme} from 'src/types';

export function TabScreen1() {
  const {lightTheme, darkTheme, systemTheme} = useTheme();
  const {color} = useTheme().theme;
  const styles = useThemeObject(createStyles);
  const naviagtion = useTypedNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="go to first screen for modal"
        onPress={() => {
          naviagtion.navigate('firstScreen');
        }}
      />
      <Button
        title="Sign in"
        onPress={() => {
          app.githubAuth.authenticate();
        }}
      />
      <Button
        title="Sign out"
        onPress={() => {
          app.githubAuth.logout();
        }}
      />
      <View style={styles.test}>
        <Text color={color.textBase1}>Test theme hook</Text>
        <Text color={color.textYellow1}>Choose Theme</Text>
        <Button title={'Dark'} onPress={darkTheme} />
        <Button title={'Light'} onPress={lightTheme} />
        <Button title={'System'} onPress={systemTheme} />
      </View>
      <Button
        title={'show modal'}
        onPress={() => showLoadingWithText('Test modal')}
      />
    </View>
  );
}

const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.bg1,
    },
    test: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.graphicBase2,
    },
  });
  return styles;
};
