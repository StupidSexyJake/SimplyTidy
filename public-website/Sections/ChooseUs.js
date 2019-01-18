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
    gridContainer: {
        background: theme.palette.primary.main,
    },
    container: {
        paddingTop: '2.5rem'
    },
    heading: {
        paddingBottom: '2rem',
        color: theme.palette.grey[50],
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    },
}))

export default function ChooseUs() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item className={classes.image} xs={6}>
                
                </Grid>
                <Grid item xs={6} className={classes.gridContainer}>
                    <Container className={classes.container}>
                        <Typography variant='h4' component='h2' className={classes.heading} align='left'>
                            Meet The Team
                        </Typography>
                        <Typography>
                            Fully Insured
                        </Typography>
                        <Typography>
                            Background Checked
                        </Typography>
                        <Typography>
                            Highly Experienced
                        </Typography>
                        <Typography>
                            Top Rated
                        </Typography>
                        <Typography>
                            Happy to Help
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </section>
    )
}