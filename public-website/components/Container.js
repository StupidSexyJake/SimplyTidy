import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        padding: props => props.padding || '4rem 2rem 4rem 2rem',
        justifyContent: props => props.justify || 'center',
    }
}))

export default function Container(props) {
    const { padding, justify, ...other } = props
    const classes = useStyles(props)
    return (
        <Grid container className={classes.root}>
            <Grid item sm={12} lg={8}>
                {props.children}
            </Grid>
        </Grid> 
    )
}