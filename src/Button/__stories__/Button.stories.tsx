import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BatteryAlert } from '@styled-icons/material-outlined';

import Button, { ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps & { label: string }> = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const TemplateWithoutChildren: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'default',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'secondary',
  label: 'Secondary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: 'danger',
  label: 'Danger Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  appearance: 'default',
  disabled: true,
  label: 'Disabled Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <BatteryAlert />,
  label: 'Button with icon',
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  iconRight: <BatteryAlert />,
  label: 'Button with icon',
};

export const IconOnly = TemplateWithoutChildren.bind({});
IconOnly.args = {
  icon: <BatteryAlert />,
};
