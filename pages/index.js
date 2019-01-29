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
import { CTAWithIcon } from '../components/Buttons'
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
    foldMobileCTA: {
        display: 'flex',
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
            <Header
                title="House Cleaning Services"
                metaDescription="Gold Coast Maids is a premier house cleaning service provider in Gold Coast QLD. Book a house cleaning job in 60 seconds!"
            />
            <Navbar />
            <Fold
                title='That Clean Home Feeling!'
                subtitle="You click. We clean. It's that simple."
                hero='homepage-hero-woman-relaxing'
                scrim='white'
                className={classes.titleProps}
                titleProps={{
                    component: 'p',
                }}
            >
                <Hidden xsDown implementation='css'>
                    <PreBooking />
                </Hidden>
                <Hidden smUp implementation='css'>
                    <CTAWithIcon
                        type='fab'
                        size='large'
                        className={classes.foldMobileCTA}
                    >
                        Book online now
                    </CTAWithIcon>
                </Hidden>
            </Fold>
            <Hidden smUp implementation='css'>
                <PreBooking_Mobile />
            </Hidden>
            <Hidden smDown implementation='css'>
                <Features />
            </Hidden>
            <About />
            <Benefits />
            <CTADivider />
            <Services />
            <Guarantee />
            <Reviews />
            <Hidden smDown>
                <Numbers />
                <CommonQuestions />
            </Hidden>
            <Footer />
            <BookingFormDrawer />
            <NavigationDrawer />
        </React.Fragment>
    )
}