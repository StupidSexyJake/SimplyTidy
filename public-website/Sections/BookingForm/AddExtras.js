import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
    subsection: {
        marginBottom: 6 * theme.spacing.unit
    },
    sectionTitle: {
        paddingBottom: 0
    },
    sectionSubtitle: {
        paddingBottom: 2 * theme.spacing.unit
    },
    gridContainer: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
}))

export default React.memo(function AddExtras() {
    const classes = useStyles()
    return (
        <Grid container spacing={16} className={classes.gridContainer} alignItems='center'>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    {/* {bookingFormState.extras.map((data, index) => {
                        return (
                            <Grid item key={index}>
                                <Chip
                                    color='primary'
                                    label={data.label}
                                />
                            </Grid>
                        )
                    })}
                    {bookingFormState.unselectedExtras.map((data, index) => {
                        return (
                            <Grid item key={index}>
                                <Chip
                                    label={data.label}
                                />
                            </Grid>
                        )
                    })} */}
                </Grid>
            </Grid>
        </Grid>
    )
})