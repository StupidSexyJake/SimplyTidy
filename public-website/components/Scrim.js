import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Custom components
import Gradient from './Gradients'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            background: props => Gradient(props.hsl)
        }
    },
    bringForward: {
        height: '100%',
        width: '100%',
        position: 'relative',
    }
}))

export default function Scrim(props) {
    const { children, className } = props
    const classes = useStyles(props)
    return (
        <div className={classNames(classes.root, className)} >
            <div className={classes.bringForward}>
                {children}
            </div>
        </div>
    )
}