import React from 'react';
import Dialog from '../Dialog';
import { fireEvent, render } from '../../../tests/utils';

describe('Dialog', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Dialog open={true} title="test-value-title" actions={[{ label: 'save', onClick: () => console.log('save') }]}>
        test-value
      </Dialog>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should close on click backdrop click', () => {
    const closeHandler = jest.fn();
    const { container } = render(
      <Dialog open={true} onClose={closeHandler} title="test-value-title">
        test-value
      </Dialog>,
    );

    fireEvent.click(container.querySelector('.dialog-underlay'));

    expect(closeHandler).toHaveBeenCalledTimes(1);
  });

  it('should show and trigger actions', () => {
    const actionHandler = jest.fn();

    const { getByText } = render(
      <Dialog open={true} showHeader={false} actions={[{ label: 'test-value-action', onClick: actionHandler }]}>
        test-value
      </Dialog>,
    );

    fireEvent.click(getByText('test-value-action'));
    expect(actionHandler).toHaveBeenCalledTimes(1);
  });

  it('should not render footer if no actions are defined', () => {
    const { container } = render(<Dialog open={true}>test-value</Dialog>);

    expect(container.querySelector('.dialog-footer')).not.toBeInTheDocument();
  });

  it('should not render header if showHeader equals false', () => {
    const { container } = render(
      <Dialog open={true} showHeader={false}>
        test-value
      </Dialog>,
    );

    expect(container.querySelector('.dialog-header')).not.toBeInTheDocument();
  });
});
