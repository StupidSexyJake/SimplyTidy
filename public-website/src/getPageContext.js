import { SheetsRegistry } from 'jss'
import { createMuiTheme } from '@material-ui/core/styles'
import { createGenerateClassName } from '@material-ui/styles'
import orange from '@material-ui/core/colors/orange'
import cyan from '@material-ui/core/colors/cyan'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            outlined: {
            }
        }
    },
    palette: {
        primary: {
            light: cyan[50],
            main: cyan[500],
            dark: cyan[900],
            contrastText: 'rgba(255,255,255,0.95)'
        },
        secondary: {
            light: orange[50],
            main: orange[700],
            dark: orange[900],
            contrastText: 'rgba(255,255,255,0.95)'
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: 'center',
            paddingBottom: '1rem',
            fontWeight: 400,
        },
        h2: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: 'center',
            paddingBottom: '1rem',
            color: cyan[500],
        },
        h3: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',            
            textAlign: 'center',
            paddingBottom: '1rem',
            color: cyan[500],
        },
        h4: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: 'center',
            paddingBottom: '1rem',
            color: cyan[500]
        },
        h5: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: 'center',
            paddingBottom: '1rem'
        },
        h6: {
            fontFamily: '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: 'center',
            paddingBottom: '1rem'
        },
        body1: {
            color: '#597a96',
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
