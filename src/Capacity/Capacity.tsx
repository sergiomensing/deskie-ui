import { HTMLAttributes, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../index';

type CapacitySize = 'default' | 'large';
type CapacityProps = HTMLAttributes<unknown> & {
  size?: CapacitySize;
  capacity: number;
};

const StyledCapacity = styled.div<{ labelInside: boolean }>`
  display: flex;
  align-items: center;

  .capacity-label {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }

  ${(props) =>
    props.labelInside &&
    css`
      position: relative;
      justify-content: center;

      .capacity-label {
        position: absolute;
        margin: 0;
        text-align: center;
      }
    `}
`;

function getStokeColor(capacity: number) {
  if (capacity === 100) {
    return '#ff754c';
  }
  if (capacity >= 80) {
    return '#ffce73';
  }

  return '#7fba7a';
}

function getSize(size: CapacitySize) {
  if (size === 'large') {
    return { stroke: 4, radius: 24 };
  }
  return { stroke: 4, radius: 14 };
}

function Capacity({ children, capacity, size = 'default' }: PropsWithChildren<CapacityProps>) {
  const _capacity = capacity > 100 ? 100 : capacity;
  const { radius, stroke } = getSize(size);
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (_capacity / 100) * circumference;

  return (
    <StyledCapacity labelInside={size === 'large'} className="capacity">
      {children && (
        <Text className="capacity-label" small appearance={size === 'large' ? 'default' : 'faded'}>
          {children}
        </Text>
      )}
      <svg className="capacity-ring" height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)' }}>
        <circle stroke="#eeeeee" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke={getStokeColor(_capacity)}
          strokeLinecap="round"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </StyledCapacity>
  );
}

export default Capacity;
