import React from 'react';
import Steps from '../Steps';
import { render } from '../../../tests/utils';

describe('Steps', () => {
  it('should render correctly', () => {
    const { container } = render(<Steps current={1} amount={3} />);
    expect(container).toMatchSnapshot();
  });
});
