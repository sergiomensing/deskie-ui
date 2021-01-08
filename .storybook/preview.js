import { ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
