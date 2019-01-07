import css from 'styled-jsx/css'
import {Colors} from './Colors'

// Convert tracking values to letter-spacing values
function trackingToLetterSpacing(tracking, fontSize) {
    return tracking / (fontSize * 16) + 'rem';
}

// Global styling
export const GlobalStyles = css.global`
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
    a {
        color: ${ Colors.text }
    }
    a:hover {
        color: ${ Colors.Primary };
    }
    button {
        border: 0;
        outline: none;
        cursor: pointer;   
    }
`

// Font sizes (in rem units)
export const fontSizes = {
    h1: '5',
    h4: '2.125',
    h5: '1.5',
    h6: '1.25',
    sub: '1',
    body: '1',
    small: '0.875',
    button: '0.875',
    caption: '0.75'
}

// Typopgraphy types
export const Type_Styles = css`
    h1, .type-h1 {
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 5rem;
        font-weight: 200;
        letter-spacing: ${ trackingToLetterSpacing(-1.5, fontSizes.h1) };
        color: ${ Colors.text_em }
    }
    h4, .type-h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: ${ fontSizes.h4 }rem;
        font-weight: 300;
        letter-spacing: ${ trackingToLetterSpacing(0.25, fontSizes.h4) };
    }
    h5, .type-h5 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 0;
    }
    .type-sub {
        font-family: 'Open Sans', sans-serif;
        font-size: ${ fontSizes.sub }rem;
        font-weight: 300;
        letter-spacing: ${ trackingToLetterSpacing(0.15, fontSizes.sub) };
    }
    .type-small {
        font-family: 'Roboto', sans-serif;
        font-size: ${ fontSizes.small }rem;
        font-weight: 300;
        letter-spacing: ${ trackingToLetterSpacing(0.25, fontSizes.small) };
    }
    .type-button {
        font-family: 'Roboto', sans-serif;
        font-size: ${ fontSizes.button }rem;
        font-weight: 400;
        letter-spacing: ${ trackingToLetterSpacing(1.25, fontSizes.button) };
        text-transform: uppercase;
    }
    .type-caption {
        font-family: 'Roboto', sans-serif;
        font-size: ${ fontSizes.caption }rem;
        font-weight: 600;
        letter-spacing: ${ trackingToLetterSpacing(0.4, fontSizes.caption) };
        text-transform: uppercase;
    }
`