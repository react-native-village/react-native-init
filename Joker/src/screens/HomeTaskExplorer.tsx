import React, {useState} from 'react';

import {ScrollView, StyleSheet} from 'react-native';

import {ActionsSheet} from 'src/components/actions-sheet';
import {BottomSheet} from 'src/components/bottom-sheet';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  CustomHeader,
  Inline,
  Text,
} from 'src/components/ui';
import {useTheme, useThemeObject} from 'src/hooks';
import {ColorTheme} from 'src/types';
import {WINDOW_HEIGHT} from 'src/variables';

export function HomeTaskExplorerScreen() {
  const {color} = useTheme().theme;
  const styles = useThemeObject(createStyles);

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
      <Inline gap={15}>
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
      </Inline>
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
