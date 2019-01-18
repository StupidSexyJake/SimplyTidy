import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Button from '@material-ui/core/Button'
// Context
import {DrawerContext} from '../Context'

const useStyles = makeStyles(theme => ({
    textShadow: {
        textShadow: theme.custom.textShadow
    }
}))

export default function CTA(props) {
    const classes = useStyles()    
    const { children, className, variant, color, size, ...other } = props    
    const {drawerDispatch} = React.useContext(DrawerContext)
    const textShadow = function textShadowOn() {
        if (!variant || variant === 'fab' || variant === 'contained') {
            return classNames(className, classes.textShadow)
        } else {
            return className
        }
    }
    return (
        <React.Fragment>
            <Button 
                color={color || 'secondary'} 
                variant={variant || 'contained'}
                className={textShadow()}
                size={size || 'medium'}
                {...other} 
                onClick={() => drawerDispatch('open')}
            >
                {children}
            </Button>
        </React.Fragment>
    )
}