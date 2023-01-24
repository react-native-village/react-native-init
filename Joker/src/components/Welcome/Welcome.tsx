import React from 'react';

import {StyleSheet, TouchableOpacity, View, useColorScheme} from 'react-native';

import {Background, Button, Text} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {navigator} from 'src/navigator';
import {Color} from 'src/themeTypes';

import {SelectButton} from './SelectButton';

interface WelcomeProps {
  onPerformer: () => void;
  onEmployer: () => void;
}

export function Welcome({onEmployer, onPerformer}: WelcomeProps) {
  const isDark = useColorScheme() === 'dark';

  return (
    <Background bgImg={isDark ? 'symbols-dark' : 'symbols-light'}>
      <View style={styles.containerTop}>
        <Button
          onPress={() => {
            navigator.navigate('devTests');
          }}
          title="dev Skip"
        />
        <SelectButton title="Developer" onPress={onPerformer} />
        <SelectButton title="Headhunter" onPress={onEmployer} />
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity onPress={onPerformer}>
          <Text color={Color.graphicTurquoise1} l1>
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
