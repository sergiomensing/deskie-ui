import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { Check } from '@styled-icons/material-outlined';

type ChipProps = Omit<ButtonHTMLAttributes<unknown>, 'type'> & {
  hasIcon?: boolean;
  icon?: ReactNode;
  selected?: boolean;
};

const StyledChip = styled.button<{ selected: boolean }>`
  font: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  box-shadow: 0;
  border-radius: 0.75rem;
  color: ${(props) => (props.selected ? props.theme.colors.background : props.theme.colors.foreground)};
  border: 2px solid ${(props) => (props.selected ? props.theme.colors.foreground : props.theme.colors.border)};
  background: ${(props) => (props.selected ? props.theme.colors.foreground : 'transparent')};
  -webkit-appearance: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.15s ease;
  white-space: nowrap;

  .chip-icon {
    width: 1.25rem;
    margin-right: 0.25rem;
    margin-left: -0.25rem;

    svg {
      width: 100%;
      height: auto;
    }
  }

  &:hover {
    border-color: ${(props) => (props.selected ? props.theme.colors.accent9 : props.theme.colors.accent7)};
    background: ${(props) => (props.selected ? props.theme.colors.accent9 : 'transparent')};
  }
`;

function Chip({
  children,
  icon,
  hasIcon = false,
  selected = false,
  className = '',
  ...rest
}: PropsWithChildren<ChipProps>) {
  return (
    <StyledChip type="button" className={`chip ${className}`} selected={selected} {...rest}>
      {hasIcon && <span className="chip-icon">{icon ? icon : <Check />}</span>}
      {children}
    </StyledChip>
  );
}

export default Chip;
