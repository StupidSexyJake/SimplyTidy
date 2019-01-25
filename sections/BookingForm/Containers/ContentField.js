import React, { useContext } from 'react'
// State
import { Store } from '../../../state/store'
// Layouts
import {
    Summary,
    StaticText,
    IconContent
} from '../Layout/ContentField'

export function SummaryContainer(props) {
    // Get state
    const { state } = useContext(Store)
    // Define props
    const { category } = props
    return (
        <Summary
            summary={category.values[state[category.stateType][category.stateValue]].label}
            variant={props.variant}
        />
    )
}

export function StaticTextContainer(props) {
    // Define props
    const { children, ...other } = props
    return (
        <StaticText {...other}>
            {children}
        </StaticText>
    )
}

export function IconContentContainer(props) {
    return <IconContent {...props} />
}