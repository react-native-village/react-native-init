import React, {useState} from 'react';

import {Welcome} from 'src/components/Welcome';
import {useTypedNavigation} from 'src/hooks';
import {RoleType} from 'src/types';

export function WelcomeScreen() {
  const {navigate} = useTypedNavigation();
  const [selected, setSelected] = useState<RoleType>();

  const onPressEmployer = () => {
    setSelected('employer');
  };
  const onPressPerformer = () => {
    setSelected('performer');
  };

  const onContinue = () => {
    if (selected) {
      navigate('authentication', {
        role: selected,
      });
    }
  };

  return (
    <Welcome
      selected={selected}
      onContinue={onContinue}
      onPerformer={onPressPerformer}
      onEmployer={onPressEmployer}
    />
  );
}
