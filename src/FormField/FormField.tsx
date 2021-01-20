import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Flow } from '../Flow';
import { Text } from '../Text';
import { TextProps } from '../Text/Text';

export type FormFieldProps = HTMLAttributes<unknown> & {
  label?: string;
  hint?: string;
  validationMessage?: string;
  validationMessageStatus?: TextProps['appearance'];
};

const StyledFormField = styled(Flow)`
  width: 100%;
`;

function FormField({
  label,
  hint,
  validationMessage,
  validationMessageStatus,
  children,
  className = '',
  ...rest
}: PropsWithChildren<FormFieldProps>) {
  return (
    <StyledFormField gap="0.5rem" className={`formField ${className}`} {...rest}>
      {label && (
        <Text small appearance="secondary" className="formField-label" as="label">
          {label}
        </Text>
      )}
      {hint && (
        <Text small className="formField-hint" as="span">
          {hint}
        </Text>
      )}
      {children}
      {validationMessage && (
        <Text small className="formField-message" appearance={validationMessageStatus || 'error'}>
          {validationMessage}
        </Text>
      )}
    </StyledFormField>
  );
}

export default FormField;
