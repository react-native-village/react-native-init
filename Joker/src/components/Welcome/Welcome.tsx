import React from 'react';

import {Background, Button, Text} from 'src/components/ui';
import {navigator} from 'src/navigator';

interface WelcomeProps {
  onPerformer: () => void;
  onEmployer: () => void;
}

export function Welcome({onEmployer, onPerformer}: WelcomeProps) {
  return (
    <Background>
      <Text t3>Welcome Screen</Text>
      <Button
        onPress={() => {
          navigator.navigate('devTests');
        }}
        title="Skip"
      />
      <Button onPress={onPerformer} title="Performer" />
      <Button onPress={onEmployer} title="Employer" />
    </Background>
  );
}

// const styles = StyleSheet.create({
//   container: {
//   },
// });
