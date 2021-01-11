import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Switch, { SwitchProps } from '../Switch';

export default {
  title: 'Components/Form/Switch',
  component: Switch,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<SwitchProps & { label: ReactNode; disabled: boolean }> = ({ label, defaultChecked, ...args }) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked || false);
  return (
    <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} {...args}>
      {label}
    </Switch>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Switch',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Switch',
  disabled: true,
  defaultChecked: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: <span style={{ fontFamily: 'Comic Sans MS', color: 'red' }}>With a custom label</span>,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
