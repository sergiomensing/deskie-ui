export const colors = {
  primary: '#6C5DD3',
  primaryHover: '#4535B7',
  foreground: '#11142D',
  accent9: '#808191',
  accent8: '#9395A1',
  accent7: '#B2B3BD',
  accent6: '#D3D4DD',
  accent3: '#D5D5E7',
  accent2: '#EEEEF8',
  accent1: '#F7F7FD',
  background: '#FFFFFF',
  error: '#FF754C',
  warning: '#FFCE73',
  success: '#7FBA7A',
};

export const elevation = {
  0: '0',
  1: '0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.02);',
  2: '0px 1px 2px rgba(0, 0, 0, 0.02), 0px 3px 7px rgba(0, 0, 0, 0.03), 0px 12px 31px rgba(0, 0, 0, 0.05);',
};

export const fontFamilies = { inter: 'Inter', poppins: 'Poppins' };

export const fontSizes = {
  body: 14,
  label: 13,
  buttonLabel: 14,
  tooltipLabel: 13,
  h3: 16,
  h2: 18,
  h1: 21,
};

export const fontWeights = {
  body: 300,
  label: 300,
  buttonLabel: 600,
  tooltipLabel: 400,
  h3: 600,
  h2: 500,
  h1: 600,
};

export const lineHeights = {
  body: 1.75,
  label: 1.2,
  buttonLabel: 1.4,
  tooltipLabel: 1.2,
  h3: 1.3,
  h2: 1.3,
  h1: 1.3,
};

// font: font-style font-variant font-weight font-size/line-height font-family;

export const fonts = {
  body: `${fontSizes.body}/${lineHeights.body} ${fontFamilies.inter}, sans-serif`,
  label: `${fontSizes.label}/${lineHeights.label} ${fontFamilies.inter}, sans-serif`,
  buttonLabel: `${fontSizes.buttonLabel}/${lineHeights.buttonLabel} ${fontFamilies.inter}, sans-serif`,
  tooltipLabel: `${fontSizes.tooltipLabel}/${lineHeights.tooltipLabel} ${fontFamilies.inter}, sans-serif`,
  h3: `${fontSizes.h3}/${lineHeights.h3} ${fontFamilies.inter}, sans-serif`,
  h2: `${fontSizes.h2}/${lineHeights.h2} ${fontFamilies.poppins}, sans-serif`,
  h1: `${fontSizes.h2}/${lineHeights.h2} ${fontFamilies.poppins}, sans-serif`,
};

const tokens = { colors, elevation, fontSizes, fontWeights, lineHeights, fonts, fontFamilies };

export default tokens;
