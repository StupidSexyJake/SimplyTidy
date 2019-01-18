import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// Custom components
import Container from '../../components/Containers/Sections'

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
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit
    },
    heading: {
        marginBottom: 0.5 * theme.spacing.unit
    },
    content: {
        marginLeft: 2 * theme.spacing.unit,
        paddingTop: 1.5 * theme.spacing.unit,
        paddingBottom: 1.5 * theme.spacing.unit
    },
    button: {
        marginTop: 2.5 * theme.spacing.unit,
        marginLeft: 2 * theme.spacing.unit,
        color: theme.palette.text.secondary,
        minWidth: 20 * theme.spacing.unit
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
                            <img src='./static/logos/logo-primary.png' className={classes.image} />                                
                            <Divider className={classes.divider} />
                            <Typography variant='h6' component='p' className={classes.quote}>
                                <em>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </em>
                            </Typography>
                            <Divider className={classes.divider} />
                        </Grid>
                    </Hidden>
                    <Grid item md={8} className={classes.rightGrid}>
                        <Typography variant='h4' component='h2' className={classes.heading} align='left'>
                            Gold Coast's Best Cleaners
                        </Typography>
                        <Typography variant='body1' className={classes.content}>
                            You bought your home to live in it, not spend every hour cleaning it. You want to spend time with your family – you want to play games, watch movies, laugh, love, live. You shouldn’t have to live life from behind some cleaner and a rag. Let Gold Coast Maids take care of the work of cleaning your home so that you and your family can enjoy life.
                        </Typography>
                        <Typography variant='body1' className={classes.content}>
                            Across the Gold Coast customers rave about our customer services and affordable prices. We work with each customer to fit their needs specifically so that you never have to worry about “getting out of the house for the cleaning people.” The entire Gold Coast can’t be wrong – Gold Coast Maids are the number one cleaning service around!
                        </Typography>
                        <Typography variant='body1' className={classes.content}>
                            You bought your home to live in it, not spend every hour cleaning it. You want to spend time with your family – you want to play games, watch movies, laugh, love, live. You shouldn’t have to live life from behind some cleaner and a rag. Let Gold Coast Maids take care of the work of cleaning your home so that you and your family can enjoy life.
                        </Typography>
                        <Button variant='outlined' className={classes.button}>
                            Read more
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}