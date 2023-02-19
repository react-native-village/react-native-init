import React from 'react';

import {Settings} from 'src/components/SettingsScreen';

export function SettingsScreen({navigation}: any) {
  return (
    <Settings
      onPressDisconnect={() => {}}
      onPressEdit={() => {}}
      onPressWallet={() => {}}
      onPressBack={navigation.goBack}
    />
  );
}
