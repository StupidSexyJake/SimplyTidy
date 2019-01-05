import css from 'styled-jsx/css'
import {Colors} from './Colors'

// Convert tracking values to letter-spacing values
function trackingToLetterSpacing(tracking, fontSize) {
    return tracking / fontSize + "rem";
}

// Global styling
export const GlobalStyles = css.global`
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
    a {
        color: #333;
    }
    a:hover {
        color: ${ Colors.Primary };
    }
`
// Typopgraphy types
export const Type_H1 = css`
    h1, .h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 96px;
        font-weight: 200;
        letter-spacing: ${trackingToLetterSpacing(-1.5, 96)};
    }
`
export const Type_H4 = css`
    h4, .h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 34px;
        font-weight: 300;
        letter-spacing: ${trackingToLetterSpacing(0.25, 34)};
    }
`

export const Type_Small = css`
    .type-small {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: ${trackingToLetterSpacing(0.25, 14)};
    }
`
export const Type_Button = css`
    .type-button {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: ${trackingToLetterSpacing(1.25, 14)};
        text-transform: uppercase;
    }
`