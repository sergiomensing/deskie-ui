import React from 'react';
import Checkbox from '../Checkbox';
import { fireEvent, render } from '../../../tests/utils';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox checked={true}>test-value</Checkbox>);
    expect(container).toMatchSnapshot();
  });

  it('should work correctly with initial value', () => {
    const { container, rerender } = render(<Checkbox checked={true}>test-value</Checkbox>);
    expect(container.querySelector('input')?.checked).toBeTruthy();
    rerender(<Checkbox checked={false}>test-value</Checkbox>);
    expect(container.querySelector('input')?.checked).not.toBeTruthy();
  });

  it('should change value after click', () => {
    const Wrapper = () => {
      const [state, setState] = React.useState<string>('test-value1');

      return (
        <Checkbox data-testid="checkbox" defaultChecked onChange={() => setState('test-value2')}>
          {state}
        </Checkbox>
      );
    };

    const { getByTestId, getAllByText, queryAllByText } = render(<Wrapper />);

    expect(getAllByText('test-value1').length).toBe(1);

    fireEvent.click(getByTestId('checkbox'));

    expect(getAllByText('test-value2').length).toBe(1);
    expect(queryAllByText('test-value1').length).toBe(0);
  });

  it('should ignore events when disabled', () => {
    const Wrapper = () => {
      const [state, setState] = React.useState<string>('test-value1');

      return (
        <Checkbox data-testid="checkbox" disabled onChange={() => setState('test-value2')}>
          {state}
        </Checkbox>
      );
    };
    const { getByTestId, getByText, queryByText } = render(<Wrapper />);

    expect(getByText('test-value1')).toBeInTheDocument();

    fireEvent.click(getByTestId('checkbox'));

    expect(queryByText('test-value2')).toBe(null);
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <Checkbox data-testid="checkbox" checked={true} ref={ref}>
        action
      </Checkbox>,
    );

    expect(container.querySelector('input')).toEqual(ref.current);
  });
});
