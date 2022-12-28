import React from 'react';

import {ComponentMeta} from '@storybook/react';

import {Button} from './button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export function ButtonStorie(args: any) {
  return <Button {...args} />;
}

ButtonStorie.args = {
  title: 'hello, this is button example',
};
