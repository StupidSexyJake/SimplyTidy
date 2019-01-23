import React, { useContext } from 'react'
// State
import { Store } from '../../state/store'
// Actions
import {
    handleChange,
} from '../../state/actions'
// Data
import {
    serviceMap,
    packageMap,
    frequencyMap,
    roomsMap,
    clientMap,
    hourlyRateMap,
    extrasMap
} from '../../components/serviceDetails'
// InputField containers
import {
    SelectInputContainer,
    SelectedIconContainer,
    TextInputContainer,
    AutoCompleteContainer,
    ButtonSelectContainer,
    ChipSelectContainer
} from './Containers/InputField'
import {
    RadioSelect,
} from './Layout/InputField'

//
// CLIENT FIELDS
// ::::::::::::::::::::::::::
export function Name(props) {
    return (
        <TextInputContainer
            category={clientMap.values.name}
            variant={props.filled && 'filled'}
        />
    )
}

export function Email(props) {
    return (
        <TextInputContainer
            category={clientMap.values.email}
            variant={props.filled && 'filled'}
        />
    )
}

export function Suburb(props) {
    return (
        <AutoCompleteContainer
            category={clientMap.values.suburb}
            variant={props.filled && 'filled'}
        />
    )
}

//
// SERVICE FIELDS
// ::::::::::::::::::::::::::
export function Service(props) {
    return (
        <SelectInputContainer
            category={serviceMap}
            variant={props.filled && 'filled'}
        />
    )
}

// CHANGE ICON FROM IMAGE TO SVG COMPONENT
export function ServiceImage() {
    return (
        <SelectedIconContainer
            category={serviceMap}
        />
    )
}

export function Package() {
    return (
        <ButtonSelectContainer
            category={packageMap}
        />
    )
}

export function Bedrooms(props) {
    return (
        <SelectInputContainer
            category={roomsMap.values[10]}
            variant={props.filled && 'filled'}
        />
    )
}

export function Bathrooms(props) {
    return (
        <SelectInputContainer
            category={roomsMap.values[20]}
            variant={props.filled && 'filled'}
        />
    )
}

export function LivingAreas(props) {
    return (
        <SelectInputContainer
            category={roomsMap.values[30]}
            variant={props.filled && 'filled'}
        />
    )
}

export function Kitchens(props) {
    return (
        <SelectInputContainer
            category={roomsMap.values[40]}
            variant={props.filled && 'filled'}
        />
    )
}

export function NumberOfCleaners(props) {
    return (
        <SelectInputContainer
            category={hourlyRateMap.values.cleaners}
            variant={props.filled && 'filled'}
        />
    )
}

export function NumberOfHours(props) {
    return (
        <SelectInputContainer
            category={hourlyRateMap.values.hours}
            variant={props.filled && 'filled'}
        />
    )
}

export function Extras() {
    return (
        <ChipSelectContainer
            category={extrasMap}
        />
        // <ChipSelect
        //     selected={state.service.extras}
        //     unselected={state.bookingForm.unselectedExtras}
        //     onClick={(extra) => dispatch(addExtra(extra))}
        //     onDelete={(extra) => dispatch(deleteExtra(extra))}
        // />
    )
}

export function Frequency() {
    // Get state
    const { state, dispatch } = useContext(Store)
    function discountAmount(decimal) {
        return (`${decimal * 100}% off ${' '}`)
    }
    return (
        <RadioSelect
            label='Frequency'
            id='frequency'
            value={state.service.frequency}
            onChange={(event) => dispatch(handleChange('service', 'frequency', event.target.value))}
            options={[
                { key: 1, value: '10', label: frequencyMap['10'].label, secondLine: discountAmount(frequencyMap['10'].discountAmount) },
                { key: 2, value: '20', label: frequencyMap['20'].label, secondLine: discountAmount(frequencyMap['20'].discountAmount) },
                { key: 3, value: '30', label: frequencyMap['30'].label, secondLine: discountAmount(frequencyMap['30'].discountAmount) },
            ]}
        />
    )
}