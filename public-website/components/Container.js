import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    container: {
        padding: props => props.padding || '4rem 2rem',
        justifyContent: props => props.justify || 'center',
        height: '100%',
    },
    item: {
        width: '100%'
    }
}))

export default function Container(props) {
    const { padding, justify, classes, children, className, ...other } = props
    const override = useStyles(props)
    return (
        <Grid container className={classNames(override.container, className)} {...other}>
            <Grid item sm={12} lg={10} className={override.item}>
                {props.children}
            </Grid>
        </Grid> 
    )
}