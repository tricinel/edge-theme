import { calcContrastCompliance } from 'colora11y';
import { forEach, isEmpty, isNil, view, compose } from 'ramda';
import a11ycolor from 'a11ycolor';

import { warning } from './logger';
import { cases, passLensPath } from './test.utils';

const isCompliant = (bg, fg) => {
  const compliance =
    !isEmpty(bg) && !isEmpty(fg) ? calcContrastCompliance(bg, fg) : false;

  return compliance ? view(passLensPath, compliance) : false;
};

const suggestColor = (fg, bg) => a11ycolor(fg, bg).toLowerCase();

const createThemeColorSets = ts =>
  Object.keys(ts).reduce(
    (sets, t) =>
      [...sets, !isNil(ts[t].colors) ? cases(ts, t) : null].filter(Boolean),
    []
  );

const flattenSets = sets => sets.reduce((all, set) => [...all, ...set], []);

const checkA11y = sets =>
  sets.reduce(
    (inaccessible, set) =>
      [
        ...inaccessible,
        isCompliant(set[0], set[1]) ? null : [set[1], set[0], set[2]]
      ].filter(Boolean),
    []
  );

const suggestA11y = sets =>
  sets.reduce(
    (suggestions, set) => [
      ...suggestions,
      [...set, suggestColor(set[0], set[1])]
    ],
    []
  );

const log = suggestion =>
  warning(
    `The color ${suggestion[0]} (${
      suggestion[2]
    }) is not accessible on the background ${suggestion[1]}! Could you use ${
      suggestion[3]
    } instead?`
  );

const outputSuggestions = forEach(log);

export default compose(
  outputSuggestions,
  suggestA11y,
  checkA11y,
  flattenSets,
  createThemeColorSets
);
