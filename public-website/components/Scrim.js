import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Custom components
import Gradient from './Gradients'

export default function Scrim(props) {
    // Create styles
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
    // Define styles
    const classes = useStyles(props)
    return (
        <div className={classNames(classes.root, props.className)} >
            <div className={classes.bringForward}>
                {props.children}
            </div>
        </div>
    )
}