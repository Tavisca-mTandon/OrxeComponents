/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import { html, customElement, LitElement, property, TemplateResult } from 'lit-element';
import styles from './rating-bars-css';

@customElement('orxe-rating-bars')
export default class OrxeRatingBars extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */

  @property({type: Number, reflect: true})
  rating = 0;
  
  @property({type: String, reflect: true})
  label = "";

  @property({type: String})
  a11yLabel = ""; // Experience 7.1 out of 10

  @property({type: Number})
  conversionRate = 0;

  @property({type: String})
  _ratingColor = '';
  
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
          <span>${this.label}</span>
          <span>${this.rating / this.conversionRate}</span>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    if (!this.hasAttribute('aria-label')) {
      this._handlea11yLabel();
    }
    this.handleProgressColor();
  }

  handleProgressColor() {
      this._ratingColor = this._RatingEnum.Poor;

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
    if (this.a11yLabel) {
      ariaLabel += `${this.a11yLabel} `;
    }
    if (this.rating && this.conversionRate && this.label) {
      ariaLabel += `${this.label} ${this.rating / this.conversionRate} out of ${this.conversionRate}`;
    }
    this.setAttribute('aria-label', ariaLabel);
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
