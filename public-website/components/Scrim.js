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
    scrim: {
        height: '100%',
        width: '100%',
        position: 'relative',
    }
}))

export default function Scrim(props) {
    const { hsl, background, classes, children, className, ...other } = props
    const override = useStyles(props)
    if (hsl) {
        return (
            <section className={classNames(override.root, className)} {...other} >
                <div className={override.scrim}>
                    {children}
                </div>            
            </section>
        )
    } else {
        return (
            <section className={className} {...other} >
                {children}  
            </section>
        )
    }
}