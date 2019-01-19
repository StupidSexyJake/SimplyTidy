import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

export default React.memo(function FieldGroup(props) {
    // Create styles
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
    // Define styles
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
})