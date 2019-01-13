import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
// Custom components
import BookingModal from './BookingModal'
import Gradient from './Gradients'
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    },
}))

export function CTA(props) {
    const { classes, children, className, ...other } = props
    const override = useStyles(props)
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
            <Button color='secondary' variant='contained' className={classNames(override.root, className)} {...other} onClick={toggleDrawer('top', true)}>
                {children}
            </Button>
            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                <div
                    tabIndex={0}
                    role="button"                    
                    onKeyDown={toggleDrawer('top', false)}
                >
                    <BookingModal />
                </div>
            </Drawer>
        </React.Fragment>
    )
}