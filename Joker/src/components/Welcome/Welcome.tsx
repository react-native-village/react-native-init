import React from 'react';

import {Button, CenteredView, Text} from 'src/components/ui';

interface WelcomeProps {
  onPerformer: () => void;
  onEmployer: () => void;
}

export function Welcome({onEmployer, onPerformer}: WelcomeProps) {
  return (
    <CenteredView>
      <Text t3>Welcome Screen</Text>
      <Button onPress={onPerformer} title="Performer" />
      <Button onPress={onEmployer} title="Employer" />
    </CenteredView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//   },
// });
