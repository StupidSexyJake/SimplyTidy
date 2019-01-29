import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import { Wrapper } from '../../components/Wrappers'
import Scrim from '../../components/Scrim'

// Fields array
const fieldArray = [
    { label: 'Bookings Completed', number: '2,452' },
    { label: 'Happy Clients', number: '458' },
    { label: 'Google Reviews', number: '5/5' },
    { label: 'Teams Available', number: '7' },
]

const fieldStyles = makeStyles(theme => ({
    description: {
        color: theme.palette.primary.contrastText,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    },
    number: {
        color: theme.palette.primary.contrastText,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        padding: 0
    },
}))

// Field styling
function AllNumbers() {
    // Define styles
    const classes = fieldStyles()
    return (
        fieldArray.map((field) => (
            <Grid item
                xs={3}
                key={field.label}
            >
                <Typography
                    variant="h6"
                    component="p"
                    className={classes.description}
                    align='center'
                >
                    {field.label}
                </Typography>
                <Typography
                    variant="h3"
                    component="p"
                    className={classes.number}
                >
                    {field.number}
                </Typography>
            </Grid>
        ))

    )
}

const sectionStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.main,
    },
    container: {
        padding: '3rem 2rem'
    },
}))

export default React.memo(function Numbers() {
    // Define styles
    const classes = sectionStyles()
    return (
        <div className={classes.root}>
            <Scrim hsl='primaryLight'>
                <Wrapper className={classes.container}>
                    <Grid
                        container
                        justify='center'
                        alignItems='center'
                    >
                        <AllNumbers />
                    </Grid>
                </Wrapper>
            </Scrim>
        </div>
    )
})