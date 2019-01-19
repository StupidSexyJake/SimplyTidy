import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default React.memo(function ShowMoreRooms() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            marginLeft: 'auto',            
            paddingTop: '0 !important',
            paddingBottom: 2 * theme.spacing.unit
        }
    }))
    // Define styles
    const classes = useStyles()
    return (
        <Grid 
            item xs={11} 
            className={classes.root}>
            {/* <Typography variant='caption'>                                                
                Includes 1 living area, 1 kitchen, hallways and stairs. Click <a onClick={() => setBookingFormState('showAllRooms', true)} href='#'>here</a> to add more rooms
            </Typography> */}
        </Grid>
    )
})