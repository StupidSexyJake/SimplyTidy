import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// Icons
import CleanersIcon from '@material-ui/icons/Face'
import PaymentIcon from '@material-ui/icons/Payment'
import OnlineBookingIcon from '@material-ui/icons/EventAvailable'
import GuaranteeIcon from '@material-ui/icons/ThumbUp'
import PricesIcon from '@material-ui/icons/AttachMoney'
import CommunicationIcon from '@material-ui/icons/QuestionAnswer'

const benefitList = [
    { icon: <OnlineBookingIcon />, description: 'Easy Online Booking' },  
    { icon: <PricesIcon />, description: 'Fixed Price Packages' }, 
    { icon: <GuaranteeIcon />, description: 'Quality Guaranteed' },
    { icon: <CleanersIcon />, description: 'Experienced Cleaners', skip: true },        
    { icon: <PaymentIcon />, description: 'Cash Free Payment' },
    { icon: <CommunicationIcon />, description: 'Seemless Communication', skip: true },
]

export default React.memo(function Features() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            paddingTop: 3 * theme.spacing.unit,
            paddingBottom: 3 * theme.spacing.unit,
            background: theme.palette.primary.main
        },
        icon: {
            color: theme.palette.primary.contrastText,
            fontSize: '2.5rem',
            textShadow: theme.custom.textShadow,
            marginBottom: theme.spacing.unit
        },
        description: {
            color: theme.palette.primary.contrastText,
            textShadow: theme.custom.textShadow
        },
    }))
    // Define styles
    const classes = useStyles()

    return (
        <Grid container component='section' className={classes.root} justify='center' alignItems='center' spacing={16}>
            {benefitList.map((benefit, index) => (
                <Grid item lg={2} md={3} sm={3} xs={3} key={index}>
                    <Grid container direction='column' justify='center' alignItems='center'>
                        <Grid item>
                            {React.cloneElement(benefit.icon, {className: classes.icon})}
                        </Grid>
                        <Hidden smDown>
                            <Grid item>
                                <Typography variant='subtitle1' className={classes.description} component='p'>
                                    {benefit.description}
                                </Typography>        
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
})