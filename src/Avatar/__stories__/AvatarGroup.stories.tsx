import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar from '../Avatar';
import { AvatarGroupProps } from '../AvatarGroup';

export default {
  title: 'Components/Avatar Group',
  component: Avatar.Group,
  argTypes: {
    showLabel: { control: 'boolean' },
  },
} as Meta;

const names = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn'];

const Template: Story<AvatarGroupProps & { showLabel: boolean }> = ({ showLabel, ...args }) => (
  <Avatar.Group {...args}>
    {names.map((name, index) => (
      <Avatar showLabel={showLabel} key={index} text={name} />
    ))}
  </Avatar.Group>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
  showLabel: true,
};

export const Limited = Template.bind({});
Limited.args = {
  direction: 'horizontal',
  count: 3,
};
