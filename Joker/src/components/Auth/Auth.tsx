import React from 'react';

import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {vs} from 'react-native-size-matters';

import {
  Background,
  BlockMessage,
  GitHubLogo,
  Spacer,
  Text,
  Waiting,
} from 'src/components/ui';
import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

interface AuthProps {
  onPressAuth: () => void;
  errorMessage?: string;
  loading?: boolean;
}

export function Auth({onPressAuth, loading, errorMessage}: AuthProps) {
  const {top, bottom} = useSafeAreaInsets();
  const {colors} = useTheme();
  if (loading) {
    return <Waiting />;
  }

  return (
    <Background bgImg="symbols">
      <Spacer height={top + vs(40)} />
      <GitHubLogo
        style={styles.logo}
        color={colors.graphicIcon1}
        width={150}
        height={150}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={onPressAuth}>
          <Text center l1 color={Color.graphicTurquoise1}>
            Authenticate with github
          </Text>
        </TouchableOpacity>
        <Spacer height={vs(20)} />
        <View style={styles.errorContainer}>
          {errorMessage && (
            <BlockMessage numberOfLines={4} blockType="error">
              {errorMessage}
            </BlockMessage>
          )}
        </View>
        <Spacer height={bottom + vs(10)} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  errorContainer: {
    height: 140,
  },
});
