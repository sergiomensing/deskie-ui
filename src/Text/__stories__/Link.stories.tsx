import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Link, { LinkProps } from '../Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<LinkProps & { text: string }> = ({ text, ...args }) => (
  <Link href="#" {...args}>
    {text}
  </Link>
);

const text = 'This is a link';

export const Default = Template.bind({});
Default.args = {
  text: text,
};
