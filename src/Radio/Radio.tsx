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
import RadioGroup from './RadioGroup';
import styled, { css } from 'styled-components';

type BaseRadioProps = {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

type RadioProps = BaseRadioProps & Omit<InputHTMLAttributes<unknown>, keyof BaseRadioProps | 'type'>;

const StyledRadio = styled.label<{ disabled: boolean; checked: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: flex-start;
  user-select: none;
  color: ${(props) => (props.disabled ? props.theme.colors.disabledText : props.theme.colors.label)};

  input[type='radio'] {
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

  .radio-icon {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    position: relative;
  }

  .radio-icon:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.border)};
    transition: 0.1s ease;
  }

  .radio-icon:after {
    content: '';
    opacity: 0;
    background-color: ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.primary)};

    width: 10px;
    height: 10px;
    border-radius: 5px;
    left: 5px;
    position: absolute;
    border: 2px solid transparent;
  }

  .radio-label {
    margin-top: 2px;
    white-space: nowrap;
  }

  input:checked ~ .radio-icon::before {
    border-color: ${(props) => (props.disabled ? props.theme.colors.disabled : props.theme.colors.primary)};
  }

  input:checked ~ .radio-icon::after {
    opacity: 1;
  }

  ${(props) =>
    !props.disabled &&
    css`
      &:hover .radio-icon::before {
        border-color: ${(props) => props.theme.colors.inputBorder};
      }
      &:hover input:checked ~ .radio-icon::before {
        border-color: ${(props) => props.theme.colors.primaryHover};
      }

      input:focus-visible ~ .radio-icon:before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.inputBorder};
      }
      input:checked:focus-visible ~ .radio-icon::before {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primaryHover};
      }
    `}

  input:checked ~ .radio-icon::after {
    opacity: 1;
  }
`;

const Radio = forwardRef<HTMLInputElement, PropsWithChildren<RadioProps>>(
  (
    { disabled = false, checked, value, defaultChecked, children, onChange, className = '', ...rest },
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

    const radioRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => radioRef.current);

    return (
      <StyledRadio className={`radio-container ${className}`} disabled={disabled} checked={selfChecked}>
        <input
          value={value}
          type="radio"
          ref={radioRef}
          onChange={changeHandle}
          checked={selfChecked}
          disabled={disabled}
          {...rest}
        />
        <span className="radio-icon"></span>
        {children && <span className="radio-label">{children}</span>}
      </StyledRadio>
    );
  },
);

export default Radio as typeof Radio & { Group: typeof RadioGroup };
