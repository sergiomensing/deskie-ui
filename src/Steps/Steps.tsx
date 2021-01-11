import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type StepsProps = HTMLAttributes<HTMLDivElement> & {
  amount: number;
  current: number;
  onClick?: (index: number) => void;
};

const StyledSteps = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  user-select: none;

  &:after {
    content: '';
    width: calc(100% - 1.5rem);
    left: 0.75rem;
    height: 1px;
    background: ${(props) => props.theme.colors.inputBorder};
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
  }

  .step {
    cursor: default;
    font-size: ${(props) => props.theme.fontSizes.label};
    color: ${(props) => props.theme.colors.accent7};
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
    background: ${(props) => props.theme.colors.accent1};
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .step.done {
    cursor: pointer;
  }

  .step.current {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.labelInverted};
    font-weight: 600;
  }
`;

function Steps({ amount, current, className = '', onClick }: StepsProps) {
  return (
    <StyledSteps className={`steps ${className}`}>
      {Array.from(Array(amount)).map((_, i) => (
        <div
          onClick={() => onClick && onClick(i + 1)}
          className={`step ${current === i + 1 ? 'current' : ''} ${i < current ? 'done' : ''}`}
          key={i}
        >
          {i + 1}
        </div>
      ))}
    </StyledSteps>
  );
}

export default Steps;
