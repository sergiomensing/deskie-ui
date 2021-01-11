import React, { useState } from 'react';
import Select, { CustomSelectProps } from '../CustomSelect';
import { fireEvent, render } from '../../../tests/utils';

const options = [{ value: 'option1' }, { value: 'option2' }, { value: 'option3' }];

const Wrapper = ({
  value,
  ...rest
}: Omit<CustomSelectProps, 'value' | 'onChange' | 'options'> & { value?: string }) => {
  const [selected, setSelected] = useState<string | undefined>(() => value);
  return <Select value={selected} onChange={setSelected} options={options} {...rest} />;
};

describe('Custom Select', () => {
  it('should render', () => {
    const { getByText, container } = render(<Wrapper placeholder="test-value" />);
    expect(getByText('test-value')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show options', () => {
    const { getByText, container } = render(<Wrapper placeholder="test-value" />);
    expect(window.getComputedStyle(container.querySelector('.select-options')).opacity).toBe('0');
    fireEvent.click(getByText('test-value'));
    expect(window.getComputedStyle(container.querySelector('.select-options')).opacity).toBe('1');
  });

  it('should show value', () => {
    const { getByText } = render(<Wrapper value="test-value" />);
    expect(getByText('test-value')).toBeInTheDocument();
  });

  it('should change value', () => {
    const { getByText, container } = render(<Wrapper value="test-value" />);
    fireEvent.click(getByText('test-value'));
    fireEvent.click(getByText('option1'));
    expect(container.querySelector('.select-value').textContent).toBe('option1');
  });

  it('should not display options if disabled', () => {
    const { getByText, container } = render(<Wrapper value="test-value" disabled />);
    fireEvent.click(getByText('test-value'));
    expect(window.getComputedStyle(container.querySelector('.select-options')).opacity).toBe('0');
  });
});
