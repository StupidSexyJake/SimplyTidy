import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
// Icons
import RatingIcon from '@material-ui/icons/Face'
import SecureIcon from '@material-ui/icons/CreditCard'
import OnlineBookingIcon from '@material-ui/icons/EventAvailable'
import GuaranteeIcon from '@material-ui/icons/ThumbUp'
import PricesIcon from '@material-ui/icons/AttachMoney'
import CommunicationIcon from '@material-ui/icons/QuestionAnswer'

function benefitList() {
    return [
             
        { value: 1, icon: <OnlineBookingIcon />, description: 'Easy Online Booking' },  
        { value: 5, icon: <PricesIcon />, description: 'Fixed Price Packages' }, 
        { value: 3, icon: <GuaranteeIcon />, description: 'Quality Guaranteed' },
        { value: 4, icon: <RatingIcon />, description: 'Experienced Cleaners' },        
        { value: 2, icon: <SecureIcon />, description: 'Cash Free Payment' },
        { value: 6, icon: <CommunicationIcon />, description: 'Seemless Communication' },
    ]
}

export default function Benefits() {
    const useStyles = makeStyles(theme => ({
        root: {
            padding: '1.5rem 0 2.25rem 0',
            background: theme.palette.primary.main
        },
        icon: {
            color: theme.palette.primary.contrastText,
            fontSize: '2.5rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        },
        description: {
            color: theme.palette.primary.contrastText,
            textAlign: 'center',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            lineHeight: '1'
        },
    }))
    const classes = useStyles()
    return (
        <Scrim hsl='' className={classes.root}>
                <Grid container>
                    { benefitList().map((props) => (
                        <Grid item xs={2} key={props.value}>
                            <Grid container direction='column' justify='center' alignItems='center'>
                                <Grid item>
                                    {React.cloneElement(props.icon, {className: classes.icon})}
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1' className={classes.description} component='p'>
                                        {props.description}
                                    </Typography>        
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
        </Scrim>
    )
}