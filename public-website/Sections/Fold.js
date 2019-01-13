import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import Navbar from './Navbar'
import Container from '../components/Container'

const size = (property, mapping) => props => mapping[props[property]]

const useStyles = makeStyles(theme => ({
    root: {
        height: size('size', {
            fit: 'fit-content',
            lg: '90vh',
            full: '100vh',
        }),
        background: props => `url("/static/backgrounds/${props.hero}") no-repeat 0 center/cover`,
    },
    container: {
        paddingTop: '8rem',
        paddingBottom: '4rem'
    },
    grid: {
        height: '100%',
    },
    title: {
        margin: '0 auto',
        padding: '0 0 3rem 0'
    },
}))

export default function Fold(props) {
    const { size, hero, title, scrim, ...other } = props
    const classes = useStyles(props)
    return (
        <Scrim hsl={props.scrim} className={classes.root}>
            <Navbar />
            <Container className={classes.container}>
                <Grid container justify='center' alignItems='center' className={classes.grid}>
                    <Grid item>
                        <Typography variant='h1' className={classes.title}>
                            {props.title}
                        </Typography>
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </Scrim>
    )
}