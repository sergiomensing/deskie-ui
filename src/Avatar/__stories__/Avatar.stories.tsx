import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from '../Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    hasImage: { control: 'boolean' },
    src: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const src = 'https://randomuser.me/api/portraits/men/85.jpg';

const Template: Story<AvatarProps & { hasImage: boolean }> = ({ hasImage, ...args }) => (
  <Avatar src={hasImage ? src : undefined} {...args} />
);

export const WithImage = Template.bind({});
WithImage.args = {
  text: 'John Doe',
  hasImage: true,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  text: 'John Doe',
};

export const WithText = Template.bind({});
WithText.args = {
  text: 'John Doe',
  showLabel: true,
};

export const CurrentUser = Template.bind({});
CurrentUser.args = {
  text: 'John Doe',
  showLabel: true,
  isCurrentUser: true,
};

export const WithSubText = Template.bind({});
WithSubText.args = {
  text: 'John Doe',
  showLabel: true,
  subText: '3 credits',
};
