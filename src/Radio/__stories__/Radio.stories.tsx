import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { RadioProps } from '../Radio';

export default {
  title: 'Components/Form/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RadioProps & { label: ReactNode }> = ({ label, defaultChecked, ...args }) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked || false);
  return (
    <Radio checked={checked} onChange={() => setChecked(!checked)} {...args}>
      {label}
    </Radio>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Radio',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Radio disabled',
  disabled: true,
  defaultChecked: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: <span style={{ fontFamily: 'Comic Sans MS', color: 'red' }}>With a custom label</span>,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
