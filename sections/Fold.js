import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import { Wrapper } from '../components/Wrappers'

// Create styles
const useStyles = makeStyles(theme => ({
    scrim: {
        '@media only screen and (max-width: 319px)': {
            background: props => `url('/static/backgrounds/${props.hero}-319.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 320px)': {
            background: props => `url('/static/backgrounds/${props.hero}-640.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 641px)': {
            background: props => `url('/static/backgrounds/${props.hero}-768.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 768px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1024.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1025px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1280.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1281px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1366.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1367px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1440.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1441px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1600.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1601px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1920.jpg') no-repeat 0 center/cover`
        },
        '@media only screen and (min-width: 1921px)': {
            background: props => `url('/static/backgrounds/${props.hero}-1921.jpg') no-repeat 0 center/cover`
        }
    },
    titleSection: {
        marginBottom: props => props.children ? 8 * theme.spacing.unit : undefined,
        [theme.breakpoints.down('sm')]: {
            marginBottom: props => props.children ? 3 * theme.spacing.unit : undefined,
        }
    }
}))

export default function Fold(props) {
    // Define styles
    const classes = useStyles(props)
    return (
        <section>
            <Scrim
                hsl={props.scrim}
                className={classes.scrim}>
                <Wrapper variant='fold'>
                    <div className={classes.titleSection}>
                        <Typography
                            variant={props.titleProps && props.titleProps.variant || 'h1'}
                            component={props.titleProps && props.titleProps.component}
                            color={props.titleProps && props.titleProps.color}
                            className={props.className}
                            {...props.titleProps}
                        >
                            {props.title}
                        </Typography>
                        <Hidden
                            smDown
                            implementation='css'
                        >
                            <Typography
                                variant='h4'
                                component='p'
                                {...props.subtitleProps}
                            >
                                {props.subtitle}
                            </Typography>
                        </Hidden>
                    </div>
                    {props.children}
                </Wrapper>
            </Scrim>
        </section>
    )
}