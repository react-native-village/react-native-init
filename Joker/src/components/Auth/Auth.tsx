import React from 'react';

import {Color} from 'src/colors';
import {
  Button,
  ButtonVariant,
  CenteredView,
  Text,
  Waiting,
} from 'src/components/ui';

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
    <CenteredView>
      <Text t3>Auth Screen</Text>
      <Button
        variant={ButtonVariant.contained}
        title="Authenticate with github"
        onPress={onPressAuth}
      />
      <Text t7 color={Color.textRed1}>
        {errorMessage}
      </Text>
    </CenteredView>
  );
}
