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

const withHooks = (Story) => <Story />;
export const decorators = [withHooks, withThemeProvider];
