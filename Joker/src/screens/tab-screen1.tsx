import React, {useState} from 'react';

import {Button as RNButton, StyleSheet, View} from 'react-native';

import {Button, ButtonSize, ButtonVariant, Text} from 'src/components/ui';
import {Checkbox} from 'src/components/ui/checkbox';
import {CustomHeader} from 'src/components/ui/custom-header';
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
      <CustomHeader
        title={'Test Header'}
        textLeft={'Left'}
        textRight={'Right'}
        colorLeft={color.graphicGreen1}
        colorRight={color.graphicGreen1}
      />
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
      <View style={styles.agree}>
        <Checkbox value={isChecked} onPress={() => setIsChecked(!isChecked)}>
          <Text t13 style={styles.agreeText}>
            I understand that if I lose my recovery phrase, I will be stupid boy
          </Text>
        </Checkbox>
      </View>
      <Button
        testID={'tab1_show_modal'}
        variant={ButtonVariant.second}
        title={'Show Modal'}
        style={styles.button}
        size={ButtonSize.large}
        onPress={() => showLoadingWithText('Test modal')}
      />
    </View>
  );
}

const createStyles = (color: ColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.bg1,
    },
    test: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: color.graphicBase1,
      marginBottom: 20,
    },
    button: {
      alignSelf: 'center',
      marginBottom: 16,
      width: 300,
    },
    agree: {
      marginBottom: 4,
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    agreeText: {
      color: color.textBase2,
      marginHorizontal: 12,
      marginBottom: 4,
    },
  });
  return styles;
};
