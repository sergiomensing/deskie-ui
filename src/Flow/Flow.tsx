import { PropsWithChildren, CSSProperties, HTMLAttributes } from 'react';
import styled from 'styled-components';

type FlowDirection = 'row' | 'column';

export type FlowProps = HTMLAttributes<HTMLDivElement> & {
  direction?: FlowDirection;
  gap?: number | string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
};

type StyledFlowProps = {
  direction: FlowDirection;
  gap: string;
  justify: CSSProperties['justifyContent'];
  align: CSSProperties['alignItems'];
};

const StyledFlow = styled.div<StyledFlowProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};

  & > * + * {
    ${(props) => (props.direction === 'column' ? `margin-top: ${props.gap};` : `margin-left: ${props.gap};`)}
  }
`;

function Flow({
  children,
  direction = 'column',
  gap = '1rem',
  justify = 'flex-start',
  align = 'flex-start',
  className = '',
}: PropsWithChildren<FlowProps>) {
  return (
    <StyledFlow
      className={`flow ${className}`}
      justify={justify}
      align={align}
      direction={direction}
      gap={typeof gap === 'number' ? `${gap.toString()}px` : gap}
    >
      {children}
    </StyledFlow>
  );
}

export default Flow;
