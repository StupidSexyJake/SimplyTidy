import { SheetsRegistry } from 'jss'
import { createMuiTheme } from '@material-ui/core/styles'
import { createGenerateClassName } from '@material-ui/styles'
import cyan from '@material-ui/core/colors/cyan'
import brown from '@material-ui/core/colors/brown'
import grey from '@material-ui/core/colors/grey'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({

    palette: {
        primary: {
            light: cyan[300],
            main: cyan[500],
            dark: cyan[700],
            contrastText: grey[50]
        },
        secondary: {
            light: brown[300],
            main: brown[500],
            dark: brown[700],
            contrastText: grey[50]
        },
    },
    typography: {
        useNextVariants: true,
        // Use the system font instead of the default Roboto font.
        h1: {
            fontFamily: '"Merriweather", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h2: {
            fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h3: {
            fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h4: {
            fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h5: {
            fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h6: {
            fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
        }
    }
})

function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName(),
    }
}

let pageContext;

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext()
    }

    // Reuse context on the client-side.
    if (!pageContext) {
        pageContext = createPageContext()
    }

    return pageContext;
}
