import React from 'react';

import {Background, Button, Text} from 'src/components/ui';

interface CreateTaskCompleteProps {
  onContinue: () => void;
  onEtherscan: () => void;
}

export function CreateTaskComplete({
  onContinue,
  onEtherscan,
}: CreateTaskCompleteProps) {
  return (
    <Background>
      <Text onPress={onEtherscan}>View on etherscan</Text>
      <Button title="Continue" onPress={onContinue} />
    </Background>
  );
}
