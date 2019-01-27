/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React, { useContext } from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
// Page specific sections
import Features from '../sections/Homepage/Features'
import About from '../sections/Homepage/AboutUs'
import Benefits from '../sections/Homepage/Benefits'
import Services from '../sections/Homepage/Services'
import Guarantee from '../sections/Homepage/Guarantee'
import Reviews from '../sections/Homepage/Reviews'
import Numbers from '../sections/Homepage/Numbers'
import CommonQuestions from '../sections/Homepage/CommonQuestions'
// Common sections
import Header from '../sections/Header'
import { CallToActionButton } from '../components/Buttons'
import Navbar from '../sections/Navbar'
import Fold from '../sections/Fold'
import { PreBooking, PreBooking_Mobile } from '../sections/PreBooking'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import CTADivider from '../sections/CTADivider'
import Footer from '../sections/Footer'
import NavigationDrawer from '../sections/NavigationDrawer'

// Index styles
const useStyles = makeStyles(theme => ({
    titleProps: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'right',
            fontSize: '10vw'
        },
    },
    preBooking: {
        marginTop: 8 * theme.spacing.unit,
    },
    foldMobileCTA: {
        display: 'block',
        marginTop: 3 * theme.spacing.unit,
        marginLeft: 'auto',
        minWidth: 'calc(66.67vw - 16px)'
    }
}))

export default function Index() {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Header title="House Cleaning Services" />
            <Navbar />
            <Fold
                hero='homepage-hero-woman-relaxing.jpg'
                scrim='white'
                title='That Clean Home Feeling!'
                className={classes.titleProps}
                titleProps={{
                    component: 'p',
                }}
                subtitle="You click. We clean. It's that simple."
            >
                <Hidden xsDown implementation='css'>
                    <PreBooking className={classes.preBooking} />
                </Hidden>
                <Hidden smUp implementation='css'>
                    <CallToActionButton
                        size='large'
                        className={classes.foldMobileCTA}
                    >
                        Book online now
                    </CallToActionButton>
                </Hidden>
            </Fold>
            <Hidden smDown implementation='css'>
                <Features /> {/* Formatting */}
            </Hidden>
            <Hidden smUp implementation='css'>
                <PreBooking_Mobile />
            </Hidden>
            <About />  {/* Split typography */}
            <Benefits /> {/* Split into components, use grid instead of maxWidth */}
            <CTADivider /> {/* Change to grid instead of maxWidth */}
            <Services />
            <Guarantee /> {/* rem to px */}
            <Reviews />
            <Hidden smDown>
                <Numbers /> {/* Split into components */}
                <CommonQuestions /> {/* rem to px */}
            </Hidden>
            <Footer />
            <BookingFormDrawer /> {/* Fix service image code */}
            <NavigationDrawer />
        </React.Fragment>
    )
}