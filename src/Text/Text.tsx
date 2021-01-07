import { HTMLAttributes, PropsWithChildren } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

type TextAppearance = 'default' | 'success' | 'warning' | 'error' | 'faded' | 'secondary';

export type BaseTextProps = {
  p?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  b?: boolean;
  small?: boolean;
  appearance?: TextAppearance;
  as?: keyof JSX.IntrinsicElements;
};

type TextProps = HTMLAttributes<unknown> & BaseTextProps;

type TextTags = Pick<TextProps, 'p' | 'h1' | 'h2' | 'h3' | 'small' | 'b'>;

type CssPartial = FlattenInterpolation<ThemeProps<DefaultTheme>>;

const StyledText = styled.span<{ appearance: TextAppearance; font: CssPartial }>`
  ${(props) => props.font};
  color: ${(props) =>
    props.appearance === 'default'
      ? props.theme.colors.foreground
      : props.appearance === 'secondary'
      ? props.theme.colors.accent8
      : props.appearance === 'faded'
      ? props.theme.colors.accent6
      : props.theme.colors[props.appearance]};
`;

function getElementTag({ p, h1, h2, h3 }: TextTags) {
  if (p) {
    return 'p';
  }

  if (h1) {
    return 'h1';
  }

  if (h2) {
    return 'h2';
  }

  if (h3) {
    return 'h3';
  }

  return 'span';
}

function getFont({ h1, h2, h3, small, b }: TextTags) {
  if (h1) {
    return css`
      font-size: 1.375rem;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    `;
  }
  if (h2) {
    return css`
      font-size: 1.125rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    `;
  }
  if (h3) {
    return css`
      font-size: 1rem;
      font-weight: 500;
    `;
  }
  if (small) {
    return css`
      font-size: 0.8125rem;
      font-weight: 400;
    `;
  }
  if (b) {
    return css`
      font-size: 0.875rem;
      font-weight: 600;
    `;
  }
  return css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.75;
  `;
}

function Text({
  children,
  p,
  h1,
  h2,
  h3,
  small,
  b,
  as,
  appearance = 'default',
  ...rest
}: PropsWithChildren<TextProps>) {
  const tags = { p, h1, h2, h3, small, b };
  return (
    <StyledText as={as || getElementTag(tags)} font={getFont(tags)} appearance={appearance} {...rest}>
      {children}
    </StyledText>
  );
}

export default Text;
