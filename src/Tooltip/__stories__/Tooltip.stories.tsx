import React, { ReactNode, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tooltip, { TooltipProps } from '../Tooltip';
import { Avatar } from '../../Avatar';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<TooltipProps & { text: ReactNode }> = ({ text, ...args }) => (
  <div style={{ display: 'flex', padding: '2rem', justifyContent: 'center' }}>
    <Tooltip content={text} {...args}>
      <span>The target element</span>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'A Tooltip',
};

export const Position = () => (
  <div style={{ display: 'grid', gap: '2rem', padding: '2rem', justifyItems: 'center' }}>
    <Tooltip content="A Tooltip" placement="top">
      <span>The target element</span>
    </Tooltip>
    <Tooltip content="A Tooltip" placement="right">
      <span>The target element</span>
    </Tooltip>
    <Tooltip content="A Tooltip" placement="left">
      <span>The target element</span>
    </Tooltip>
    <Tooltip content="A Tooltip" placement="bottom">
      <span>The target element</span>
    </Tooltip>
  </div>
);

export const ExampleOnAvatar = () => (
  <div style={{ display: 'flex', padding: '2rem', justifyContent: 'center' }}>
    <Tooltip content="Ben Romijn" placement="top">
      <span>
        <Avatar text="Ben Romijn" />
      </span>
    </Tooltip>
  </div>
);
