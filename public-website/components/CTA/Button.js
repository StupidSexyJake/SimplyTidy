import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Button from '@material-ui/core/Button'
// Context
import {DrawerContext} from '../../state/DrawerState'

export default React.memo(function CTA(props) {
    // Create styles
    const useStyles = makeStyles(theme => ({
        textShadow: {
            textShadow: theme.custom.textShadow
        }
    }))
    // Define styles
    const classes = useStyles()    
    // Get state contexts
    const { setDrawerState } = React.useContext(DrawerContext)
    // Handle click events
    const handleClick = (val) => {
        setDrawerState(val)
    }
    return (
        <React.Fragment>
            <Button 
                color='secondary'
                variant={props.variant || 'contained'}
                className={classNames(props.className, classes.textShadow)}
                size={props.size || 'medium'}
                {...props} 
                onClick={() => handleClick(true)}
            >
                {props.children}
            </Button>
        </React.Fragment>
    )
})