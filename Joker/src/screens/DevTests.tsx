// SCREEN FOR DEVELOPER, NOT FOR PRODUCTION

import React from 'react';

import {Button, ButtonVariant, CenteredView, Text} from 'src/components/ui';
import {contracts} from 'src/services';

export function DevTestsScreen() {
  const onPress = async () => {
    const res = await contracts.getIpfsContentByCID(
      'QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE',
    );
    console.log('🚀 - cid', res);
  };

  return (
    <CenteredView>
      <Text>DevTestsScreen</Text>
      <Button
        title="TEST"
        variant={ButtonVariant.contained}
        onPress={onPress}
      />
    </CenteredView>
  );
}
