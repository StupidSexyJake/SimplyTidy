import React, { useContext } from 'react'
// State
import { Store } from '../../state/store'
// Field layouts
import {
    SummaryTextOnly,
    SummaryIconWithValue,
    SummaryWithIcon
} from './Layout/ContentField'
// Data
import {
    serviceMap,
    packageMap,
    frequencyMap,
    hourlyRateMap
} from '../../components/serviceDetails'
// Calculations
import { totalPrice } from '../../components/pricingCalculator'
// TEMP
import ServiceIcon from '@material-ui/icons/Hotel'

export function NeedHelp(props) {
    return (
        <React.Fragment>
            <SummaryTextOnly
                align={props.align}
                summary="We're right here to help you! Click here to chat online with our Customer Happiness Team or call us on (07) 5646 5290."
            />
        </React.Fragment>
    )
}

export function BookingSummary(props) {
    // Get state
    const { state } = useContext(Store)
    const serviceSummary = () => {
        if (state.service.service === 10) {
            return `${frequencyMap[state.service.frequency].label} Cleaning`
        } else {
            return serviceMap.values[state.service.service].label
        }
    }
    return (
        <React.Fragment>
            <SummaryWithIcon
                summary={serviceSummary()}
                icon={<ServiceIcon fontSize='small' />}
                variant={props.variant}
            />
            <SummaryWithIcon
                summary={packageMap.values[state.service.package].label}
                icon={<ServiceIcon fontSize='small' />}
                variant={props.variant}
            />

            <SummaryWithIcon
                summary={`${state.service.cleaners} Cleaners`}
                icon={hourlyRateMap.values.cleaners.icon}
                variant={props.variant}
            />
            <SummaryWithIcon
                summary={hourlyRateMap.values.hours.values[state.service.hours].label}
                icon={hourlyRateMap.values.hours.icon}
                variant={props.variant}
            />
        </React.Fragment>
    )
}