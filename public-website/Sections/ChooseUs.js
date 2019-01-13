import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import Container from '../components/Container'

const useStyles = makeStyles(theme => ({
    root: {
        height: '60vh'
    },
    grid: {
        height: '100%'
    },
    image: {
        background: 'url("/static/backgrounds/experienced-cleaners.jpg") no-repeat 0 20%/cover',
    },
    container: {
        background: theme.palette.primary.light
    },
    heading: {
        paddingBottom: '2rem'
    },
}))

export default function ChooseUs() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.image} xs={6}>
                
                </Grid>
                <Grid item xs={6} className={classes.container}>
                    <Container>
                        <Typography variant='h4' component='h2' className={classes.heading}>
                            The Cleaning Professionals
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </section>
    )
}