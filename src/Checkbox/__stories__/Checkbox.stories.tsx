import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '../Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<CheckboxProps & { label: ReactNode; disabled: boolean }> = ({
  label,
  defaultChecked,
  ...args
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked || false);
  return (
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} {...args}>
      {label}
    </Checkbox>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Checkbox',
  disabled: true,
  defaultChecked: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: <span style={{ fontFamily: 'Comic Sans MS', color: 'red' }}>With a custom label</span>,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
