import {css} from 'lit-element';
export default css`:host{--orxe-bar-shell-color: var(--tertiary);--orxe-bar-shell-padding: 0px;--orxe-bar-shell-margin-bottom: 2px;--orxe-bar-shell-border-radius:50px;--orxe-bar-progress-color: var(--primary);--orxe-bar-progress-height:8px;--orxe-bar-label-color: var(--tertiary);--orxe-bar-label-font-family: var(--primary-font-family);--orxe-bar-label-font-weight: 1.6rem;--orxe-bar-label-font-size: var(--primary-text);--orxe-progress-color-poor:red;--orxe-progress-color-normal:orange;--orxe-progress-color-good:yellow;--orxe-progress-color-excellent:green;--orxe-progress-color-awesome:darkgreen}:host .rating-bar-container .rating-bar-shell{background-color:var(--orxe-bar-shell-color);padding:var(--orxe-bar-shell-padding);margin-bottom:var(--orxe-bar-shell-margin-bottom);border-radius:var(--orxe-bar-shell-border-radius)}:host .rating-bar-container .rating-bar-shell .rating-bar-progress{border-radius:var(--orxe-bar-shell-border-radius);height:var(--orxe-bar-progress-height);max-width:100%}:host .rating-bar-container .rating-bar-label{font-family:var(--orxe-bar-label-font-family);color:var(--orxe-bar-label-color);font-weight:var(--orxe-bar-label-font-weight);font-size:var(--orxe-bar-label-font-size)}:host .rating-bar-container .rating-bar-label span:not(:first-child){float:right}:host .rating-bar-container .poor{background-color:var(--orxe-progress-color-poor)}:host .rating-bar-container .normal{background-color:var(--orxe-progress-color-normal)}:host .rating-bar-container .good{background-color:var(--orxe-progress-color-good)}:host .rating-bar-container .excellent{background-color:var(--orxe-progress-color-excellent)}:host .rating-bar-container .awesome{background-color:var(--orxe-progress-color-awesome)}`;