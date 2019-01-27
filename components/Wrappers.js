import React from 'react'
import classNames from 'classnames'
// React components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

// Container styles
const containerStyles = makeStyles(theme => ({
    allVariants: {
    },
    section: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
        paddingTop: 7.5 * theme.spacing.unit,
        paddingBottom: 10 * theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 5 * theme.spacing.unit,
            paddingBottom: 7.5 * theme.spacing.unit
        }
    },
    base: {
    },
    content: {
        padding: 2 * theme.spacing.unit
    },
    fold: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
        paddingTop: 14 * theme.spacing.unit,
        paddingBottom: 12 * theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 2 * theme.spacing.unit,
            paddingRight: 2 * theme.spacing.unit,
            paddingTop: 'calc(16vh - 56px)',
            paddingBottom: 0,
            height: 'calc(177.778vw - 56px)'
        }
    },
    item: {
        width: '100%'
    }
}))
export function Wrapper(props) {
    // Define styles
    const classes = containerStyles()
    // Get variant
    const variant = props.variant || 'base'
    return (
        <Grid
            container
            className={classNames(props.className, classes[variant], classes.allVariants)}
            justify='center'
        >
            <Grid
                item
                sm={props.sm || 12}
                md={props.md || 10}
                xl={props.xl || 8}
                className={classes.item}
                {...props.innerProps}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}