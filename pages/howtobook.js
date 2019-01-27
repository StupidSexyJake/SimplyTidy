/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React, { useContext } from 'react'
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

export default function HowToBook() {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Header title="How to book a cleaning service" />
            <Navbar />
            <Fold
                hero='homepage-hero-woman-relaxing.jpg'
                title="How To Book"
                subtitle="The easy way to a clean home"
            >
            </Fold>

            <Footer />
            <BookingFormDrawer /> {/* Fix service image code */}
            <NavigationDrawer />
        </React.Fragment>
    )
}