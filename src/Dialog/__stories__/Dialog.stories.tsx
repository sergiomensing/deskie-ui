import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dialog, { DialogProps } from '../Dialog';
import { Button } from '../../Button';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<DialogProps & { children?: ReactNode }> = ({ open, onClose, children, ...args }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        {children ? children : 'Content'}
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'This is a dialog',
};

export const WithSingleAction = Template.bind({});
WithSingleAction.args = {
  title: 'This is a dialog',
  actions: [
    {
      label: 'Opslaan',
      onClick: () => console.log('Clicked'),
    },
  ],
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'This is a dialog',
  actions: [
    {
      label: 'Cancel',
      appearance: 'secondary',
      onClick: () => console.log('Clicked'),
    },
    {
      label: 'Opslaan',
      onClick: () => console.log('Clicked'),
    },
  ],
};

export const WithOverflowingContent = Template.bind({});
WithOverflowingContent.args = {
  title: 'This is a dialog',
  children: (
    <>
      <div style={{ height: 400, background: 'red' }} />
      <div style={{ height: 400, background: 'green' }} />
      <div style={{ height: 400, background: 'yellow' }} />
    </>
  ),
  actions: [
    {
      label: 'Opslaan',
      onClick: () => console.log('Clicked'),
    },
  ],
};
