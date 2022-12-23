import React from 'react';

import {ComponentMeta} from '@storybook/react';

import {I18N} from 'src/i18n';

import {Text} from './text';

export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export function TextStorie(args: any) {
  return <Text {...args} />;
}

TextStorie.args = {
  i18n: I18N.TextStorybookBase,
  color: 'black',
  t0: true,
};
