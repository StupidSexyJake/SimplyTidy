// Import actions
import {
    TOGGLE_BOOKING_FORM_DRAWER,
    HANDLE_CLICK,
    HANDLE_CHANGE,
    HANDLE_LINK_CLICK,
    ADD_CHIP,
    DELETE_CHIP,
    NEXT_BOOKING_STEP,
    PREVIOUS_BOOKING_STEP,
} from './actions'
// Data
import {
    extrasMap
} from '../components/serviceDetails'

// Set initial state values
export const initialState = {
    client: {
        name: '',
        email: '',
        phone: '',
        street: '',
        suburb: '',
        postcode: '',
        state: '',
        reminders: true,
    },
    service: {
        service: 10,
        package: 'fixedPrice',
        bedrooms: 1,
        bathrooms: 1,
        livingAreas: 1,
        kitchens: 1,
        cleaners: 1,
        hours: 2,
        frequency: '10',
        extras: []
    },
    drawer: {
        open: false
    },
    bookingForm: {
        page: 0,
        fadeService: false,
        unselectedExtras: initialUnselectedExtrasArray()
    }
}

function initialUnselectedExtrasArray() {
    let unselectedExtrasArray = []
    for (const key in extrasMap.values) {
        unselectedExtrasArray.push(key)
    }
    return unselectedExtrasArray
}

// Create reducer
const reducer = (state, action) => {
    const reduced = { ...state }
    switch (action.type) {
        case TOGGLE_BOOKING_FORM_DRAWER:
            return Object.assign({}, state, {
                ...reduced,
                drawer: {
                    open: action.payload
                }
            })
        case HANDLE_CLICK:
        case HANDLE_CHANGE:
            return Object.assign({}, state, {
                ...reduced,
                [action.payload.stateType]: {
                    ...reduced[action.payload.stateType],
                    [action.payload.value]: action.payload.event
                }
            })
        case HANDLE_LINK_CLICK:
            return Object.assign({}, state, {
                ...reduced,
                [action.payload.stateType]: {
                    ...reduced[action.payload.stateType],
                    [action.payload.state]: action.payload.value
                }
            })
        case ADD_CHIP:
            const currentStateArrayAdd = state[action.payload.stateType][action.payload.value]
            const unselectedArrayAdd = state[action.payload.unselectedStateType][action.payload.unselectedValue]
            currentStateArrayAdd.push(action.payload.chip)
            const extraToRemoveAdd = unselectedArrayAdd.indexOf(action.payload.chip)
            unselectedArrayAdd.splice(extraToRemoveAdd, 1)
            return Object.assign({}, state, {
                ...reduced,
                [action.payload.stateType]: {
                    ...reduced[action.payload.stateType],
                    [action.payload.value]: currentStateArrayAdd
                },
                [action.payload.unselectedStateType]: {
                    ...reduced[action.payload.unselectedStateType],
                    [action.payload.unselectedValue]: unselectedArrayAdd
                },
            })
        case DELETE_CHIP:
            const currentStateArrayDel = state[action.payload.stateType][action.payload.value]
            const unselectedArrayDel = state[action.payload.unselectedStateType][action.payload.unselectedValue]
            unselectedArrayDel.unshift(action.payload.chip)
            const extraToRemoveDel = currentStateArrayDel.indexOf(action.payload.chip)
            currentStateArrayDel.splice(extraToRemoveDel, 1)
            return Object.assign({}, state, {
                ...reduced,
                [action.payload.stateType]: {
                    ...reduced[action.payload.stateType],
                    [action.payload.value]: currentStateArrayDel
                },
                [action.payload.unselectedStateType]: {
                    ...reduced[action.payload.unselectedStateType],
                    [action.payload.unselectedValue]: unselectedArrayDel
                },
            })
        case NEXT_BOOKING_STEP:
            return Object.assign({}, state, {
                ...reduced,
                bookingForm: {
                    ...reduced.bookingForm,
                    page: state.bookingForm.page + 1
                }
            })
        case PREVIOUS_BOOKING_STEP:
            return Object.assign({}, state, {
                ...reduced,
                bookingForm: {
                    ...reduced.bookingForm,
                    page: state.bookingForm.page - 1
                }
            })
        default:
            return state
    }
}

export default reducer