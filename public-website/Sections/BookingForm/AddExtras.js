import React from 'react'
// Context
import {ClientContext} from '../../state/ClientState'
import {BookingFormContext} from '../../state/BookingFormState'
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
    const {clientState, setClientState} = React.useContext(ClientContext)
    const {bookingFormState, setBookingFormState} = React.useContext(BookingFormContext)
    const classes = useStyles()
    const handleDeleteExtra = data => () => {    
        const extraToDelete = clientState.extras.indexOf(data)
        clientState.extras.splice(extraToDelete, 1)
        bookingFormState.unselectedExtras.unshift(data)
        setClientState(clientState.extras)
        setBookingFormState(bookingFormState)
    }
    const handleAddExtra = data => () => {
        const extraToAdd = bookingFormState.unselectedExtras.indexOf(data)
        bookingFormState.unselectedExtras.splice(extraToAdd, 1)
        clientState.extras.push(data)        
        setClientState(clientState.extras)
        setBookingFormState(bookingFormState.unselectedExtras)
    }
    return (
        <Grid container spacing={16} className={classes.gridContainer} alignItems='center'>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    {bookingFormState.extras.map((data, index) => {
                        return (
                            <Grid item key={index}>
                                <Chip
                                    color='primary'
                                    label={data.label}
                                    onDelete={handleDeleteExtra(data)}
                                />
                            </Grid>
                        )
                    })}
                    {bookingFormState.unselectedExtras.map((data, index) => {
                        return (
                            <Grid item key={index}>
                                <Chip
                                    label={data.label}
                                    onClick={handleAddExtra(data)}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
})