import React from 'react';

import {Avatar} from '../avatar';
import {Background, Text} from '../ui';

export function Profile() {
  return (
    <Background bgImg="symbols">
      <Text t1>Profile</Text>
      <Avatar
        size="xLarge"
        uri="https://avatars.githubusercontent.com/u/6774813?s=60&v=4"
      />
    </Background>
  );
}
