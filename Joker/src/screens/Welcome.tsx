import React from 'react';

import {Welcome} from 'src/components/Welcome';
import {useTypedNavigation} from 'src/hooks';

export function WelcomeScreen() {
  const {navigate} = useTypedNavigation();

  const onPressEmployer = () => {
    navigate('authentication', {
      role: 'employer',
    });
  };
  const onPressPerformer = () => {
    navigate('authentication', {
      role: 'performer',
    });
  };

  return (
    <Welcome onPerformer={onPressPerformer} onEmployer={onPressEmployer} />
  );
}
