import {
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import CheckboxGroup from './CheckboxGroup';
import styled, { css } from 'styled-components';

type BaseCheckboxProps = {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CheckboxProps = BaseCheckboxProps & Omit<InputHTMLAttributes<unknown>, keyof BaseCheckboxProps | 'type'>;

const StyledCheckbox = styled.label<{ disabled: boolean; checked: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: flex-start;
  user-select: none;
  color: ${(props) => (props.disabled ? props.theme.colors.disabledText : props.theme.colors.label)};

  input[type='checkbox'] {
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
    background-color: transparent;
  }

  .checkbox-icon {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  .checkbox-icon:before {
    content: '';
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.border)};
    transition: 0.1s ease;
  }

  .checkbox-icon:after {
    content: '';
    opacity: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath fill='%23ffffff' d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    position: absolute;
    border: 2px solid transparent;
  }

  .checkbox-label {
    margin-top: 2px;
    white-space: nowrap;
  }

  input:checked ~ .checkbox-icon::before {
    background-color: ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.primary)};
    border-color: ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.primary)};
  }

  ${(props) =>
    !props.disabled &&
    css`
      &:hover .checkbox-icon::before {
        border-color: ${(props) => props.theme.colors.inputBorder};
      }
      &:hover input:checked ~ .checkbox-icon::before {
        background-color: ${(props) => props.theme.colors.primaryHover};
        border-color: ${(props) => props.theme.colors.primaryHover};
      }

      input:focus-visible ~ .checkbox-icon:before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.inputBorder};
      }
      input:checked:focus-visible ~ .checkbox-icon::before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primaryHover};
      }
    `}

  input:checked ~ .checkbox-icon::after {
    opacity: 1;
  }
`;

const Checkbox = forwardRef<HTMLInputElement, PropsWithChildren<CheckboxProps>>(
  (
    { disabled = false, checked, defaultChecked, children, onChange, className = '', ...rest },
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const [selfChecked, setSelfChecked] = useState<boolean>(() => defaultChecked || false);

    const changeHandle = useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
          return;
        }

        setSelfChecked(!selfChecked);

        if (onChange) {
          const event: React.ChangeEvent<HTMLInputElement> = { ...ev, target: { ...ev.target, checked: !selfChecked } };
          onChange(event);
        }
      },
      [onChange, disabled, selfChecked],
    );

    useEffect(() => {
      if (checked === undefined) {
        return;
      }
      setSelfChecked(Boolean(checked));
    }, [checked]);

    const checkboxRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => checkboxRef.current);

    return (
      <StyledCheckbox className={`checkbox-container ${className}`} disabled={disabled} checked={selfChecked}>
        <input
          type="checkbox"
          ref={checkboxRef}
          onChange={changeHandle}
          checked={selfChecked}
          disabled={disabled}
          {...rest}
        />
        <span className="checkbox-icon"></span>
        {children && <span className="checkbox-label">{children}</span>}
      </StyledCheckbox>
    );
  },
);

export default Checkbox as typeof Checkbox & { Group: typeof CheckboxGroup };
