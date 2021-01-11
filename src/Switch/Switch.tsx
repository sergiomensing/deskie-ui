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
import styled, { css } from 'styled-components';

type BaseSwitchProps = {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};
export type SwitchProps = BaseSwitchProps & Omit<InputHTMLAttributes<unknown>, keyof BaseSwitchProps | 'type'>;

const StyledSwitch = styled.label<{ disabled: boolean; checked: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
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

  .switch {
    display: flex;
    align-items: center;
    position: relative;
  }

  .switch:before {
    content: '';
    width: 36px;
    height: 24px;
    margin-right: 0.75rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.disabled ? props.theme.colors.accent2 : props.theme.colors.accent3)};
    transition: 0.1s ease;
  }

  .switch:after {
    content: '';
    background-size: contain;
    background-position: center;
    width: 16px;
    height: 16px;
    left: 4px;
    top: 4px;
    position: absolute;
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 2rem;
    transition: 0.15s ease;
  }

  input:checked ~ .switch::before {
    background: ${(props) => (props.disabled ? props.theme.colors.accent2 : props.theme.colors.primary)};
  }

  input:checked ~ .switch::after {
    transform: translate3d(12px, 0, 0);
  }

  .switch-label {
    margin-top: 2px;
    white-space: nowrap;
  }

  ${(props) =>
    !props.disabled &&
    css`
      &:hover .switch::before {
        background: ${(props) => props.theme.colors.accent7};
      }
      &:hover input:checked ~ .switch::before {
        background-color: ${(props) => props.theme.colors.primaryHover};
      }

      input:focus-visible ~ .switch:before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.inputBorder};
      }
      input:checked:focus-visible ~ .switch::before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primaryHover};
      }
    `}
`;

const Switch = forwardRef<HTMLInputElement, PropsWithChildren<SwitchProps>>(
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

    const switchRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => switchRef.current);

    return (
      <StyledSwitch className={`switch-container ${className}`} disabled={disabled} checked={selfChecked}>
        <input
          type="checkbox"
          ref={switchRef}
          onChange={changeHandle}
          checked={selfChecked}
          disabled={disabled}
          {...rest}
        />
        <span className="switch"></span>
        {children && <span className="switch-label">{children}</span>}
      </StyledSwitch>
    );
  },
);

export default Switch;
