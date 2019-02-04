import React from 'react'
import classNames from 'classnames'
// Components
import { Wrapper } from '../../../components/Wrappers'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
// import Fade from '@material-ui/core/Fade'

// Create styles
const useStyles = makeStyles(theme => ({
    fieldGroupContainer: {
        marginBottom: 4 * theme.spacing.unit,
        height: 'auto',
    },
    fieldGrouptitle: {
        paddingBottom: 0,
        color: theme.palette.primary.dark
    },
    fieldGroupsubtitle: {
        paddingBottom: theme.spacing.unit
    },
    sidebarContainer: {
        marginBottom: 4 * theme.spacing.unit,
        height: 'fit-content'
    },
    sidebarTitleContainer: {
        marginBottom: 0.5 * theme.spacing.unit
    },
    sidebarTitle: {
        lineHeight: 1.25,
        paddingBottom: theme.spacing.unit,
        color: theme.palette.primary.dark
    }
}))

export function FormGroup(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Wrapper
            md={12}
            className={classes.fieldGroupContainer}
        >
            <Typography
                variant='h5'
                component='h3'
                align='left'
                className={classes.fieldGrouptitle}
            >
                {props.title}
            </Typography>
            <Typography
                variant='body2'
                className={classes.fieldGroupsubtitle}
            >
                {props.description}
            </Typography>
            {props.children}
        </Wrapper>
    )
}

export function ExpandGroup(props) {
    return (
        <Collapse
            in={props.expandState}
            timeout={props.timeout || 400}
            className={props.className}
        >
            {props.children}
        </ Collapse>
    )
}

export function SidebarGroup(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Wrapper
            md={12}
            className={classNames(classes.sidebarContainer, props.className)}
        >
            <div className={classes.sidebarTitleContainer}>
                <Typography
                    variant={props.titleVariant || 'h5'}
                    component={props.component || 'p'}
                    align={props.align || 'left'}
                    className={classes.sidebarTitle}
                >
                    {props.title}
                </Typography>
            </div>
            <div className={classes.sidebarContent}>
                {props.children}
            </div>
        </Wrapper>
    )
}