// Action types
// :::::::::::::::
// Toggle booking form drawer open/close
export const TOGGLE_BOOKING_FORM_DRAWER = 'TOGGLE_BOOKING_FORM_DRAWER'
// Handle click events
export const HANDLE_CLICK = 'HANDLE_CLICK'
// Handle select extras
export const ADD_EXTRA = 'HANDLE_ADD_EXTRA'
export const DELETE_EXTRA = 'DELETE_EXTRA'


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
    return {
        type: HANDLE_CLICK,
        payload: {
            stateType: stateType,
            value: value,
            event: event
        }
    }
}

// Add selected extras
export function addExtra(extra) {
    return {
        type: ADD_EXTRA,
        payload: extra
    }
}

// Remove selected extras
export function deleteExtra(extra) {
    return {
        type: ADD_EXTRA,
        payload: extra
    }
}