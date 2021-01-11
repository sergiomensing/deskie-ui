import { PropsWithChildren, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type RadioGroupProps = HTMLAttributes<unknown> & { direction?: 'vertical' | 'horizontal' };

const StyledRadioGroup = styled.div<{ horizontal: boolean }>`
  display: flex;

  ${(props) =>
    props.horizontal
      ? css`
          align-items: center;
          flex-wrap: wrap;
          margin: -0.5rem -0.75rem;

          & > * {
            padding: 0.5rem 0.75rem;
          }
        `
      : css`
          flex-direction: column;

          & > * + * {
            margin-top: 0.5rem;
          }
        `}
`;

function CheckboxGroup({
  children,
  direction = 'horizontal',
  className = '',
  ...rest
}: PropsWithChildren<RadioGroupProps>) {
  return (
    <StyledRadioGroup horizontal={direction === 'horizontal'} className={`radio-group ${className}`} {...rest}>
      {children}
    </StyledRadioGroup>
  );
}

export default CheckboxGroup;
