import React from 'react';
import Text from '../Text';
import { render } from '../../../tests/utils';

describe('Text', () => {
  it('should render <span> element in the default', () => {
    const { container } = render(<Text>test-value</Text>);
    expect(container.querySelectorAll('span').length).not.toBe(0);
    expect(container).toMatchSnapshot();
  });

  it('should work with different appearances', () => {
    const { container } = render(
      <>
        <Text appearance="default">test-value-default</Text>
        <Text appearance="secondary">test-value-secondary</Text>
        <Text appearance="faded">test-value-faded</Text>
        <Text appearance="error">test-value-error</Text>
        <Text appearance="warning">test-value-warning</Text>
        <Text appearance="success">test-value-success</Text>
      </>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the correct HTML tag', () => {
    const { container } = render(
      <>
        <Text h1>test-value-h1</Text>
        <Text h2>test-value-h2</Text>
        <Text h3>test-value-h3</Text>
        <Text p>test-value-paragraph</Text>
        <Text b>test-value-bold</Text>
        <Text small>test-value-small</Text>
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
