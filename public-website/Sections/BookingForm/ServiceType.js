import React from 'react'
// Context
import {ClientContext} from '../../components/Context'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

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

const icon = {
    10: 'regular-maid-services-icon.png',
    20: 'spring-cleaning-icon.png'
}

export default function ServiceType() {
    const classes = useStyles()
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
}