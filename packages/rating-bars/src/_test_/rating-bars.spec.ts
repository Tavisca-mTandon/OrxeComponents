/* eslint-disable linebreak-style */
import { OrxeRatingBars } from '..';
import '..'
import {events} from '@orxe-culture/core'

describe("orxe-rating-bars", ()=> {
  let orxeRatingBars: OrxeRatingBars = null;

  beforeEach(async () => {
      orxeRatingBars = (await document.body.appendChild(
        document.createElement('orxe-rating-bars'),
      )) as OrxeRatingBars;
      orxeRatingBars.rating = 83;
      orxeRatingBars.label = 'Business';
      orxeRatingBars.conversionRate = 10;
      await orxeRatingBars.requestUpdate();
    });

    afterEach(async function() {
      await orxeRatingBars.remove();
    });

    it('Should Check Aria Label', () => {

      events.initialized.subscribe((isInitialized) => {
        if (isInitialized) {
          orxeRatingBars._handlea11yLabel();
          expect(orxeRatingBars.getAttribute('aria-label')).toEqual('Business 8.3 out of 10');
        }
      });
    });

     it('Should Check Excellent Based On Rating 83', async ()=> {
      orxeRatingBars.handleProgressColor();
      await orxeRatingBars.requestUpdate();
      expect(orxeRatingBars.shadowRoot.querySelectorAll('.excellent').length).toEqual(1);
     });

     it('Should Check Poor Based On Rating 60', async ()=> {
      orxeRatingBars.rating = 60;
      orxeRatingBars.handleProgressColor();
      await orxeRatingBars.requestUpdate();
      expect(orxeRatingBars.shadowRoot.querySelectorAll('.poor').length).toEqual(1);
     });

     it('Should Check Normal Based On Rating 76', async ()=> {
      orxeRatingBars.rating = 76;
      orxeRatingBars.handleProgressColor();
      await orxeRatingBars.requestUpdate();
      expect(orxeRatingBars.shadowRoot.querySelectorAll('.good').length).toEqual(1);
     });

     it('Should Check Awesome Based On Rating 96', async ()=> {
      orxeRatingBars.rating = 96;
      orxeRatingBars.handleProgressColor();
      await orxeRatingBars.requestUpdate();
      expect(orxeRatingBars.shadowRoot.querySelectorAll('.awesome').length).toEqual(1);
     });
});
