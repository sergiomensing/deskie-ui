import React from 'react';
import Button from '../Button';
import { render } from '../../../tests/utils';

describe('Button', () => {
  it('should support all appearances', () => {
    const { container } = render(
      <>
        <Button appearance="default">test-value</Button>
        <Button appearance="secondary">test-value</Button>
        <Button appearance="danger">test-value</Button>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render icons', () => {
    const { getByTestId, container } = render(
      <>
        <Button icon={<span data-testid="test-icon"></span>}>test-value</Button>
        <Button iconRight={<span data-testid="test-icon-right"></span>}>test-value</Button>
      </>,
    );

    expect(getByTestId('test-icon')).toBeInTheDocument();
    expect(getByTestId('test-icon-right')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should support all sizes', () => {
    const { container } = render(
      <>
        <Button size="default">test-value</Button>
        <Button size="small">test-value</Button>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render as "Icon Button" when there are no children but there is an icon', () => {
    const { getByTestId } = render(<Button data-testid="test-id" icon={<span data-testid="test-icon"></span>} />);
    expect(getByTestId('test-id')).toMatchSnapshot();
  });
});
