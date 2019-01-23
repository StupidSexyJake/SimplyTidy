import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


// Create styles
const useStyles = makeStyles((theme) => ({
    textSummary: {
        paddingLeft: 4 * theme.spacing.unit
    },
    summaryWithIconIcon: {
    },
    summaryWithIconSummary: {
        lineHeight: 1
    },
    iconIcon: {
        marginTop: theme.spacing.unit
    }
}))

export function SummaryTextOnly(props) {
    return (
        <Grid item xs={12}>
            <Typography variant={props.variant || 'caption'} align={props.align}>
                {props.summary}
            </Typography>
        </Grid>
    )
}

export function SummaryWithIcon(props) {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item xs={3} className={classes.summaryWithIconIcon}>
                {props.icon}
            </Grid>
            <Grid item xs={9}>
                <Typography
                    variant={props.variant || 'caption'}
                    align={props.align}
                    className={classes.summaryWithIconSummary}>
                    {props.summary}
                </Typography>
            </Grid>
        </React.Fragment>
    )
}

export function SummaryWithLabel(props) {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Typography variant={props.variant || 'caption'} align={props.alignLabel}>
                    {props.label}:
                </Typography>
            </Grid>
            <Grid item xs={9} className={classes.textSummary}>
                <Typography variant={props.variant || 'caption'} align={props.alignSummary}>
                    {props.summary}
                </Typography>
            </Grid>
        </React.Fragment>
    )
}

export function SummaryIconWithValue(props) {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid item xs={6 / (props.cols || 2)} className={classes.iconIcon}>
                {props.icon}
            </Grid>
            <Grid item xs={6 / (props.cols || 2)} className={classes.iconIcon}>
                <Typography variant={props.variant || 'caption'} align={props.alignSummary}>
                    {props.summary}
                </Typography>
            </Grid>
        </React.Fragment>
    )
}