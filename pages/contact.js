/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
// Page specific sections
// Common sections
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'
import Fold from '../sections/Fold'
import Footer from '../sections/Footer'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import NavigationDrawer from '../sections/NavigationDrawer'

// Index styles
const useStyles = makeStyles(theme => ({

}))

export default function ContactUs() {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Header title="Contact Gold Coast Maids" />
            <Navbar />
            <Fold
                hero='homepage-hero-woman-relaxing.jpg'
                title="Contact Gold Coast Maids"
                subtitle="Call, chat or email. We're here to help"
            >
            </Fold>

            <Footer />
            <BookingFormDrawer /> {/* Fix service image code */}
            <NavigationDrawer />
        </React.Fragment>
    )
}