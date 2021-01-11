import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from '../Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<TextProps & { text: string }> = ({ text, ...args }) => <Text {...args}>{text}</Text>;

const text = 'The evil rabbit jumps over the fence.';

export const Default = Template.bind({});
Default.args = {
  text: text,
};

export const Appearances = () => (
  <>
    <Text appearance="default" p>
      {text} (default)
    </Text>
    <Text appearance="secondary" p>
      {text} (secondary)
    </Text>
    <Text appearance="faded" p>
      {text} (faded)
    </Text>
    <Text appearance="success" p>
      {text} (success)
    </Text>
    <Text appearance="warning" p>
      {text} (warning)
    </Text>
    <Text appearance="error" p>
      {text} (error)
    </Text>
  </>
);

export const Headings = () => (
  <div style={{ display: 'grid', gap: '1rem' }}>
    <Text h1>{text} (h1)</Text>
    <Text h2>{text} (h2)</Text>
    <Text h3>{text} (h3)</Text>
  </div>
);

export const Styles = () => (
  <div style={{ display: 'grid', gap: '1rem' }}>
    <Text b>{text} (b)</Text>
    <Text small>{text} (small)</Text>
    <Text p>{text} (p)</Text>
  </div>
);
