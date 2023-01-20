import React from 'react';

import {
  Background,
  Button,
  ButtonVariant,
  Text,
  Waiting,
} from 'src/components/ui';
import {Color} from 'src/themeTypes';

interface AuthProps {
  onPressAuth: () => void;
  errorMessage?: string;
  loading?: boolean;
}

export function Auth({onPressAuth, loading, errorMessage}: AuthProps) {
  if (loading) {
    return <Waiting />;
  }

  return (
    <Background centered>
      <Text t3>Auth Screen</Text>
      <Button
        variant={ButtonVariant.contained}
        title="Authenticate with github"
        onPress={onPressAuth}
      />
      <Text t7 color={Color.textRed1}>
        {errorMessage}
      </Text>
    </Background>
  );
}