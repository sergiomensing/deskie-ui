import React from 'react';
import Select from '../Select';
import { fireEvent, render } from '../../../tests/utils';

describe('Select', () => {
  it('should support different statuses', () => {
    const { container } = render(
      <>
        <Select status="default" />
        <Select status="error" />
        <Select status="success" />
        <Select status="warning" />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render icon', () => {
    const { getByTestId, container } = render(<Select icon={<span data-testid="test-icon"></span>} />);

    expect(getByTestId('test-icon')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should trigger event when input changed', () => {
    const Wrapper = () => {
      const [state, setState] = React.useState<string>('test-value1');

      return (
        <Select data-testid="test-input" value={state} onChange={(e) => setState(e.target.value)}>
          <option>test-value1</option>
          <option>test-value2</option>
        </Select>
      );
    };

    const { getByTestId } = render(<Wrapper />);

    const input = getByTestId('test-input');

    expect(input).toHaveValue('test-value1');

    fireEvent.change(input, { target: { value: 'test-value2' } });

    expect(input).toHaveValue('test-value2');
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLSelectElement>();
    const { container } = render(<Select status="default" ref={ref} />);
    expect(container.querySelector('select')).toEqual(ref.current);
  });
});
