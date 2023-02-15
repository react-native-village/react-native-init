import React from 'react';

import {Welcome} from 'src/components/Welcome';
import {useTypedNavigation} from 'src/hooks';

export function WelcomeScreen() {
  const {navigate} = useTypedNavigation();

  const onContinue = () => {
    navigate('home');
  };

  return <Welcome onContinue={onContinue} />;
}
