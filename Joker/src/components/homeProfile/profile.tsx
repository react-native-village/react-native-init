import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';

import {
  Background,
  Button,
  ButtonSize,
  ButtonVariant,
  CustomHeader,
} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {useThematicStyles} from 'src/hooks/useThematicStyles';
import {Color} from 'src/themeTypes';

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const {styles} = useThematicStyles(rawStyles);
  const {toggleDark, toggleLight, toggleSystem} = useTheme();

  return (
    <Background style={styles.container}>
      <CustomHeader
        title="Test Header"
        textLeft="Left"
        textRight="Right"
        colorLeft={Color.textBase1}
        colorRight={Color.textBase1}
      />
      <ScrollView>
        <Button
          variant={ButtonVariant.contained}
          title="Add new task"
          style={styles.button}
          size={ButtonSize.large}
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
        <Button
          variant={ButtonVariant.contained}
          title="Go to Profile"
          style={styles.button}
          size={ButtonSize.large}
        />
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
