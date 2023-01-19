import React from 'react';

import {Linking} from 'react-native';

import {CreateTaskComplete} from 'src/components/CreateTaskComplete';
import {useTypedNavigation, useTypedRoute} from 'src/hooks';

export function CreateTaskCompleteScreen() {
  const {navigate} = useTypedNavigation();
  const {txhash} = useTypedRoute<'createTaskComplete'>().params;

  const onContinue = () => {
    navigate('home');
  };

  const onEtherscan = () => {
    Linking.openURL(
      `https://etherscan.io/tx/${txhash}`, // example: https://etherscan.io/tx/0xc9fb14d1b0d513bd91834e86f81c7fb06276b2b8e4af2b7097735120f86f3eee
    );
  };
  return (
    <CreateTaskComplete onEtherscan={onEtherscan} onContinue={onContinue} />
  );
}
