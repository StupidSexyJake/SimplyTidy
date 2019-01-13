import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// Custom components
import Container from '../components/Container'
import Logo from '../components/Logo'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.light
    },
    leftGrid: {
        textAlign: 'center'
    },
    quote: {
        color: theme.palette.primary.main
    },
    divider: {
        margin: '1rem 0'
    },
    heading: {
        textAlign: 'left',
        paddingBottom: '2rem'
    },
    content: {
        padding: '0 0 1.5rem 1rem'
    },
    cta: {
        color: '#597a96',
        margin: '1rem 0 0 1rem',
    }
}))

export default function AboutUs() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Container>
                <Grid container alignItems='center' spacing={40}>
                    <Hidden smDown>
                    <Grid item xs={4} className={classes.leftGrid}>
                        <Logo height='4.5rem' />
                        <Divider className={classes.divider} />
                        <Typography variant='h6' component='p' className={classes.quote}>
                            <em>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </em>
                        </Typography>
                        <Divider className={classes.divider} />
                    </Grid>
                    </Hidden>
                    <Grid item sm={12} md={8} className={classes.rightGrid}>
                        <Typography variant='h4' component='h2' className={classes.heading}>
                            Gold Coast's Best Cleaners
                        </Typography>
                        <Typography variant='body1' className={classes.content}>
                        You bought your home to live in it, not spend every hour cleaning it. You want to spend time with your family – you want to play games, watch movies, laugh, love, live. You shouldn’t have to live life from behind some cleaner and a rag. Let Gold Coast Maids take care of the work of cleaning your home so that you and your family can enjoy life.                  
                        </Typography>
                        <Typography variant='body1' className={classes.content}>
                        Across the Gold Coast customers rave about our customer services and affordable prices. We work with each customer to fit their needs specifically so that you never have to worry about “getting out of the house for the cleaning people.” The entire Gold Coast can’t be wrong – Gold Coast Maids are the number one cleaning service around!              
                        </Typography>
                        <Button variant='outlined' className={classes.cta}>
                            Read more
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}