import { PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import lightTheme from './lightTheme';

export const GlobalStyle = createGlobalStyle`


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



body {
  margin: 0;
  font-family: ${(props) => props.theme.fontFamilies.inter}, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  box-sizing: border-box;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.accent1};
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.foreground};
}

html, body {
text-rendering: optimizeLegibility; 
-webkit-font-smoothing: subpixel-antialiased; 

}

* {
  margin: 0;
  padding: 0;
  line-height: 1;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}


.Toastify__toast {
    min-height: 3rem;
    padding: 1rem;
    font: inherit;
}

.Toastify__toast-body {
  /* display: -webkit-box;
  -webkit-line-clamp:3;;
  -webkit-box-orient:vertical; 
  overflow:hidden; */
  margin-right: 0.5rem;
}

.Toastify__toast--success {
  background: ${(props) => props.theme.colors.success};
}

.Toastify__toast--error {
  background: ${(props) => props.theme.colors.error};
}


*,
*:after,
*:before {
  box-sizing: border-box;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}


/* Focusing the button with a keyboard will show a dashed black line. */
*:focus-visible {
  outline: 2px dashed black;
}

/* Focusing the button with a mouse, touch, will not show any outline */
*:focus:not(:focus-visible) {
  outline: none;
}


`;

function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <SCThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  );
}

export default ThemeProvider;
