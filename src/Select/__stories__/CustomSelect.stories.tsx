import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search } from '@styled-icons/material-outlined';
import Select, { CustomSelectProps } from '../CustomSelect';

export default {
  title: 'Components/Form/Custom Select',
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

const options = [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }];

const Template: Story<CustomSelectProps> = ({ ...args }) => {
  const [selected, setSelected] = useState<string>(undefined);
  return (
    <div style={{ minHeight: '400px', padding: '2rem' }}>
      <Select {...args} value={selected} onChange={(value) => setSelected(value)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder...',
  options: options,
};

export const ErrorStatus = Template.bind({});
ErrorStatus.args = {
  placeholder: 'This is a field with an error status',
  status: 'error',
  options: options,
};

export const Searchable = Template.bind({});
Searchable.args = {
  placeholder: 'This is a field with an error status',
  options: options,
  searchable: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'This is a placeholder',
  icon: <Search />,
  options: options,
};
