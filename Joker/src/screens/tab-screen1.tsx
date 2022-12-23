import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {Text} from 'src/components/ui';
import {showLoadingWithText} from 'src/helpers';
import {useTypedNavigation} from 'src/hooks';
import useTheme from 'src/hooks/use-theme';
import {app} from 'src/services';

export function TabScreen1() {
  const colors = useTheme();
  const naviagtion = useTypedNavigation();
  return (
    <View style={[styles.container, {backgroundColor: colors.bg1}]}>
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
      <View style={[styles.test, {backgroundColor: colors.graphicBase1}]}>
        <Text color={colors.textGreen1}>Test theme hook</Text>
        <Text color={colors.textYellow1}>Choose Theme</Text>
        <Button
          title={'Dark'}
          onPress={() => {
            app.emit('toggleTypeScheme', 'custom');
            app.emit('toggleTheme', 'dark');
          }}
        />
        <Button
          title={'Light'}
          onPress={() => {
            app.emit('toggleTypeScheme', 'custom');
            app.emit('toggleTheme', 'light');
          }}
        />
        <Button
          title={'System'}
          onPress={() => {
            app.emit('toggleTypeScheme', 'system');
          }}
        />
      </View>
      <Button
        title={'show modal'}
        onPress={() => showLoadingWithText('Test modal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
