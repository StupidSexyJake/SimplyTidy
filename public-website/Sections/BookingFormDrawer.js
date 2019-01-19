import React, { useContext } from 'react'
// Context
import { Store } from '../state/store'
// Actions
import { toggleBookingFormDrawer } from '../state/actions'
// Sections
import BookingModal from './BookingForm/BookingModal'
// Material components
import Drawer from '@material-ui/core/Drawer'

export default function BookingFormDrawer() {
    // Get state contexts
    const { state, dispatch } = useContext(Store)
    return (
        <Drawer
            anchor='top'
            open={state.drawer.open}
            onClose={() => dispatch(toggleBookingFormDrawer(false))}
        >
            <div
                tabIndex={0}
                role='button'
            >
                <BookingModal />
            </div>
        </Drawer>
    )
}