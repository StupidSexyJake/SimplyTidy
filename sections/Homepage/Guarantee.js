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

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url("/static/backgrounds/testimonials.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '15% top',
        }
    },
    container: {
        padding: '3.5rem 2rem',
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

export default React.memo(function Navbar() {
    // Define styles
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Scrim hsl='primaryDark'>
                <Wrapper className={classes.container}>
                    <Grid container spacing={16} className={classes.gridContainer} alignItems='center'>
                        <Grid item sm={12} md={8}>
                            <Typography variant='h2' className={classes.heading}>
                                Your Happiness Guaranteed
                            </Typography>
                            <Typography variant='h5' component='p' className={classes.description}>
                                If your cleaning isn’t up to the quality you expect, we’ll come back and re-clean for free. We expect quality and you should too.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={4} className={classes.iconContainer}>
                            <GuaranteeIcon className={classes.icon} />
                        </Grid>
                    </Grid>
                </Wrapper>
            </Scrim>
        </section>

    )
})