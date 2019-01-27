import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// Icons
import CleanersIcon from '@material-ui/icons/Face'
import PaymentIcon from '@material-ui/icons/Payment'
import OnlineBookingIcon from '@material-ui/icons/EventAvailable'
import GuaranteeIcon from '@material-ui/icons/ThumbUp'
import PricesIcon from '@material-ui/icons/CardGiftcard'
import CommunicationIcon from '@material-ui/icons/QuestionAnswer'

const featuresList = [
    { key: 1, icon: <OnlineBookingIcon />, description: 'Easy Online Booking' },
    { key: 2, icon: <PricesIcon />, description: 'Fixed Price Packages', hideFirst: true },
    { key: 3, icon: <GuaranteeIcon />, description: 'Quality Guaranteed' },
    { key: 4, icon: <CleanersIcon />, description: 'Experienced Cleaners' },
    { key: 5, icon: <PaymentIcon />, description: 'Cash Free Payment' },
    { key: 6, icon: <CommunicationIcon />, description: 'Seemless Communication', hideFirst: true },
]

// Create styles
const useStyles = makeStyles(theme => ({
    iconContainer: {
        height: '2.5rem'
    },
    icon: {
        color: theme.palette.primary.contrastText,
        fontSize: '2.5rem',
        textShadow: theme.custom.textShadow,
    },
    description: {
        marginTop: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
        textShadow: theme.custom.textShadow
    },
}))

function FeatureItem(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Grid item lg={2} md={3} sm={3} xs={3}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item className={classes.iconContainer}>
                    {React.cloneElement(props.icon, { className: classes.icon })}
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' className={classes.description} component='p'>
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function Features() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            paddingTop: 3 * theme.spacing.unit,
            paddingBottom: 3 * theme.spacing.unit,
            background: theme.palette.primary.main
        }
    }))
    // Define styles
    const classes = useStyles()
    return (
        <section className={classes.root} >
            <Grid container justify='center' alignItems='center'>
                {featuresList.map((feature) => (
                    <React.Fragment key={feature.key}>
                        {feature.hideFirst ?
                            <Hidden mdDown>
                                <FeatureItem
                                    icon={feature.icon}
                                    description={feature.description}
                                />
                            </Hidden>
                            :
                            <FeatureItem
                                icon={feature.icon}
                                description={feature.description}
                            />
                        }
                    </React.Fragment>
                ))}
            </Grid>
        </section>
    )
}