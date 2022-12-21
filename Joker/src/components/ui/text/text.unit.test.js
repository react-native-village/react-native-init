import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {I18N, getText} from 'src/i18n';

import {Text} from './text';

test('render text test', async () => {
  expect.assertions(2);

  const expectedLine = getText(I18N.TextStorybookBase);
  render(<Text i18n={I18N.TextStorybookBase} />);

  expect(screen.getByTestId('text').children[0]).toBe(expectedLine);
  expect(screen.toJSON()).toMatchSnapshot();
});
