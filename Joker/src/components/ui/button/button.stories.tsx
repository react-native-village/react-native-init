import React from 'react';

import {ComponentMeta} from '@storybook/react';

import {I18N} from 'src/i18n';

import {Button} from './button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export function ButtonStorie(args: any) {
  return <Button {...args} />;
}

ButtonStorie.args = {
  i18n: I18N.TextStorybookBase,
};
