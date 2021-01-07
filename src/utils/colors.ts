export const colorShade = (col: string, amt: number) => {
  col = col.replace(/^#/, '');
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  const [sr, sg, sb] = col.match(/.{2}/g) || ['ff', 'ff', 'ff'];
  const [ar, ag, ab] = [parseInt(sr, 16) + amt, parseInt(sg, 16) + amt, parseInt(sb, 16) + amt];

  const r = Math.max(Math.min(255, ar), 0).toString(16);
  const g = Math.max(Math.min(255, ag), 0).toString(16);
  const b = Math.max(Math.min(255, ab), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};

const defaultColors = [
  '#E64980',
  '#4C6EF5',
  '#228BE6',
  '#15AABF',
  '#12B886',
  '#40C057',
  '#82C91E',
  '#FAB005',
  '#FD7E14',
  '#FA5252',
];

export function getColorFromString(value: string, colors: undefined | string[] = defaultColors) {
  let hash = 0;
  if (value.length === 0) return colors[hash];
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
}
