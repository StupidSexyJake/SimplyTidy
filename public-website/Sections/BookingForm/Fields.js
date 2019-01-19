import { useContext } from 'react'
// State
import { Store } from '../../state/store'
// Actions
import { handleClick } from '../../state/actions'
// Input field layouts
import {
    TextInput,
    SelectInput,
    Autocomplete
} from './Layout/InputField'
// Suggestion arrays
import { suburbArray } from '../../components/suburbsArray'

export function Name(props) {
    const { state, dispatch } = useContext(Store)
    return (
        <TextInput
            label='Name'
            id='name'
            value={state.client.name}
            onChange={(event) => dispatch(handleClick('client', 'name', event.target.value))}
            variant={props.variant || 'standard'}
            autoComplete={props.autoComplete || 'none'}
            fullWidth={props.fullWidth || false}
        />
    )
}

export function Email(props) {
    const { state, dispatch } = useContext(Store)
    return (
        <TextInput
            label='Email'
            id='email'
            value={state.client.email}
            onChange={(event) => dispatch(handleClick('client', 'email', event.target.value))}
            variant={props.variant || 'standard'}
            autoComplete={props.autoComplete || 'none'}
            fullWidth={props.fullWidth || false}
        />
    )
}

export function Suburb(props) {
    const { state, dispatch } = useContext(Store)
    return (
        <Autocomplete
            label='Suburb'
            id='suburb'
            value={state.client.suburb}
            onChange={(selection) => dispatch(handleClick('client', 'suburb', selection))}
            suggestions={suburbArray}
            variant={props.variant || 'standard'}
            autoComplete={props.autoComplete || 'none'}
            fullWidth={props.fullWidth || false}
        />
    )
}

export function Service() {
    const { state, dispatch } = useContext(Store)
    return (
        <SelectInput
            label='Service'
            id='service'
            value={state.service.service}
            onChange={(event) => dispatch(handleClick('service', 'service', event.target.value))}
            menuItems={[
                { key: 1, value: 10, name: 'Routine Cleaning' },
                { key: 2, value: 20, name: 'One Time Cleaning' },
                { key: 3, value: 30, name: 'Deep Cleaning' },
                { key: 4, value: 40, name: 'Bond Cleaning' }
            ]}
        />
    )
}

export function Bedrooms() {
    const { state, dispatch } = useContext(Store)
    return (
        <SelectInput
            label='Bedrooms'
            id='bedrooms'
            value={state.service.bedrooms}
            onChange={(event) => dispatch(handleClick('service', 'bedrooms', event.target.value))}
            menuItems={[
                { key: 1, value: 1, name: '1' },
                { key: 2, value: 2, name: '2' },
                { key: 3, value: 3, name: '3' },
                { key: 4, value: 4, name: '4' },
                { key: 5, value: 5, name: '5' },
                { key: 6, value: 6, name: '6' },
            ]}
        />
    )
}

export function Bathrooms() {
    const { state, dispatch } = useContext(Store)
    return (
        <SelectInput
            label='Bathrooms'
            id='bathrooms'
            value={state.service.bathrooms}
            onChange={(event) => dispatch(handleClick('service', 'bathrooms', event.target.value))}
            menuItems={[
                { key: 1, value: 1, name: '1' },
                { key: 2, value: 2, name: '2' },
                { key: 3, value: 3, name: '3' },
                { key: 4, value: 4, name: '4' },
                { key: 5, value: 5, name: '5' },
                { key: 6, value: 6, name: '6' },
            ]}
        />
    )
}