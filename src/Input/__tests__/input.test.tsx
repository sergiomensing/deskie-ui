import React from 'react';
import Input from '../Input';
import { fireEvent, render } from '../../../tests/utils';

describe('Input', () => {
  it('should support different statuses', () => {
    const { container } = render(
      <>
        <Input status="default" />
        <Input status="error" />
        <Input status="success" />
        <Input status="warning" />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render icons', () => {
    const { getByTestId, container } = render(
      <>
        <Input icon={<span data-testid="test-icon"></span>} />
        <Input iconRight={<span data-testid="test-icon-right"></span>} />
      </>,
    );

    expect(getByTestId('test-icon')).toBeInTheDocument();
    expect(getByTestId('test-icon-right')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should trigger event when input changed', () => {
    const Wrapper = () => {
      const [state, setState] = React.useState<string>('test-value1');

      return <Input data-testid="test-input" value={state} onChange={(e) => setState(e.target.value)} />;
    };

    const { getByTestId } = render(<Wrapper />);

    const input = getByTestId('test-input');

    expect(input).toHaveValue('test-value1');

    fireEvent.change(input, { target: { value: 'test-value2' } });

    expect(input).toHaveValue('test-value2');
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(<Input readOnly value="test-value" ref={ref} />);
    expect(container.querySelector('input')).toEqual(ref.current);
  });
});
