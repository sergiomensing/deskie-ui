import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Flow, { FlowProps } from '../Flow';

function Block({ background }: { background: string }) {
  return <div style={{ width: '100px', height: '100px', background }}></div>;
}

export default {
  title: 'Components/Flow',
  component: Flow,
} as Meta;

const Template: Story<FlowProps> = ({ ...args }) => (
  <Flow {...args}>
    <Block background="green" />
    <Block background="yellow" />
    <Block background="blue" />
    <Block background="red" />
  </Flow>
);

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
};

export const WithGap = Template.bind({});
WithGap.args = {
  direction: 'row',
  gap: '100px',
};
