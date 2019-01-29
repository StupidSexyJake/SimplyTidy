import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Icons
import GuaranteeIcon from '@material-ui/icons/ThumbUp'
// Custom components
import Scrim from '../../components/Scrim'
import { Wrapper } from '../../components/Wrappers'

const backgroundImage = 'testimonials'

const useStyles = makeStyles(theme => ({
    root: {
        '@media only screen and (max-width: 319px)': {
            background: `url('/static/backgrounds/${backgroundImage}-319.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 320px)': {
            background: `url('/static/backgrounds/${backgroundImage}-640.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 641px)': {
            background: `url('/static/backgrounds/${backgroundImage}-768.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 768px)': {
            background: `url('/static/backgrounds/${backgroundImage}-1024.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 1025px)': {
            background: `url('/static/backgrounds/${backgroundImage}-1280.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 1281px)': {
            background: `url('/static/backgrounds/${backgroundImage}-1366.jpg') no-repeat 0 top/cover`
        },
        '@media only screen and (min-width: 1367px)': {
            background: `url('/static/backgrounds/${backgroundImage}-1440.jpg') no-repeat 0 top/cover`
        },
        // '@media only screen and (min-width: 1441px)': {
        //     background: `url('/static/backgrounds/${backgroundImage}-1440.jpg') no-repeat 0 top/cover`  // Need bigger image from here
        // },
        // '@media only screen and (min-width: 1601px)': {
        //     background: `url('/static/backgrounds/${backgroundImage}-1440.jpg') no-repeat 0 top/cover`
        // },
        // '@media only screen and (min-width: 1921px)': {
        //     background: `url('/static/backgrounds/${backgroundImage}-1440.jpg') no-repeat 0 top/cover`
        // },
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '15% top',
        }
    },
    container: {
        paddingTop: 7 * theme.spacing.unit,
        paddingBottom: 7 * theme.spacing.unit,
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit
    },
    heading: {
        color: theme.palette.secondary.contrastText,
        marginBottom: 3 * theme.spacing.unit,
        textShadow: theme.custom.textShadow,
    },
    description: {
        color: theme.palette.secondary.contrastText,
        padding: 0,
        textShadow: theme.custom.textShadow,
    },
    iconContainer: {
        textAlign: 'center',
        margin: '0 auto'
    },
    icon: {
        fontSize: '16rem',
        color: theme.palette.secondary.contrastText,
        textShadow: theme.custom.textShadow,
        [theme.breakpoints.down('xs')]: {
            fontSize: '8rem',
        }
    }
}))

export default function Guarantee(props) {
    // Define styles
    const classes = useStyles(props)
    return (
        <section className={classes.root}>
            <Scrim hsl='primaryDark'>
                <Wrapper className={classes.container}>
                    <Grid container
                        spacing={16}
                        alignItems='center'
                    >
                        <Grid item
                            sm={12}
                            md={8}
                        >
                            <Typography
                                variant='h2'
                                className={classes.heading}
                            >
                                Your Happiness Guaranteed
                            </Typography>
                            <Typography
                                variant='h5'
                                component='p'
                                className={classes.description}
                            >
                                If your cleaning isn’t up to the quality you expect, we’ll come back and re-clean for free. We expect quality and you should too.
                            </Typography>
                        </Grid>
                        <Grid item
                            sm={12}
                            md={4}
                            className={classes.iconContainer}
                        >
                            <GuaranteeIcon className={classes.icon} />
                        </Grid>
                    </Grid>
                </Wrapper>
            </Scrim>
        </section>
    )
}