/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
// Custom components
import Header from '../sections/Header'
// Context
import {DrawerContext, ClientContext, ServiceContext, BookingFormContext} from '../components/Context'
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

const state = (type) => {
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
    const changeClientState = (name) => event => {
        setClientState({...clientState, [name]: event.target.value})
    }
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
    const changeServiceState = (name) => event => {
        setServiceState({...serviceState, [name]: event.target.value})
    }
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
    const changeBookingFormState = (key, val) => {
        setBookingFormState({...bookingFormState, [key]: val})
    }
    switch (type) {
        case 'client':
            return {clientState, changeClientState}
        case 'service':
            return {serviceState, changeServiceState}
        case 'bookingForm':
            return {bookingFormState, changeBookingFormState}
        default:
            return type
    }
}

export default function Index() {
    console.log('index render')
    return (
        <React.Fragment>
            <Header title="House Cleaning Services" />                
            <Navbar />
            <Fold 
                hero='homepage-hero-woman-relaxing.jpg'                
                scrim='white'
                title='That Clean Home Feeling!'
                titleProps= {{
                    component: 'p',
                }}
                subtitle="You click. We clean. It's that simple."
            >
                <DrawerContext>
                    <ClientContext.Provider value={state('client')}>
                        <ServiceContext.Provider value={state('service')}>
                            <PreBooking />
                        </ServiceContext.Provider>                        
                    </ClientContext.Provider>
                </DrawerContext>
            </Fold>
            <DrawerContext>
                <BookingFormContext.Provider value={state('bookingForm')}>
                    <ClientContext.Provider value={state('client')}>
                        <ServiceContext.Provider value={state('service')}>
                            <BookingFormDrawer />
                        </ServiceContext.Provider>
                    </ClientContext.Provider>
                </BookingFormContext.Provider>
            </DrawerContext>             
            <Features />        
            <About />  
            <Benefits />
            <DrawerContext>
                <CTADivider /> 
            </DrawerContext>              
            <Services />
            <Guarantee />
            <DrawerContext>
                <Reviews />
            </DrawerContext>           
            <Numbers />
            <CommonQuestions />
            <Footer />
        </React.Fragment>
    )
}