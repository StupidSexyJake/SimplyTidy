import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Utils
import { VariantInput } from '../utils/functions'
// Material components
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
// Icons
import BookIcon from '@material-ui/icons/Launch'

// Set CTA component type
function ButtonType(props) {
    let ButtonVariant
    let variant
    if (props.cta) {
        const buttonTypes = {
            button: Button,
            fab: Fab,
        }
        ButtonVariant = buttonTypes[props.type]
        const variantType = {
            button: 'contained',
            fab: 'extended'
        }
        variant = variantType[props.type]
    } else {
        ButtonVariant = Button
        variant = props.variant
    }
    return <ButtonVariant variant={variant} {...props.buttonStyles} children={props.children} />
}
export function CallToActionButton(props) {
    // Get state contexts
    const { dispatch } = useContext(Store)
    return (
        <Button
            variant='contained'
            color='secondary'
            onClick={() => dispatch(toggleDrawer('bookingForm', true))}
            className={props.className}
            fullWidth={props.fullWidth}
        >
            {props.children}
        </Button>
    )
}

export function CTAWithIcon(props) {
    // Get state contexts
    const { dispatch } = useContext(Store)
    return (
        <ButtonWithIcon
            cta='true'
            icon={BookIcon}
            buttonStyles={{
                color: 'secondary',
                onClick: () => dispatch(toggleDrawer('bookingForm', true)),
                type: props.type || 'button',
                size: props.size || 'medium',
                ...props
            }}
        >
            {props.children}
        </ButtonWithIcon>
    )
}

const buttonWithIconsStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '18px',
        marginRight: 1 * theme.spacing.unit,
    },

}))
export function ButtonWithIcon(props) {
    // Define styles
    const classes = buttonWithIconsStyles()
    return (
        <ButtonType
            cta={props.cta}
            type={props.buttonStyles.type || 'button'}
            buttonStyles={props.buttonStyles}
        >
            <VariantInput
                inputVariant={props.icon}
                className={classNames(props.iconStyles, classes.icon)}
            />
            {props.children}
        </ButtonType>
    )
}