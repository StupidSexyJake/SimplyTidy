// Action types
// :::::::::::::::
// Toggle booking form drawer open/close
export const TOGGLE_BOOKING_FORM_DRAWER = 'TOGGLE_BOOKING_FORM_DRAWER'
// Handle click events
export const HANDLE_CLICK = 'HANDLE_CLICK'
// Handle change events
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
// Handle click links
export const HANDLE_LINK_CLICK = 'HANDLE_LINK_CLICK'
// Handle select extras
export const ADD_CHIP = 'ADD_CHIP'
export const DELETE_CHIP = 'DELETE_CHIP'
// Handle booking form steps
export const NEXT_BOOKING_STEP = 'NEXT_BOOKING_STEP'
export const PREVIOUS_BOOKING_STEP = 'PREVIOUS_BOOKING_STEP'
// Handle scroll
export const HANDLE_SCROLL = 'HANDLE_SCROLL'

// Action creators
// ::::::::::::::::::
// Toggle booking form drawer open/close
export function toggleBookingFormDrawer(openStatus) {
    return {
        type: TOGGLE_BOOKING_FORM_DRAWER,
        payload: openStatus
    }
}
// Hande click events
export function handleClick(stateType, value, event) {
    console.log(stateType, value, event)
    return {
        type: HANDLE_CLICK,
        payload: {
            stateType: stateType,
            value: value,
            event: event
        }
    }
}
// Hande change events
export function handleChange(stateType, value, event) {
    return {
        type: HANDLE_CHANGE,
        payload: {
            stateType: stateType,
            value: value,
            event: event
        }
    }
}

// Add selected extras
export function addChip(stateType, value, unselectedStateType, unselectedValue, chip) {
    return {
        type: ADD_CHIP,
        payload: {
            stateType: stateType,
            value: value,
            unselectedStateType: unselectedStateType,
            unselectedValue: unselectedValue,
            chip: chip
        }
    }
}

// Remove selected extras
export function deleteChip(stateType, value, unselectedStateType, unselectedValue, chip) {
    return {
        type: DELETE_CHIP,
        payload: {
            stateType: stateType,
            value: value,
            unselectedStateType: unselectedStateType,
            unselectedValue: unselectedValue,
            chip: chip
        }
    }
}

// Go to next booking step
export function nextBookingStep() {
    return {
        type: NEXT_BOOKING_STEP
    }
}

// Go to previous booking step
export function previousBookingStep() {
    return {
        type: PREVIOUS_BOOKING_STEP
    }
}

// Handle link clicks
export function handleLinkClick(stateType, state, value) {
    return {
        type: HANDLE_LINK_CLICK,
        payload: {
            stateType: stateType,
            state: state,
            value: value
        }
    }
}