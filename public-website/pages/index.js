/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
// State provider
import { Provider } from '../state/store'
// Custom components
import Header from '../sections/Header'
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
import Fold from '../sections/Fold'
import PreBooking from '../sections/PreBooking'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import CTADivider from '../sections/CTADivider'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

export default function Index() {
    return (
        <React.Fragment>
            <Provider>
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
                    <PreBooking />
                </Fold>
                <BookingFormDrawer />
                <Features />
                <About />
                <Benefits />
                <CTADivider />
                <Services />
                <Guarantee />
                <Reviews />
                <Numbers />
                <CommonQuestions />
                <Footer />
            </Provider>
        </React.Fragment>
    )
}