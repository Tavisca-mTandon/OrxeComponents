/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import { html, customElement, property, TemplateResult } from 'lit-element';
import styles from './rating-bars-css';
import { TranslationClass, events } from '@orxe-culture/lit';

@customElement('orxe-rating-bars')
export default class OrxeRatingBars extends TranslationClass {
  /**
   * 
   */
  @property({type: Number, reflect: true})
  rating = 0;
  
  @property({type: String, reflect: true})
  label = "";

  @property({type: String})
  a11yLabel = ""; // Experience 7.1 out of 10

  @property({type: Number})
  conversionRate = 10;

  _ratingColor = '';
  
  _labelCultureKey = "";
  _displayRate = 0;

  _RatingEnum = {
    'Poor': 'poor',
    'Normal': 'normal',
    'Good': 'good',
    'Excellent': 'excellent',
    'Awesome': 'awesome',
  };

  render(): TemplateResult {
    return html`
      <div class="rating-bar-container" aria-hidden="true">
        <div class="rating-bar-shell">
          <div id="rating-bar-progress" class="${this._ratingColor} rating-bar-progress" style="width:${ this.rating <=100 ? this.rating : 0 }%;"></div>
        </div>
        <div class="rating-bar-label">
          <span>${this.t(this._labelCultureKey)}</span>
          <span>${this.rating / this.conversionRate}</span>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this._labelCultureKey = 'label_'+ this.label.toLowerCase();
    this._displayRate = this.rating / this.conversionRate;

    if (!this.hasAttribute('aria-label')) {
      events.initialized.subscribe((isInitialized) => {
        if (isInitialized) {
          this._handlea11yLabel();
        }
      });
    }

    this.handleProgressColor();
  }

  handleProgressColor() {
      this._ratingColor = this._RatingEnum.Poor;
      this._setRatingColorClass();
  }

  _setRatingColorClass(){
    if (this.rating >=68 && this.rating < 75 ) {
      this._ratingColor = this._RatingEnum.Normal;
    }
    if (this.rating >=75 && this.rating < 80 ) {
      this._ratingColor = this._RatingEnum.Good;
    } 
    if (this.rating >=80 && this.rating <= 85) {
      this._ratingColor = this._RatingEnum.Excellent;
    } 
    if (this.rating > 85 ) {
      this._ratingColor = this._RatingEnum.Awesome;
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _handlea11yLabel() {
    let ariaLabel = '';
    let translatedAriaLabel = `${this.t('aria_label',{label:this.label, rate:this._displayRate, conversionRate:this.conversionRate})}`;
    if (this.a11yLabel) {
      ariaLabel += `${this.a11yLabel} `;
    }
    if (this.rating && this.conversionRate && this.label) {
      ariaLabel += translatedAriaLabel;
    }
    this.setAttribute('aria-label', ariaLabel);
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
