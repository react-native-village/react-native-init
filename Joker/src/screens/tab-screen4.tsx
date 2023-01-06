import React from 'react';

import {APP_SERVER_URL} from '@env';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import axios from 'axios';
import {StyleSheet, View} from 'react-native';

import {Button, ButtonVariant} from 'src/components/ui';

export function TabScreen4() {
  const connector = useWalletConnect();
  const onPressSignInWithMetamask = async () => {
    connector.connect();
  };
  return (
    <View style={styles.container}>
      <Button
        variant={ButtonVariant.contained}
        onPress={onPressSignInWithMetamask}
        title={'WalletConnect'}
      />
      {/* {connectors.map(connector => (
        <Button
          loading={isLoading}
          key={connector.id}
          disabled={!connector.ready}
          variant={ButtonVariant.contained}
          onPress={() => connect({connector})}
          title={connector.name}
        />
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
