import React from 'react';

import {Button, ButtonVariant, CenteredView, Text} from 'src/components/ui';
import {useTypedNavigation} from 'src/hooks';

export function AuthSuccess() {
  const {navigate} = useTypedNavigation();
  const onPressGoOn = () => {
    navigate('home');
  };
  return (
    <CenteredView>
      <Text t3>Auth Success Screen</Text>
      <Button
        variant={ButtonVariant.contained}
        title="Let's go on"
        onPress={onPressGoOn}
      />
    </CenteredView>
  );
}
