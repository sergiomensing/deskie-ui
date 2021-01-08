import { HTMLAttributes, PropsWithChildren, Children } from 'react';
import styled, { css } from 'styled-components';

export type AvatarGroupProps = HTMLAttributes<unknown> & {
  count?: number;
  direction?: 'horizontal' | 'vertical';
};

const StyledAvatarGroup = styled.div<{ horizontal: boolean }>`
  display: flex;
  ${(props) =>
    props.horizontal
      ? css`
          flex-direction: row;
          & > * + * {
            margin-left: 0.5rem;
          }
        `
      : css`
          flex-direction: column;
          & > * + * {
            margin-top: 0.5rem;
          }
        `};

  .avatar-img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
  }

  .avatar-initials {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
  }

  .avatarGroup-additional {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background: ${(props) => props.theme.colors.accent1};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.foreground};
    font-weight: 600;
  }
`;

function AvatarGroup({ children, count, direction = 'horizontal' }: PropsWithChildren<AvatarGroupProps>) {
  function renderLimitedChildren() {
    if (count) {
      const totalAmount = Children.toArray(children);
      const amountNotShown = totalAmount.length - count;
      return (
        <>
          {totalAmount.map((child, index) => {
            return index < count ? child : null;
          })}
          <span className="avatarGroup-additional">+{amountNotShown}</span>
        </>
      );
    }

    return children;
  }

  return (
    <StyledAvatarGroup horizontal={direction === 'horizontal'} className="avatarGroup">
      {renderLimitedChildren()}
    </StyledAvatarGroup>
  );
}

export default AvatarGroup;
