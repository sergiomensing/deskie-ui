import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Radio from '../Radio';
import { RadioGroupProps } from '../RadioGroup';

export default {
  title: 'Components/Form/Radio Group',
  component: Radio.Group,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RadioGroupProps & { disabled: boolean }> = ({ disabled, ...args }) => {
  const [checked, setChecked] = useState<{ 1: boolean; 2: boolean; 3: boolean }>({ 1: false, 2: false, 3: false });
  return (
    <Radio.Group {...args}>
      {[0, 1, 2].map((index) => (
        <Radio
          key={index}
          name="radios"
          disabled={disabled}
          checked={checked[index]}
          onChange={(e) => {
            setChecked({ ...checked, [index]: !checked[index] });
          }}
        >
          Radio {index}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export const Default = Template.bind({});
Default.args = {};
