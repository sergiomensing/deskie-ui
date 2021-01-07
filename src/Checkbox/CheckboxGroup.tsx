import { PropsWithChildren, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type CheckboxGroupProps = HTMLAttributes<unknown> & { direction?: 'vertical' | 'horizontal' };

const StyledCheckboxGroup = styled.div<{ horizontal: boolean }>`
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
}: PropsWithChildren<CheckboxGroupProps>) {
  return (
    <StyledCheckboxGroup horizontal={direction === 'horizontal'} className={`checkbox-group ${className}`} {...rest}>
      {children}
    </StyledCheckboxGroup>
  );
}

export default CheckboxGroup;
