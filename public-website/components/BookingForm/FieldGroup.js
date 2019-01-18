import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 6 * theme.spacing.unit
    },
    title: {
        paddingBottom: 0
    },
    subtitle: {
        paddingBottom: 2 * theme.spacing.unit
    }
}))

export default function FieldGroup(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h6' component='h3' align='left' className={classes.title}>
                {props.title}
            </Typography>
            <Typography variant='caption' align='left' className={classes.subtitle}>
                {props.description}
            </Typography>
                {props.children}
        </div>
    )
}

