import React from 'react';
import Switch from '../Switch';
import { fireEvent, render } from '../../../tests/utils';

describe('Switch', () => {
  it('should render correctly', () => {
    const { container } = render(<Switch checked={true}>test-value</Switch>);
    expect(container).toMatchSnapshot();
  });

  it('should work correctly with initial value', () => {
    const { container, rerender } = render(<Switch checked={true}>test-value</Switch>);
    expect(container.querySelector('input')?.checked).toBeTruthy();
    rerender(<Switch checked={false}>test-value</Switch>);
    expect(container.querySelector('input')?.checked).not.toBeTruthy();
  });

  it('should change value after click', () => {
    const Wrapper = () => {
      const [state, setState] = React.useState<string>('test-value1');

      return (
        <Switch data-testid="checkbox" defaultChecked onChange={() => setState('test-value2')}>
          {state}
        </Switch>
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
        <Switch data-testid="checkbox" disabled onChange={() => setState('test-value2')}>
          {state}
        </Switch>
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
      <Switch data-testid="checkbox" checked={true} ref={ref}>
        action
      </Switch>,
    );

    expect(container.querySelector('input')).toEqual(ref.current);
  });
});
