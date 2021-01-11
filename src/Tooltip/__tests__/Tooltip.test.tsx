import React from 'react';
import Tooltip from '../Tooltip';
import { fireEvent, render, act, waitFor } from '../../../tests/utils';

const renderTooltip = async () => {
  let result;
  await act(async () => {
    result = await render(
      <Tooltip content="test-value">
        <span>test-value-target</span>
      </Tooltip>,
    );
  });
  return result;
};

describe('Tooltip', () => {
  it('should render', async () => {
    const { getByText, container } = await renderTooltip();

    await waitFor(() => {
      expect(getByText('test-value')).toBeInTheDocument();
      expect(getByText('test-value-target')).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });
  });

  it('should appear on hover target element', async () => {
    const { getByText, container } = await renderTooltip();

    await waitFor(() => {
      expect(window.getComputedStyle(container.querySelector('.tooltip')).opacity).toBe('0');
    });

    act(() => {
      fireEvent.mouseEnter(getByText('test-value-target'));
    });

    await waitFor(() => {
      expect(window.getComputedStyle(container.querySelector('.tooltip')).opacity).toBe('1');
    });
  });
});
