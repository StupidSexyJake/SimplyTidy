import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import Container from '../components/Containers/Sections';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        height: '15rem',
        background: theme.palette.primary.dark,
        color: theme.palette.background.paper
    },
    container: {
        padding: '2rem'
    },
    divider: {
        backgroundColor: theme.palette.grey[700]
    }
}))

export default function Footer() {
    console.log('footer render')
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item xs={8}>
                        LOGO
                        <Grid container>
                            <Grid item xs={2}>
                                About GCM
                            </Grid>
                            <Grid item xs={2}>
                                Careers
                            </Grid>
                            <Grid item xs={2}>
                                Press
                            </Grid>
                            <Grid item xs={2}>
                                Customer Care
                            </Grid>
                            <Grid item xs={2}>
                                Login
                            </Grid>
                        </Grid>                       
                    </Grid>
                    <Grid item xs={4}>
                        Sign Up
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container>
                    <Grid item xs={8}>
                        Terms of Use| Privacy Policy | Sitemap
                    </Grid>
                    <Grid item xs={4}>
                        Facebook Twitter Google+
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}