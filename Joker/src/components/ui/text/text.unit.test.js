import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {Text} from './text';

test('render text test', async () => {
  expect.assertions(2);

  const expectedLine = 'hello';
  render(<Text children={'hello'} />);

  expect(screen.getByTestId('text').children[0]).toBe(expectedLine);
  expect(screen.toJSON()).toMatchSnapshot();
});
