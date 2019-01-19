import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Fab from '@material-ui/core/Fab'
import Drawer from '@material-ui/core/Drawer'
// Custom components
import BookingModal from '../../sections/BookingForm/BookingModal'

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: `${theme.shape.borderRadius}px !important`
    },
    textShadow: {
        textShadow: theme.custom.textShadow
    }
}))

export default React.memo(function CTA(props) {
    const { children, className, variant, color, size, ...other } = props
    const classes = useStyles(props)
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })
    const toggleDrawer = (side, open) => () => {
        setState({ ...state, [side]: open })
    }
    return (
        <React.Fragment>
            <Fab 
                color={color || 'secondary'} 
                variant={variant || 'extended'}
                className={classNames(className, classes.root, classes.textShadow)}
                size={size || 'medium'}
                {...other} 
                onClick={toggleDrawer('top', true)}>
                {children}
            </Fab>
            <Drawer anchor='top' open={state.top} onClose={toggleDrawer('top', false)}>
                <div
                    tabIndex={0}
                    role='button'                   
                    onKeyDown={toggleDrawer('top', false)}
                >
                    <BookingModal />
                </div>
            </Drawer>
        </React.Fragment>
    )
})