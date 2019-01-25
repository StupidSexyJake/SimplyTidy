/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React, { useContext } from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
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
import Fold from '../sections/Fold'
import PreBooking from '../sections/PreBooking'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import CTADivider from '../sections/CTADivider'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import NavigationDrawer from '../sections/NavigationDrawer'

// Index styles
const useStyles = makeStyles(theme => ({
    preBooking: {
        marginTop: 8 * theme.spacing.unit,
    },
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
                titleProps={{
                    component: 'p',
                }}
                subtitle="You click. We clean. It's that simple."
            >
                <PreBooking className={classes.preBooking} />
            </Fold>
            <Hidden smDown>
                <Features /> {/* Formatting */}
            </Hidden>
            <About />  {/* Split typography */}
            <Benefits /> {/* Split into components, use grid instead of maxWidth */}
            <CTADivider /> {/* Change to grid instead of maxWidth */}
            <Services />
            <Guarantee /> {/* rem to px */}
            <Reviews />
            <Numbers /> {/* Split into components */}
            <CommonQuestions /> {/* rem to px */}
            <Footer />
            <BookingFormDrawer /> {/* Fix service image code */}
            <NavigationDrawer />
        </React.Fragment>
    )
}