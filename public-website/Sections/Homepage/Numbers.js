import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import Container from '../../components/Containers'
import Scrim from '../../components/Scrim'
// Colors

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.main,
    },
    container: {
        padding: '3rem 2rem'
    },
    description: {
        color: theme.palette.primary.contrastText,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    },
    number: {
        color: theme.palette.primary.contrastText,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        padding: 0
    },
}))

export default React.memo(function Numbers() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Scrim hsl='primaryLight'>
                <Container className={classes.container}>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="p" className={classes.description}>
                                Bookings Completed
                            </Typography>
                            <Typography variant="h3" component="p" className={classes.number}>
                                2,452
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="p" className={classes.description}>
                                Happy Clients
                            </Typography>
                            <Typography variant="h3" component="p" className={classes.number}>
                                184
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="p" className={classes.description}>
                                Google Reviews
                            </Typography>
                            <Typography variant="h3" component="p" className={classes.number}>
                                5/5
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="p" className={classes.description}>
                                Teams Available
                            </Typography>
                            <Typography variant="h3" component="p" className={classes.number}>
                                28
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Container>
            </Scrim>
            
        </section>
    )
})