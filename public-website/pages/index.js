/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Typography from '@material-ui/core/Typography'
// Custom components
import Header from '../components/Header'
import PreBooking from '../components/PreBooking'
// Sections
import Fold from '../sections/Fold'
import Features from '../sections/Features'
import Services from '../sections/Services'
import ChooseUs from '../sections/ChooseUs'
import About from '../sections/AboutUs'
import Reviews from '../sections/Reviews'
import Guarantee from '../sections/Guarantee'
import Footer from '../sections/Footer'

const useStyles = makeStyles(theme => ({
}))

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title="House Cleaning Services" />
            <Fold 
                size='fit' 
                hero='homepage-hero-woman-relaxing.jpg'
                title='That Clean Home Feeling!'
                scrim='white'
            >                
                <PreBooking />
            </Fold>            
            <Features />
            <About /> 
            <Services />      
            <Guarantee />
            <Reviews />    
            <ChooseUs />
            <Footer />
        </div>
    )
}