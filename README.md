![](./badges/coverage.svg)
![](./badges/build.svg)

## Quick Start

1. Install the package `npm install deskie-ui`.
2. Deskie UI requires [styled-component](https://www.npmjs.com/package/styled-components), [react-spring](https://www.npmjs.com/package/react-spring) and [react-use-gesture](https://www.npmjs.com/package/react-use-gesture) to be installed as (peer) dependencies. `npm install styled-component react-spring react-use-gesture`
3. Wrap your project in the `ThemeProvider` component

```jsx
import { ThemeProvider } from 'deskie-ui';

const Application = () => <ThemeProvider>...</ThemeProvider>;
```

## Development
