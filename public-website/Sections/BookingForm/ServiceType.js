import React from 'react'
// Context
import {ClientContext} from '../../state/ClientState'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

export default React.memo(function ServiceType() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            textAlign: 'center',
        },
        icon: {
            display: 'block',
            margin: '0 auto',
            marginTop: 4 * theme.spacing.unit,
            marginBottom: 2 * theme.spacing.unit,
            height: 12 * theme.spacing.unit
        },
        title: {
            paddingBottom: 0
        },
        changeService: {
            marginBottom: 2 * theme.spacing.unit
        }
    }))    
    // Define styles
    const classes = useStyles()
    // Map icons to service value
    const icon = {
        10: 'regular-maid-services-icon.png',
        20: 'spring-cleaning-icon.png'
    }
    // Get state contexts
    const {clientState} = React.useContext(ClientContext)
    return (
        <div className={classes.root}>
            <img src={`/static/icons/services/${icon[clientState.service]}`} className={classes.icon} />
            <Typography variant='h6' component='p' className={classes.title}>
                Routine Cleaning
            </Typography>
            <Typography variant='body2' component='p' color='primary' align='center' className={classes.changeService}>
                Change service...
            </Typography>
        </div>
    )
})