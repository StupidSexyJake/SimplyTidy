import React from 'react'
// Context
import {BookingFormContext} from '../../components/Context'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 'auto',            
        paddingTop: '0 !important',
        paddingBottom: 2 * theme.spacing.unit
    }
}))

export default function ShowMoreRooms() {
    const classes = useStyles()
    const {changeBookingFormState} = React.useContext(BookingFormContext)
    return (
        <Grid item xs={11} className={classes.root}>
            <Typography variant='caption'>                                                
                Includes 1 living area, 1 kitchen, hallways and stairs. Click <a onClick={() => changeBookingFormState('showAllRooms', true)} href='#'>here</a> to add more rooms
            </Typography>
        </Grid>
    )
} 