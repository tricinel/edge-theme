import { calcContrastCompliance } from 'colora11y';
import { isEmpty, view } from 'ramda';

import { cases, passLensPath } from '../../utils/test.utils';

import * as themes from '../colors';

describe('Edge Serene', () => {
  test.each(cases(themes, 'edge-serene'))(
    'Colors %s and %s (%s) pass the WCAG 2.0 AA accessibility standard',
    (bg, fg) => {
      const compliance =
        !isEmpty(bg) && !isEmpty(fg) ? calcContrastCompliance(bg, fg) : false;

      const isCompliant = compliance ? view(passLensPath, compliance) : false;

      expect(isCompliant).toBe(true);
    }
  );
});

describe('Edge Ocean', () => {
  test.each(cases(themes, 'edge-ocean'))(
    'Colors %s and %s (%s) pass the WCAG 2.0 AA accessibility standard',
    (bg, fg) => {
      const compliance =
        !isEmpty(bg) && !isEmpty(fg) ? calcContrastCompliance(bg, fg) : false;

      const isCompliant = compliance ? view(passLensPath, compliance) : false;

      expect(isCompliant).toBe(true);
    }
  );
});

describe('Edge Night Sky', () => {
  test.each(cases(themes, 'edge-night-sky'))(
    'Colors %s and %s (%s) pass the WCAG 2.0 AA accessibility standard',
    (bg, fg) => {
      const compliance =
        !isEmpty(bg) && !isEmpty(fg) ? calcContrastCompliance(bg, fg) : false;

      const isCompliant = compliance ? view(passLensPath, compliance) : false;

      expect(isCompliant).toBe(true);
    }
  );
});
