import React from 'react';

import {ComponentMeta} from '@storybook/react';

import {Text} from './text';

export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export function TextStorie(args: any) {
  return <Text {...args} />;
}

TextStorie.args = {
  children: 'hello, this is text example',
  color: 'black',
  t0: true,
};
