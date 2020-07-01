import { OrxeRatingBars } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-rating-bars-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let RatingBars;

  beforeEach(async () => {
    OrxeRatingBars;
    document.body.appendChild(document.createElement('RatingBars'));
    RatingBars = document.querySelector('RatingBars') as OrxeRatingBars;
  });

  afterEach(() => {
    RatingBars.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(RatingBars);
    expect(result).toHaveNoViolations();
  });
});
