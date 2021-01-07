import {} from 'styled-components';
import lightTheme from './ThemeProvider/lightTheme';

type Theme = typeof lightTheme;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
