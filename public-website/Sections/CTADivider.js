import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Custom components
import Button_CTA from '../components/Buttons'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 86 * theme.spacing.unit,
        margin: '0 auto',
        paddingTop: 6 * theme.spacing.unit,
        paddingBottom: 6 * theme.spacing.unit,
        paddingLeft: 4 * theme.spacing.unit,
        paddingRight: 4 * theme.spacing.unit,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}))

export default React.memo(function CTADivider(props) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Button_CTA fullWidth size='large'>
                Get A Quote Now
            </Button_CTA>
        </div>
    )
})
