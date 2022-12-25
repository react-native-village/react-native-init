import React, {useState} from 'react';

import {Button as RNButton, StyleSheet, View} from 'react-native';

import {Button, ButtonSize, ButtonVariant, Text} from 'src/components/ui';
import {Checkbox} from 'src/components/ui/checkbox';
import {showLoadingWithText} from 'src/helpers';
import {useTheme, useThemeObject, useTypedNavigation} from 'src/hooks';
import {app} from 'src/services';
import {ColorTheme} from 'src/types';

export function TabScreen1() {
  const {lightTheme, darkTheme, systemTheme} = useTheme();
  const {color} = useTheme().theme;
  const styles = useThemeObject(createStyles);
  const naviagtion = useTypedNavigation();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <RNButton
        title="go to first screen for modal"
        onPress={() => {
          naviagtion.navigate('firstScreen');
        }}
      />
      <RNButton
        title="Sign in"
        onPress={() => {
          app.githubAuth.authenticate();
        }}
      />
      <RNButton
        title="Sign out"
        onPress={() => {
          app.githubAuth.logout();
        }}
      />
      <View style={styles.test}>
        <Text color={color.textBase1}>Test theme hook</Text>
        <Text color={color.textYellow1}>Choose Theme</Text>
        <RNButton title={'Dark'} onPress={darkTheme} />
        <RNButton title={'Light'} onPress={lightTheme} />
        <RNButton title={'System'} onPress={systemTheme} />
      </View>

      <Button
        testID={'tab1_show_modal'}
        variant={ButtonVariant.second}
        title={'Show Modal'}
        style={styles.button}
        size={ButtonSize.large}
        onPress={() => showLoadingWithText('Test modal')}
      />

      <Checkbox value={isChecked} onPress={() => setIsChecked(!isChecked)}>
        <Text t13 style={styles.agreeText}>
          Test checkbox
        </Text>
      </Checkbox>
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
      backgroundColor: color.graphicBase1,
      marginBottom: 20,
    },
    button: {
      marginBottom: 16,
      width: 300,
    },
    agreeText: {
      color: color.textBase2,
      marginLeft: 12,
      marginBottom: 4,
    },
  });
  return styles;
};
