import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Icons
import GuaranteeIcon from '@material-ui/icons/ThumbUp'
// Custom components
import Scrim from '../../components/Scrim'
import Container from '../../components/Containers/Sections'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'url("/static/backgrounds/testimonials.jpg") no-repeat 0 top/cover'
    },
    container: {
        padding: '3.5rem 2rem',
    },
    center: {
        textAlign: 'center'
    },
    heading: {
        color: theme.palette.secondary.contrastText,
        padding:'0 0 1.5rem 0'
    },
    description: {
        color: 'rgba(255,255,255,1)',
        padding: 0
    },
    underline: {
    },
    icon: {
        fontSize: '16rem',
        color: 'rgba(255,255,255,1)'
    }
}))

export default function Navbar() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Scrim hsl='primaryDark'>
                <Container className={classes.container}>                
                    <Grid container spacing={16} className={classes.gridContainer} alignItems='center'>
                        <Grid item xs={8}>
                            <Typography variant='h3' component='h2' className={classes.heading}>
                                Your Happiness <span className={classes.underline}>Guaranteed</span>
                            </Typography>
                            <Typography variant='h6' component='p' className={classes.description}>
                                If your cleaning isn’t up to the quality you expect, we’ll come back and re-clean for free. We expect quality and you should too.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className={classes.center}>
                            <GuaranteeIcon className={classes.icon} />
                        </Grid>
                    </Grid>
                </Container>
            </Scrim>
        </section>
        
    )
}