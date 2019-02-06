import React, { useContext } from 'react'
// State
import { Store } from '../state/store'
import {
    hourlyRateMap
} from '../data/serviceData'

// Calculate hourly rate
function getHourlyRateSubtotal(data) {
    // Get state
    const { state } = useContext(Store)
    // Define variables
    const cleaners = data.values.cleaners.values[state.service.cleaners].value
    const hoursMin = data.values.hours.values[state.service.hours].minValue
    const hoursMax = data.values.hours.values[state.service.hours].maxValue
    const hourlyPrice = data.values.hours.price
    // Calculate min and max prices
    let minPrice = 0,
        maxPrice = 0
    if (hoursMin !== null && hoursMax !== null) {
        minPrice = cleaners * hoursMin * hourlyPrice
        maxPrice = cleaners * hoursMax * hourlyPrice
    } else if (hoursMin === null) {
        maxPrice = cleaners * hoursMax * hourlyPrice
    } else if (hoursMax === null) {
        minPrice = cleaners * hoursMin * hourlyPrice
    }
    return {
        minPrice,
        maxPrice,
    }
}

export function totalPrice() {
    // Get state
    const { state } = useContext(Store)
    // Define minimum price    
    const minTotal = 100
    // Instantiate variables
    let subtotal = 0,
        minTotalPrice = 0,
        maxTotalPrice = 0
    // Switch service type
    switch (state.service.package) {
        case 'hourlyRate':
            const hourlyRateObject = getHourlyRateSubtotal(hourlyRateMap)
            minTotalPrice = hourlyRateObject.minPrice.toFixed(2)
            maxTotalPrice = hourlyRateObject.maxPrice.toFixed(2)
            break
        default:
            console.log('error in pricingCalculator - default switch hit')
    }
    return {
        minTotal,
        minTotalPrice,
        maxTotalPrice
    }
}