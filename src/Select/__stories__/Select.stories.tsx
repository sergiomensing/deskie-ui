import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search } from '@styled-icons/material-outlined';
import Select, { SelectProps } from '../Select';

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    useNative: { table: { disable: true } },
    status: {
      control: {
        type: 'inline-radio',
        options: ['default', 'error', 'warning', 'success'],
      },
    },
  },
} as Meta;

const Template: Story<SelectProps> = ({ value, ...args }) => {
  const [state, setState] = useState<typeof value>(value || '');
  return (
    <Select value={state} onChange={(e) => setState(e.target.value)} {...args}>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  );
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
