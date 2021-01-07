import React from 'react';
import Link from '../Link';
import { render } from '../../../tests/utils';

describe('Link', () => {
  it('should render <a> element', () => {
    const { container } = render(<Link>test-value</Link>);
    expect(container.querySelectorAll('a').length).not.toBe(0);
    expect(container).toMatchSnapshot();
  });
});
