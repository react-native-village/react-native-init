import React from 'react';

import {Background, CustomHeader} from 'src/components/ui';
import {Color} from 'src/themeTypes';

import {SettingsButton} from './SettingsButton';

interface SettingsProps {
  onPressEdit: () => void;
  onPressWallet: () => void;
  onPressDisconnect: () => void;
  onPressBack: () => void;
}
export function Settings({
  onPressEdit,
  onPressWallet,
  onPressDisconnect,
  onPressBack,
}: SettingsProps) {
  return (
    <Background>
      <CustomHeader
        iconLeft="arrow-back"
        title="Settings"
        colorLeft={Color.primary}
        onPressLeft={onPressBack}
      />
      <SettingsButton
        icon="person"
        title="Edit Username"
        onPress={onPressEdit}
      />
      <SettingsButton icon="wallet" title="My Wallet" onPress={onPressWallet} />
      <SettingsButton
        icon="exit"
        title="Disconnect"
        onPress={onPressDisconnect}
      />
    </Background>
  );
}
