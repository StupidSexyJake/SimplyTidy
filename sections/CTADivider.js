import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Custom components
import { CallToActionButton } from '../components/Buttons'

// Create styles
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 60 * theme.spacing.unit,
        margin: '0 auto',
        paddingTop: 2.5 * theme.spacing.unit,
        paddingBottom: 4 * theme.spacing.unit,
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit
    },
}))

export default React.memo(function CTADivider() {
    // Define styles
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <CallToActionButton fullWidth size='large'>
                Get A Quote Now
            </CallToActionButton>
        </div>
    )
})
