import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Spacer, Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

// @ts-ignore
import welcomeImage from '../../../assets/images/welcome.jpg';

interface WelcomeProps {
  onContinue: () => void;
}

export function Welcome({onContinue}: WelcomeProps) {
  const {styles} = useThematicStyles(rawStyles);
  const insets = useSafeAreaInsets();

  return (
    <>
      <Image source={welcomeImage} style={styles.image} />
      <View style={styles.container}>
        <Spacer height={insets.top} />
        <Text t4 color={Color.graphicBase3}>
          Welcome to
        </Text>
        <Text t2 color={Color.primary} style={styles.titleText}>
          999 Ticketing System
        </Text>
        <Button style={styles.buttonContainer} onPress={onContinue}>
          NEXT
        </Button>
        <Spacer height={insets.bottom + 16} />
      </View>
    </>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleText: {
    marginBottom: 16,
    marginTop: 15,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  alphaTitle: {
    position: 'absolute',
    top: '45%',
    fontSize: 90,
  },
  buttonContainer: {
    width: '85%',
  },
});
