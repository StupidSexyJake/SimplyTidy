import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// State
import { Store } from '../state/store'
// Actions
import { toggleBookingFormDrawer } from '../state/actions'
// Material components
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'

// CallToActionButton styles
const callToActionButtonStyles = makeStyles(theme => ({
    root: {
        borderRadius: `${theme.shape.borderRadius}px !important`,
        textShadow: theme.custom.textShadow
    }
}))

export function CallToActionButton(props) {
    // Get state contexts
    const { dispatch } = useContext(Store)
    // Define styles
    const classes = callToActionButtonStyles()
    // Set button component
    function ButtonType(props) {
        const buttonTypes = {
            button: Button,
            fab: Fab
        }
        const ButtonVariant = buttonTypes[props.type]
        const variantType = {
            button: 'contained',
            fab: 'extended'
        }
        const variant = variantType[props.type]
        return <ButtonVariant variant={variant} {...props} />
    }
    return (
        <ButtonType
            type={props.type || 'button'}
            color='secondary'
            className={classNames(props.className, classes.root)}
            size={props.size || 'medium'}
            {...props}
            onClick={() => dispatch(toggleBookingFormDrawer(true))}
        >
            {props.children}
        </ButtonType>
    )
}