const { writeFileSync } = require('fs');
const { makeBadge } = require('badge-maker');
const coverageSummary = require('../coverage/coverage-summary.json');

const badges = [
  {
    label: 'coverage',
    message: coverageSummary.total.statements.pct + '%',
    color: 'green',
  },
  {
    label: 'build',
    message: 'passed',
    color: 'green',
  },
];

badges.forEach((badge) => {
  const svg = makeBadge(badge);
  writeFileSync(__dirname + '/../badges/' + badge.label + '.svg', svg);
});
