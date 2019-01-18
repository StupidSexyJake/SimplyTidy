import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
        paddingTop: props => (props.paddingTop || 7.5) * theme.spacing.unit,
        paddingBottom: props => (props.paddingBottom || 10) * theme.spacing.unit,
        height: props => props.height || '100%',
    },
    item: {
        width: '100%'
    }
}))

export default function Sections(props) {
    const { children, className, paddingTop, xs, sm, md, lg, xl, paddingBottom, itemProps, ...other } = props
    const classes = useStyles(props)
    return (
        <Grid container 
            className={classNames(classes.container, className)}
            justify='center'
            {...other}
        >
            <Grid item 
                sm={sm || 12} 
                md={md || 10} 
                className={classes.item} 
                {...itemProps}>
                {children}
            </Grid>
        </Grid> 
    )
}