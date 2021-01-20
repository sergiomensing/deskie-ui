import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FormField, { FormFieldProps } from '../FormField';
import { Input } from '../../Input';

export default {
  title: 'Components/Form/Field',
  component: FormField,
} as Meta;

const Template: Story<FormFieldProps> = ({ ...args }) => (
  <FormField {...args}>
    <Input placeholder="This is a placeholder" />
  </FormField>
);

export const Default = Template.bind({});
Default.args = {
  label: 'A Label',
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'A Label',
  hint: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
};

export const WithValidationMessage = Template.bind({});
WithValidationMessage.args = {
  label: 'A Label',
  validationMessage: 'Lorem ipsum dolor sit amet.',
};

export const WithValidationMessageCustomStatus = Template.bind({});
WithValidationMessageCustomStatus.args = {
  label: 'A Label',
  validationMessage: 'Lorem ipsum dolor sit amet.',
  validationMessageStatus: 'success',
};
