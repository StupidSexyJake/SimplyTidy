import React from 'react'
// Components
import { Container } from '../../../components/Containers'
// Material components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
// import Fade from '@material-ui/core/Fade'

// Create styles
const useStyles = makeStyles(theme => ({
    fieldGroupContainer: {
        marginBottom: 4 * theme.spacing.unit,
        height: 'auto',
    },
    fieldGrouptitle: {
        paddingBottom: 0
    },
    fieldGroupsubtitle: {
        paddingBottom: theme.spacing.unit
    },
    sidebarContainer: {
        paddingTop: 4 * theme.spacing.unit,
        paddingBottom: 4 * theme.spacing.unit,
        height: 'fit-content'
    },
    sidebarTitleContainer: {
        marginBottom: 0.5 * theme.spacing.unit
    },
    sidebarTitle: {
        lineHeight: 1.25,
        paddingBottom: theme.spacing.unit
    }
}))
export function FieldGroup(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Container md={12} className={classes.fieldGroupContainer}>
            <Typography
                variant='h6'
                component='h3'
                align='left'
                className={classes.fieldGrouptitle}
            >
                {props.title}
            </Typography>
            <Typography
                variant='caption'
                align='left'
                className={classes.fieldGroupsubtitle}
            >
                {props.description}
            </Typography>
            {props.children}
        </Container>
    )
}

export function ExpandGroup(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Collapse in={props.expandState} timeout={props.timeout || 300} className={props.className}>
            <Container md={12} className={classes.fieldGroupContainer}>
                {props.title && <Typography
                    variant='h6'
                    component='h3'
                    align='left'
                    className={classes.fieldGrouptitle}
                >
                    {props.title}
                </Typography>}
                {props.description && <Typography
                    variant='caption'
                    align='left'
                    className={classes.fieldGroupsubtitle}
                >
                    {props.description}
                </Typography>}
                {props.children}
            </Container>
        </ Collapse>
    )
}

// Not implemented
// export function FadeSelectGroup(props) {
//     return (
//         <Fade in={props.checked}>
//             <div>
//                 {props.children}
//             </div>
//         </Fade>
//     )
// }

export function SidebarGroup(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Container md={12} className={classes.sidebarContainer}>
            <div className={classes.sidebarTitleContainer}>
                <Typography
                    variant={props.titleVariant || 'h6'}
                    component={props.component || 'p'}
                    align={props.align || 'center'}
                    className={classes.sidebarTitle}
                >
                    {props.title}
                </Typography>
            </div>
            <div className={classes.sidebarContent}>
                <Grid container alignItems='center'>
                    {props.children}
                </Grid>
            </div>
        </Container>
    )
}