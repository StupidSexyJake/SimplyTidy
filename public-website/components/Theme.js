import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: cyan,
        primaryGradient: `linear-gradient(${ cyan }, hsl(201, 100%, 42%))`
    }
});

function createTheme(props) {
    return (
        <MuiThemeProvider theme={theme}>
            { props.children }
        </MuiThemeProvider>
  );
}

export default createTheme;