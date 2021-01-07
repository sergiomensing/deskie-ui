import { PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { colorShade } from '../utils/colors';

type ButtonSize = 'default' | 'small';
type ButtonAppearance = 'default' | 'secondary' | 'danger';

type ButtonProps = ButtonHTMLAttributes<unknown> & {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  loading?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
};

type CssPartial = FlattenInterpolation<ThemeProps<DefaultTheme>>;

const StyledButton = styled.button<{ size: CssPartial; colors: CssPartial; disabled: boolean; iconOnly: boolean }>`
  border: 1px solid transparent;
  font: inherit;
  ${(props) => props.size};
  ${(props) => props.colors};
  display: inline-flex;
  font-weight: 500;
  font-size: 0.875rem;
  user-select: none;
  text-shadow: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms, border 200ms ease 0ms, color 200ms ease 0ms;
  position: relative;
  overflow: hidden;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  .button-icon {
    width: 1.25rem;

    svg {
      width: 100%;
      height: auto;
    }
  }

  ${(props) =>
    !props.iconOnly &&
    css`
      .button-icon {
        margin-right: 0.5rem;
        margin-left: -0.25rem;
      }
      .button-icon-right {
        margin-right: -0.25rem;
        margin-left: 0.5rem;
      }
    `}
`;

function Button({
  className = '',
  appearance = 'default',
  size = 'default',
  disabled = false,
  icon,
  iconRight,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton
      disabled={disabled}
      colors={getColors(appearance, disabled)}
      className={`button ${children ? '' : 'button-iconOnly'} ${className}`}
      iconOnly={!children}
      size={getButtonSize(size, !children)}
      {...rest}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children && children}
      {iconRight && <span className="button-icon button-icon-right">{iconRight}</span>}
    </StyledButton>
  );
}

function getColors(appearance: ButtonAppearance, disabled: boolean) {
  if (disabled) {
    return css`
      background-color: ${(props) => props.theme.colors.disabled};
      border-color: ${(props) => props.theme.colors.disabled};
      color: ${(props) => props.theme.colors.disabledText};
    `;
  }

  if (appearance === 'secondary') {
    return css`
      background-color: transparent;
      border-color: transparent;
      color: ${(props) => props.theme.colors.black};

      &:hover {
        background-color: ${(props) => props.theme.colors.accent1};
        border-color: ${(props) => props.theme.colors.accent1};
      }
    `;
  }

  if (appearance === 'danger') {
    return css`
      background-color: ${(props) => props.theme.colors.error};
      border-color: ${(props) => props.theme.colors.error};
      color: ${(props) => props.theme.colors.white};

      &:hover {
        background-color: ${(props) => colorShade(props.theme.colors.error, -30)};
        border-color: ${(props) => colorShade(props.theme.colors.error, -30)};
      }
    `;
  }

  return css`
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
      border-color: ${(props) => props.theme.colors.primaryHover};
    }
  `;
}

function getButtonSize(size: ButtonSize, iconOnly: boolean) {
  if (size === 'small') {
    return css`
      height: 2.5rem;
      border-radius: 0.75rem;
      padding: 0 0.75rem;

      ${iconOnly && 'width: 2.5rem;'}
    `;
  }

  return css`
    height: 3.5rem;
    border-radius: 1rem;
    ${!iconOnly && 'padding: 0 1.25rem;'}
    ${iconOnly && 'width: 3.5rem;'}
  `;
}

export default Button;
