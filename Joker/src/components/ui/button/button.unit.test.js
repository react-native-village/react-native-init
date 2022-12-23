import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {I18N, getText} from 'src/i18n';

import {Button} from './button';

test('render button test', async () => {
  expect.assertions(2);

  const expectedLine = getText(I18N.TextStorybookBase);
  render(<Button i18n={I18N.TextStorybookBase} />);

  expect(screen.getByTestId('text').children[0]).toBe(expectedLine);
  expect(screen.toJSON()).toMatchSnapshot();
});
