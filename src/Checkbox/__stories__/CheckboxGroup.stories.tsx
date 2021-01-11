import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from '../Checkbox';
import { CheckboxGroupProps } from '../CheckboxGroup';

export default {
  title: 'Components/Form/Checkbox Group',
  component: Checkbox.Group,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<CheckboxGroupProps & { disabled: boolean }> = ({ disabled, ...args }) => {
  const [checked, setChecked] = useState<{ 1: boolean; 2: boolean; 3: boolean }>({ 1: false, 2: false, 3: false });
  return (
    <Checkbox.Group {...args}>
      {[0, 1, 2].map((index) => (
        <Checkbox
          key={index}
          disabled={disabled}
          checked={checked[index]}
          onChange={(e) => {
            setChecked({ ...checked, [index]: e.target.value });
          }}
        >
          Checkbox {index}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export const Default = Template.bind({});
Default.args = {};
