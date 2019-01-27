import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import { Wrapper } from '../components/Wrapper'

const useStyles = makeStyles(theme => ({
    root: {
        height: '30rem',
    },
    subtitle: {
        paddingBottom: '3rem'
    },
}))

export default React.memo(function ContactForm() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Wrapper>
                <Typography variant='h3' component='h2'>
                    Get In Touch
                </Typography>
                <Typography variant='h6' component='p' className={classes.subtitle} align='center'>
                    Lorem ipsum dolor sit amet sed do eiusmod tempor.
                </Typography>
            </Wrapper>
        </section>
    )
})