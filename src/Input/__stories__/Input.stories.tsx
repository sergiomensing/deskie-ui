import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search, BatteryAlert } from '@styled-icons/material-outlined';
import Input, { InputProps } from '../Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    status: {
      control: {
        type: 'inline-radio',
        options: ['default', 'error', 'warning', 'success'],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = ({ value, ...args }) => {
  const [state, setState] = useState<typeof value>(value || '');
  return <Input value={state} onChange={(e) => setState(e.target.value)} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is a placeholder',
};

export const ErrorStatus = Template.bind({});
ErrorStatus.args = {
  value: 'This is a field with an error status',
  status: 'error',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'This is a placeholder',
  icon: <Search />,
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  placeholder: 'This is a placeholder',
  iconRight: <BatteryAlert />,
};
