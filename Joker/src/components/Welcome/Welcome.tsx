import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';

import {Background, Button, Text} from 'src/components/ui';
import {navigator} from 'src/navigator';
import {Color} from 'src/themeTypes';
import {RoleType} from 'src/types';

import {SelectButton} from './SelectButton';

interface WelcomeProps {
  onPerformer: () => void;
  onEmployer: () => void;
  onContinue: () => void;
  selected?: RoleType;
}

export function Welcome({
  onEmployer,
  onPerformer,
  onContinue,
  selected,
}: WelcomeProps) {
  return (
    <Background bgImg="symbols">
      <View style={styles.containerTop}>
        <View>
          <Button
            onPress={() => {
              navigator.navigate('home');
            }}
            title="dev Skip"
          />
          <SelectButton
            selected={selected === 'performer'}
            title="Developer"
            onPress={onPerformer}
          />
          <SelectButton
            selected={selected === 'employer'}
            title="Headhunter"
            onPress={onEmployer}
          />
        </View>
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity onPress={onContinue}>
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
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: s(20),
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
