import React from 'react';

import {Background, Button, ButtonVariant, Text} from 'src/components/ui';
import {useTypedNavigation} from 'src/hooks';

export function AuthSuccess() {
  const {navigate} = useTypedNavigation();
  const onPressGoOn = () => {
    navigate('home');
  };
  return (
    <Background center>
      <Text t3>Auth Success Screen</Text>
      <Button
        variant={ButtonVariant.contained}
        title="Let's go on"
        onPress={onPressGoOn}
      />
    </Background>
  );
}
