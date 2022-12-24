import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {Text} from 'src/components/ui';
import {showLoadingWithText} from 'src/helpers';
import {useTypedNavigation} from 'src/hooks';
import {useTheme} from 'src/hooks/use-theme';
import {app} from 'src/services';
import {Theme} from 'src/themes';

export function TabScreen1() {
  const {theme, lightTheme, darkTheme, systemTheme} = useTheme();
  const Styles = React.useMemo(() => createStyles(theme), [theme]);
  const naviagtion = useTypedNavigation();
  return (
    <View style={Styles.container}>
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
      <View style={Styles.test}>
        <Text color={theme.color.textGreen1}>Test theme hook</Text>
        <Text color={theme.color.textYellow1}>Choose Theme</Text>
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

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.bg1,
    },
    // eslint-disable-next-line react-native/no-unused-styles
    test: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.graphicBase1,
    },
  });
  return styles;
};
