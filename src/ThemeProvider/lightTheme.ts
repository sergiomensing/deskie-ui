import tokens from '../tokens';

const lightTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    disabled: tokens.colors.accent2,
    disabledText: tokens.colors.accent8,
    label: tokens.colors.foreground,
    white: tokens.colors.background,
    inputBorder: tokens.colors.accent8,
    inputBackground: tokens.colors.background,
    black: tokens.colors.foreground,
    border: tokens.colors.accent6,
    labelInverted: tokens.colors.background,
  },
};

export default lightTheme;
