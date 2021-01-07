import React from 'react';
import Checkbox from '../Checkbox';
import { render } from '../../../tests/utils';

describe('Checkbox Group', () => {
  it('should support direction', () => {
    const { container } = render(
      <>
        <Checkbox.Group direction="horizontal">
          <Checkbox checked={true}>test-value</Checkbox>
          <Checkbox checked={false}>test-value</Checkbox>
        </Checkbox.Group>
        <Checkbox.Group direction="vertical">
          <Checkbox checked={true}>test-value</Checkbox>
          <Checkbox checked={false}>test-value</Checkbox>
        </Checkbox.Group>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});
