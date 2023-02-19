import React from 'react';

import {
  ImageBackground,
  Text as RNText,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

interface WelcomeProps {
  onContinue: () => void;
}

export function Welcome({onContinue}: WelcomeProps) {
  const {styles} = useThematicStyles(useStyles);
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../assets/images/welcome.jpg')}
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Text t4 color={Color.graphicBase3}>
        Welcome to
      </Text>
      <Text t2 color={Color.primary} style={styles.titleText}>
        999 Ticketing System
      </Text>
      <TouchableOpacity
        onPress={onContinue}
        activeOpacity={0.5}
        style={styles.containerBottom}>
        <Text color={Color.graphicBase3} t4>
          NEXT
        </Text>
      </TouchableOpacity>
      <View style={styles.alphaTitleContainer}>
        <RNText style={styles.alphaTitle}>999</RNText>
      </View>
    </ImageBackground>
  );
}

const useStyles = StyleSheet.create({
  containerBottom: {
    paddingHorizontal: 161,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: Color.primary,
    marginBottom: 52,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleText: {
    marginBottom: 16,
    marginTop: 15,
  },
  alphaTitle: {
    fontSize: 90,
    color: Color.primary,
  },
  alphaTitleContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
