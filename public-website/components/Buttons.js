import { Fragment, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// State
import { Store } from '../state/store'
// Actions
import { toggleBookingFormDrawer } from '../state/actions'
// Material components
import Button from '@material-ui/core/Button'

export default function CTA(props) {
    // Get state contexts
    const { dispatch } = useContext(Store)
    // Create styles
    const useStyles = makeStyles(theme => ({
        textShadow: {
            textShadow: theme.custom.textShadow
        }
    }))
    // Define styles
    const classes = useStyles()
    return (
        <Fragment>
            <Button
                color='secondary'
                variant={props.variant || 'contained'}
                className={classNames(props.className, classes.textShadow)}
                size={props.size || 'medium'}
                {...props}
                onClick={() => dispatch(toggleBookingFormDrawer(true))}
            >
                {props.children}
            </Button>
        </Fragment>
    )
}