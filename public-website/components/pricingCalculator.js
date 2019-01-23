import React, { useContext } from 'react'
// State
import { Store } from '../state/store'

// Define extras prices
const extrasPricing = {
    1: 50,
    2: 30,
    3: 25,
    4: 45,
    5: 50
}
// Define minimum callout value
const minimumPrice = 100

export function totalPrice(props) {
    // Initiate variables
    let total = 0,
        extrasTotal = 0,
        flagfall = 0,
        discount = 1,
        bedrooms = 0,
        bathrooms = 0,
        kitchens = 0,
        livingAreas = 0,
        hourly = 0,
        perBedroom = 0,
        perBathroom = 0,
        perLivingArea = 0,
        perKitchen = 0,
        perHour = 0

    // Get state
    const { state } = useContext(Store)
    // Set flagfall and per room prices
    switch (state.service.service) {
        case 10:
            // Calculate discount amounts for fixed price routine services
            switch (state.service.frequency) {
                case '10':
                    discount = 0.75
                    break
                case '20':
                    discount = 0.85
                    break
                case '30':
                    discount = 0.9
                    break
                default: null
            }
        case 20:
            flagfall = 30
            perBedroom = 25
            perBathroom = 30
            perLivingArea = 25
            perKitchen = 30
            // Calculate subtotal for fixed price vs hourly rate
            switch (state.service.fixedPrice) {
                case true:
                    bedrooms = state.service.bedrooms * perBedroom
                    bathrooms = state.service.bathrooms * perBathroom
                    kitchens = state.service.kitchens * perKitchen
                    livingAreas = state.service.livingAreas * perLivingArea
                    // Calculate extras prices
                    const extras = state.service.extras
                    extras.forEach(selectedExtra => {
                        extrasTotal += extrasPricing[selectedExtra.key]
                    })
                    total = (flagfall + bedrooms + bathrooms + kitchens + livingAreas + extrasTotal) * discount
                    break
                case false:
                    perHour = 50
                    hourly = (state.service.hours * state.service.cleaners) * perHour
                    total = hourly
                    break
                default: null
                    break
            }
        case 30:

        default: null
    }
    return Math.max(total, minimumPrice).toFixed(2)
}