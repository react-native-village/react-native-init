import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import {I18N} from 'src/i18n';

import {Text} from '../../src/components/ui/text/text';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => <Text {...args} />;

Basic.args = {
  i18n: I18N.TextStorybookBase,
  color: 'white',
  t0: true,
};
