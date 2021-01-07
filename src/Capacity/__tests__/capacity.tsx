import React from 'react';
import Capacity from '../Capacity';
import { render } from '../../../tests/utils';

describe('Capacity', () => {
  it('should support all sizes', () => {
    const { container } = render(
      <>
        <Capacity capacity={50} size="default" />
        <Capacity capacity={50} size="large" />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should fill svg ring with capacity value', () => {
    const { container } = render(
      <>
        <Capacity capacity={0} />
        <Capacity capacity={20} />
        <Capacity capacity={80} />
        <Capacity capacity={100} />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children for all sizes', () => {
    const { getAllByText } = render(
      <>
        <Capacity capacity={20}>test-value</Capacity>
        <Capacity size="large" capacity={20}>
          test-value
        </Capacity>
      </>,
    );
    expect(getAllByText('test-value').length).toBe(2);
  });
});
