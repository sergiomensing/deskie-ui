import { forwardRef, PropsWithChildren, SelectHTMLAttributes, useImperativeHandle, useRef } from 'react';
import styled, { css } from 'styled-components';
import { KeyboardArrowDown } from '@styled-icons/material-outlined';
type SelectStatus = 'default' | 'success' | 'warning' | 'error';

type BaseSelectProps = {
  icon?: React.ReactNode;
  status?: SelectStatus;
};

type SelectProps = BaseSelectProps & Omit<SelectHTMLAttributes<unknown>, keyof BaseSelectProps>;

const StyledSelect = styled.div<{ icon: boolean; disabled: boolean; status: SelectStatus }>`
  display: flex;
  align-items: center;
  position: relative;

  select {
    width: 100%;
    display: flex;
    height: 3.5rem;
    padding: 0 0.75rem;
    font: inherit;
    border: 1px solid
      ${(props) => (props.status === 'default' ? props.theme.colors.inputBorder : props.theme.colors[props.status])};
    border-radius: 0.5rem;
    box-shadow: none;
    background: ${(props) => props.theme.colors.inputBackground};
    -webkit-appearance: none;
    color: inherit;
    cursor: pointer;
    position: relative;
    z-index: 1;

    ${(props) => props.icon && `padding-left: 2.25rem;`};
    padding-right: 2.25rem;

    ${(props) =>
      props.disabled &&
      css`
        cursor: not-allowed;
        border: 1px solid ${props.theme.colors.border};
        color: ${props.theme.colors.disabledText};
      `}

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.primary};
      outline: 0;
    }
  }

  .select-icon {
    position: absolute;
    z-index: 2;
    width: 1.25rem;
    left: 0.75rem;

    svg {
      width: 100%;
      height: auto;
    }
  }

  .select-arrow {
    left: initial;
    right: 0.75rem;
  }
`;

const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>(
  (
    { disabled = false, icon, status = 'default', children, className = '', ...rest },
    ref: React.Ref<HTMLSelectElement | null>,
  ) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    useImperativeHandle(ref, () => selectRef.current);

    return (
      <StyledSelect
        className={`select-container ${className}`}
        disabled={disabled}
        icon={Boolean(icon)}
        status={status}
      >
        {icon && <span className="select-icon">{icon}</span>}
        <select ref={selectRef} disabled={disabled} {...rest}>
          {children}
        </select>
        <span className="select-icon select-arrow">
          <KeyboardArrowDown />
        </span>
      </StyledSelect>
    );
  },
);

export default Select;
