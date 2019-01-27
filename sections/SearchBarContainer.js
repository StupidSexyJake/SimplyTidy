import React, { useContext } from 'react'
// State
import { Store } from '../state/store'
// Actions
// Data
// Components
import SearchBar from './SearchBar'

export default function SearchBarContainer(props) {
    // Get state contexts
    const { state, dispatch } = useContext(Store)
    return (
        <SearchBar
            rootClass={props.className}
        />
    )
}