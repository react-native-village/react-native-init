import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';

import {Background, Text} from 'src/components/ui';
import {Color} from 'src/themeTypes';

interface WelcomeProps {
  onContinue: () => void;
}

export function Welcome({onContinue}: WelcomeProps) {
  return (
    <Background>
      <View style={styles.containerBottom}>
        <TouchableOpacity onPress={onContinue}>
          <Text color={Color.primary2} l1>
            Go Home
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
