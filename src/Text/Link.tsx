import { AllHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Text, { BaseTextProps } from './Text';

type LinkProps = AllHTMLAttributes<unknown> & BaseTextProps;

const StyledLink = styled(Text)`
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
  }
`;

function Link({ children, ...rest }: PropsWithChildren<LinkProps>) {
  return (
    <StyledLink as="a" {...rest}>
      {children}
    </StyledLink>
  );
}

export default Link;
