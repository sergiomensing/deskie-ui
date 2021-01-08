import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Capacity, { CapacityProps } from '../Capacity';

export default {
  title: 'Components/Capacity',
  component: Capacity,
  argTypes: {
    label: { control: 'text' },
    capacity: { control: 'range', min: 0, max: 100, step: 10 },
  },
} as Meta;

const Template: Story<CapacityProps & { label: string }> = ({ label, ...args }) => (
  <Capacity {...args}>{label}</Capacity>
);
const TemplateWithoutLabel: Story<CapacityProps> = (args) => <Capacity {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: '2 / 5',
  capacity: 40,
};

export const WithoutLabel = TemplateWithoutLabel.bind({});
WithoutLabel.args = {
  capacity: 0,
};

export const Large = Template.bind({});
Large.args = {
  capacity: 80,
  label: '80%',
  size: 'large',
};
