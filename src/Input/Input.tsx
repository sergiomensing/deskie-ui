import { ChangeEvent, forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';
import styled, { css } from 'styled-components';

export type InputStatus = 'default' | 'success' | 'warning' | 'error';

type BaseInputProps = {
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  status?: InputStatus;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export type InputProps = BaseInputProps & Omit<InputHTMLAttributes<unknown>, keyof BaseInputProps>;

const StyledInput = styled.div<{ icon: boolean; iconRight: boolean; disabled: boolean; status: InputStatus }>`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    display: flex;
    height: 3.5rem;
    padding: 0 0.75rem;
    font-weight: 400;
    font: inherit;
    border: 1px solid
      ${(props) => (props.status === 'default' ? props.theme.colors.accent8 : props.theme.colors[props.status])};
    border-radius: 0.5rem;
    box-shadow: none;
    background: ${(props) => props.theme.colors.background};
    -webkit-appearance: none;
    color: inherit;
    cursor: pointer;
    position: relative;
    z-index: 1;

    ${(props) => props.icon && `padding-left: 2.25rem;`};
    ${(props) => props.iconRight && `padding-right: 2.25rem;`};

    ${(props) =>
      props.disabled &&
      css`
        cursor: not-allowed;
        border: 1px solid ${props.theme.colors.accent6};
        color: ${props.theme.colors.accent7};
      `}

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.primary};
      outline: 0;
    }
  }

  .input-icon {
    position: absolute;
    z-index: 2;
    width: 1.25rem;
    left: 0.75rem;

    svg {
      width: 100%;
      height: auto;
    }
  }

  .input-icon-right {
    left: initial;
    right: 0.75rem;
  }
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { disabled = false, icon, iconRight, status = 'default', className = '', ...rest },
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current);

    return (
      <StyledInput
        className={`input-container ${className}`}
        disabled={disabled}
        icon={Boolean(icon)}
        status={status}
        iconRight={Boolean(iconRight)}
      >
        {icon && <span className="input-icon">{icon}</span>}
        <input ref={inputRef} disabled={disabled} {...rest} />
        {iconRight && <span className="input-icon input-icon-right">{iconRight}</span>}
      </StyledInput>
    );
  },
);

export default Input;
