## Usage

### Angular / javascript

_Default_

```html
<orxe-rating-bars> </orxe-rating-bars>
```
```html
<orxe-rating-bars rating="86" label="Business"></orxe-rating-bar>
```

## Properties

| Property | Attribute | Description                                    | Type     | Default  |
| -------- | --------- | ---------------------------------------------- | -------- | -------- |
| `rating` | `rating`  | Used to pass a value/rating to the rating bar. | `number` | `0`      |
| `label`  | `label`   | To provide a label for the linear rating bar.  | `string` |          |

## CSS Variabes to Override

    --orxe-bar-shell-color: var(--tertiary);
    --orxe-bar-shell-padding: 0px;
    --orxe-bar-shell-margin-bottom: 2px;
    --orxe-bar-shell-border-radius:50px;

    --orxe-bar-progress-color: var(--primary);
    --orxe-bar-progress-height:8px;

    --orxe-bar-label-color: var(--tertiary);
    --orxe-bar-label-font-family: var(--primary-font-family);
    --orxe-bar-label-font-weight: 1.6rem;
    --orxe-bar-label-font-size: var(--primary-text);

    --orxe-progress-color-poor:red;
    --orxe-progress-color-normal:orange;
    --orxe-progress-color-good:yellow;
    --orxe-progress-color-excellent:green;
    --orxe-progress-color-awesome:darkgreen;
