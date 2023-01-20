import React, {useState} from 'react';

import {ScrollView, StyleSheet} from 'react-native';

import {ActionsSheet} from 'src/components/actions-sheet';
import {
  Background,
  Button,
  ButtonSize,
  ButtonVariant,
  CustomHeader,
  Inline,
} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {useThematicStyles} from 'src/hooks/useThematicStyles';
import {Color} from 'src/themeTypes';

interface HomeTaskExplorerProps {
  onCreateTask: () => void;
}

export function HomeTaskExplorer({onCreateTask}: HomeTaskExplorerProps) {
  const {styles} = useThematicStyles(rawStyles);
  const {toggleDark, toggleLight, toggleSystem} = useTheme();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <Background style={styles.container}>
      <CustomHeader
        title="Test Header"
        textLeft="Left"
        textRight="Right"
        colorLeft={Color.graphicGreen1}
        colorRight={Color.graphicGreen1}
      />
      <ScrollView>
        <Button
          variant={ButtonVariant.contained}
          title="Add new task"
          style={styles.button}
          size={ButtonSize.large}
          onPress={onCreateTask}
        />
        <Button
          variant={ButtonVariant.contained}
          title="Dark Theme"
          style={styles.button}
          size={ButtonSize.large}
          onPress={toggleDark}
        />
        <Button
          variant={ButtonVariant.contained}
          title="Light Theme"
          style={styles.button}
          size={ButtonSize.large}
          onPress={toggleLight}
        />
        <Button
          variant={ButtonVariant.contained}
          title="System Theme"
          style={styles.button}
          size={ButtonSize.large}
          onPress={toggleSystem}
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
        </Inline>
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
    </Background>
  );
}
const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.bg1,
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
    color: Color.textBase2,
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
    color: Color.textBase2,
  },
});
