import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {Button} from './button';

test('render button test', async () => {
  expect.assertions(2);

  const expectedLine = 'hello';
  render(<Button title={'hello'} />);

  expect(screen.getByTestId('text').children[0]).toBe(expectedLine);
  expect(screen.toJSON()).toMatchSnapshot();
});
