import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Steps, { StepsProps } from '../Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
  argTypes: {
    amount: { control: { type: 'range', min: 2, max: 5, step: 1 } },
    current: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<StepsProps> = (args) => {
  const [current, setCurrent] = useState(1);
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', background: '#f7f7fd' }}>
      <div style={{ width: '100%', maxWidth: '320px' }}>
        <Steps current={current} onClick={(i) => setCurrent(i)} {...args} />
        <button style={{ marginTop: '1rem' }} onClick={() => setCurrent(current + 1)}>
          next
        </button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  amount: 3,
};
