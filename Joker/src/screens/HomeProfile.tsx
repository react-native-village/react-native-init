import React from 'react';

import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Background, Button, Text} from 'src/components/ui';
import {useExploreProfilesQuery} from 'src/generated/graphql-lens';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

export function HomeProfileScreen() {
  const {loading, error, data} = useExploreProfilesQuery({
    context: {clientName: 'lenLink'},
  });
  const {styles} = useThematicStyles(rawStyles);
  const connector = useWalletConnect();

  const onPressWallet = () => {
    connector.connect();
  };
  const onPressDisconnect = () => {
    connector.killSession();
  };
  const account = connector.accounts[0];
  if (loading) {
    return <Text t4>loading</Text>;
  }
  if (error) {
    return <Text t4>error</Text>;
  }
  return (
    <Background>
      <ScrollView>
        {data?.exploreProfiles.items.map(item => {
          return (
            <>
              <Text>{item.name}</Text>
              <View style={styles.line} />
            </>
          );
        })}
        {account ? (
          <>
            <Text t7>{account}</Text>
            <Button onPress={onPressDisconnect} title="Disconnect wallet" />
          </>
        ) : (
          <Button onPress={onPressWallet} title="Connect wallet" />
        )}
      </ScrollView>
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  line: {
    width: '100%',
    height: 3,
    backgroundColor: Color.textRed1,
  },
});
