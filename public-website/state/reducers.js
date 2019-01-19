// Import actions
import {
    TOGGLE_BOOKING_FORM_DRAWER,
    HANDLE_CLICK,
    ADD_EXTRA,
    DELETE_EXTRA
} from './actions'

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
        fixedPrice: true,
        bedrooms: 1,
        bathrooms: 1,
        livingAreas: 1,
        kitchens: 1,
        cleaners: 1,
        hours: 1,
        frequency: 'weekly',
        extras: []
    },
    drawer: {
        open: false
    },
    bookingForm: {
        page: 0,
        showAllRooms: false,
        unselectedExtras: [
            { label: 'Oven cleaning' },
            { label: 'Inside cupboards' },
            { label: 'Inside fridge' },
            { label: 'Inside cupboards' },
            { label: 'Inside fridge' },
        ]
    }
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
            return Object.assign({}, state, {
                ...reduced,
                [action.payload.stateType]: {
                    ...reduced[action.payload.stateType],
                    [action.payload.value]: action.payload.event
                }
            })
        case ADD_EXTRA:
            const extraToAdd = state.bookingForm.unselectedExtras.indexOf(action.payload)
            const newAddUnselectedExtras = state.bookingForm.unselectedExtras.splice(extraToAdd, 1)
            const newAddSelectedExtras = state.service.extras.push(extraToAdd)
            return Object.assign({}, state, {
                ...reduced,
                service: {
                    ...reduced.service,
                    extra: newAddSelectedExtras
                },
                bookingForm: {
                    ...reduced.bookingForm,
                    unselectedExtras: newAddUnselectedExtras
                }
            })
        case DELETE_EXTRA:
            const extraToDelete = state.service.extras.indexOf(action.payload)
            const NewDeletedSelectedExtras = state.service.extras.splice(extraToDelete, 1)
            const newDeletedUnselectedExtras = state.bookingForm.unselectedExtras.push(extraToDelete)
            return Object.assign({}, state, {
                ...reduced,
                service: {
                    ...reduced.service,
                    extra: NewDeletedSelectedExtras
                },
                bookingForm: {
                    ...reduced.bookingForm,
                    unselectedExtras: newDeletedUnselectedExtras
                }
            })
        default:
            return state
    }
}

export default reducer