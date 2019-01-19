/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
// Context
import { ClientContext } from '../state/ClientState'
import { ServiceContext } from '../state/ServiceState'
import { DrawerContext } from '../state/DrawerState'
import { BookingFormContext } from '../state/BookingFormState'
// Custom components
import Header from '../sections/Header'
// Sections
import Fold from '../sections/Fold'
import PreBooking from '../sections/PreBooking'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import Features from '../sections/Homepage/Features'
import About from '../sections/Homepage/AboutUs'
import Benefits from '../sections/Homepage/Benefits'
import Services from '../sections/Homepage/Services'
import CTADivider from '../sections/CTADivider'
import Guarantee from '../sections/Homepage/Guarantee'
import Reviews from '../sections/Homepage/Reviews'
import Numbers from '../sections/Homepage/Numbers'
import CommonQuestions from '../sections/Homepage/CommonQuestions'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

export default function Index() {
    // Drawer state
    const [drawerState, setDrawerState] = React.useState(false)
    // Booking form state
    const [bookingFormState, setBookingFormState] = React.useState(
        {
            page: 0,
            showAllRooms: false,
            unselectedExtras: [
                { label: 'Oven cleaning' },
                { label: 'Inside cupboards' },
                { label: 'Inside fridge' },
                { label: 'Inside cupboards' },
                { label: 'Inside fridge' },
            ]
        }
    )
    // Client state
    const [clientState, setClientState] = React.useState(
        {
            name: '',
            email: '',
            phone: '',
            street: '',
            suburb: '',
            postcode: '',
            state: '',
            reminders: true,
        }
    )
    // Service state
    const [serviceState, setServiceState] = React.useState(
        {
            service: 10,
            fixedPrice: true,
            bedrooms: 1,
            bathrooms: 1,
            livingAreas: 1,
            kitchens: 1,
            cleaners: 1,
            hours: 1,
            frequency: 'weekly',
            extras: []
        }
    )
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
                <DrawerContext.Provider value={{ setDrawerState }}>
                    <ClientContext.Provider value={{ clientState, setClientState }}>
                        <ServiceContext.Provider value={{ serviceState, setServiceState }}>
                            <PreBooking />
                        </ServiceContext.Provider>
                    </ClientContext.Provider>
                </DrawerContext.Provider>
            </Fold>
            <DrawerContext.Provider value={{ drawerState, setDrawerState }}>
                <BookingFormContext.Provider value={{ bookingFormState, setBookingFormState }}>
                    <ClientContext.Provider value={{ clientState, setClientState }}>
                        <ServiceContext.Provider value={{ serviceState, setServiceState }}>
                            <BookingFormDrawer />
                        </ServiceContext.Provider>
                    </ClientContext.Provider>
                </BookingFormContext.Provider>
            </DrawerContext.Provider>
            <Features />
            <About />
            <Benefits />
            <DrawerContext.Provider value={{ drawerState, setDrawerState }}>
                <CTADivider />
            </DrawerContext.Provider>
            <Services />
            <Guarantee />
            <DrawerContext.Provider value={{ drawerState, setDrawerState }}>
                <Reviews />
            </DrawerContext.Provider>
            <Numbers />
            <CommonQuestions />
            <Footer />
        </React.Fragment>
    )
}