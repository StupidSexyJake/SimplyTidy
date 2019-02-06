import React from 'react'
// Data
import {
    serviceMap,
    packageMap,
    frequencyMap,
    roomsMap,
    clientMap,
    hourlyRateMap,
    extrasMap
} from '../../data/serviceData'
// InputField containers
import {
    SelectInputContainer,
    SelectedIconContainer,
    TextInputContainer,
    AutoCompleteContainer,
    ButtonSelectContainer,
    ChipSelectContainer,
    RadioSelectContainer
} from './Containers/InputField'

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
            data={hourlyRateMap.values.hours.values}
        />
    )
}

export function NumberOfHours(props) {
    return (
        <SelectInputContainer
            category={hourlyRateMap.values.hours}
            variant={props.filled && 'filled'}
            type='SelectInput_Hours'
        />
    )
}

export function Extras() {
    return (
        <ChipSelectContainer
            category={extrasMap}
        />
    )
}

export function Frequency() {
    return (
        <ButtonSelectContainer
            category={frequencyMap}
        />
    )
}