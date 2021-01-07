import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import initials from 'initials';
import { getColorFromString } from '../utils/colors';
import AvatarGroup from './AvatarGroup';

type AvatarSize = 'default' | 'large';

export type AvatarProps = HTMLAttributes<unknown> & {
  text: string;
  showLabel?: boolean;
  subText?: string;
  size?: AvatarSize | number;
  src?: string;
  isCurrentUser?: boolean;
};

const getSize = (size: AvatarSize | number): string => {
  const sizes = {
    default: '3rem',
    large: '6rem',
  };

  if (typeof size === 'number') return `${size}px`;
  return sizes[size];
};

const getBorderRadius = (size: AvatarSize | number): string => {
  const sizes = {
    default: '1rem',
    large: '2rem',
  };

  if (typeof size === 'number') return `${size / 4}px`;
  return sizes[size];
};

const StyledAvatar = styled.div<{ size: string; borderRadius: string; isCurrentUser: boolean }>`
  display: flex;
  align-items: center;

  & > *:first-child {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: ${(props) => props.borderRadius};
    display: flex;
    user-select: none;
  }

  .avatar-initials {
    color: ${(props) => props.theme.colors.accent1};
    justify-content: center;
    align-items: center;
    text-align: center;

    ${(props) =>
      props.isCurrentUser &&
      css`
        background-color: ${(props) => props.theme.colors.primary} !important;
      `};
  }

  .avatar-label {
    margin-left: 0.75rem;
    display: flex;
    flex-direction: column;
  }

  .avatar-text {
    font-size: 0.875rem;
    color: ${(props) => (props.isCurrentUser ? props.theme.colors.primary : props.theme.colors.foreground)};
    font-weight: 500;
  }

  .avatar-subtext {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.colors.accent8};
    margin-top: 0.25rem;
  }
`;

function Avatar({
  text,
  src,
  showLabel = false,
  subText,
  size = 'default',
  className = '',
  style,
  isCurrentUser = false,
  ...rest
}: AvatarProps) {
  return (
    <StyledAvatar
      className={`avatar ${className}`}
      size={getSize(size)}
      borderRadius={getBorderRadius(size)}
      isCurrentUser={isCurrentUser}
      style={style}
      {...rest}
    >
      {src ? (
        <img className="avatar-img" src={src} alt={text} />
      ) : (
        <div className="avatar-initials" style={{ backgroundColor: getColorFromString(text) }}>
          {initials(text)}
        </div>
      )}
      {showLabel && (
        <div className="avatar-label">
          <span className="avatar-text">{text}</span>
          {subText && <span className="avatar-subtext">{subText}</span>}
        </div>
      )}
    </StyledAvatar>
  );
}

Avatar.Group = AvatarGroup;

export default Avatar;
