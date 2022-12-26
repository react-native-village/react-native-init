import React, {useState} from 'react';

import {Button as RNButton, ScrollView, StyleSheet, View} from 'react-native';

import {ActionsSheet} from 'src/components/actions-sheet';
import {BottomSheet} from 'src/components/bottom-sheet';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  Checkbox,
  CustomHeader,
  ErrorText,
  Text,
} from 'src/components/ui';
import {showLoadingWithText} from 'src/helpers';
import {useTheme, useThemeObject, useTypedNavigation} from 'src/hooks';
import {app} from 'src/services';
import {ColorTheme} from 'src/types';
import {WINDOW_HEIGHT} from 'src/variables';

export function TabScreen1() {
  const {lightTheme, darkTheme, systemTheme} = useTheme();
  const {color} = useTheme().theme;
  const styles = useThemeObject(createStyles);
  const naviagtion = useTypedNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const closeDistance = WINDOW_HEIGHT / 5;
  return (
    <ScrollView style={styles.container}>
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
        <Text color={color.textBase2}>Test theme hook</Text>
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
      <ErrorText e3 style={styles.errorText}>
        This is error test text. AAA
      </ErrorText>
      <Button
        testID={'tab1_show_modal'}
        variant={ButtonVariant.second}
        title={'Show Modal'}
        style={styles.button}
        size={ButtonSize.large}
        onPress={() => showLoadingWithText('Test modal')}
      />
      <Button
        testID={'tab1_action_sheet'}
        variant={ButtonVariant.contained}
        title={'Show Action Sheet'}
        style={styles.button}
        size={ButtonSize.large}
        onPress={() => setActionSheetVisible(true)}
      />
      <Button
        testID={'tab1_bottom_sheet'}
        variant={ButtonVariant.second}
        title={'Show Bottom Sheet'}
        style={styles.button}
        size={ButtonSize.large}
        onPress={() => setBottomSheetVisible(true)}
      />
      {bottomSheetVisible && (
        <BottomSheet
          onClose={() => setBottomSheetVisible(false)}
          title="Test BottomSheet"
          closeDistance={closeDistance}>
          <Text clean style={styles.warning}>
            А, ну да, это я... Как я докатился до жизни такой? Что ж, начнём
            сначала...
          </Text>
        </BottomSheet>
      )}
      {actionSheetVisible && (
        <ActionsSheet
          onPressKeepEditing={() => {
            setActionSheetVisible(false);
          }}
          onPressDiscard={() => {
            setActionSheetVisible(false);
          }}
        />
      )}
    </ScrollView>
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
    errorText: {
      alignSelf: 'center',
      marginBottom: 14,
    },
    warning: {
      marginBottom: 24,
      fontSize: 14,
      lineHeight: 18,
      color: color.textBase2,
    },
  });
  return styles;
};
