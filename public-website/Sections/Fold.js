import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
// Custom components
import Navbar from '../components/Navbar'
import Container from '../components/Container'

const size = (property, mapping) => props => mapping[props[property]]

const useStyles = makeStyles(theme => ({
    root: {
        height: size('size',{
            fit: 'fit-content',
            lg: '90vh',
            full: '100vh'
        }),
        background: props => `url("/static/backgrounds/${ props.hero }") no-repeat 0 center/cover;`
    },
}))

export default function Fold(props) {
    const { size, hero, ...other } = props
    const classes = useStyles(props)
    return (
        <section className={classes.root}>
            <Navbar />
            <Container>
                {props.children}
            </Container>
        </section>
    )
}