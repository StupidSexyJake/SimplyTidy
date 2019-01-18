import React from 'react'
// Context
import {DrawerContext, BookingFormContext} from '../components/Context'
// Sections
import BookingModal from './BookingForm/BookingModal'
// Material components
import Drawer from '@material-ui/core/Drawer'

export default function BookingForm() {
    const {drawerState, drawerDispatch} = React.useContext(DrawerContext)
    const {bookingFormState} = React.useContext(BookingFormContext)
    return (
        <Drawer anchor='top' open={drawerState} onClose={() => drawerDispatch('close')}>
            <div tabIndex={bookingFormState.page} role='button'>
                <BookingModal />    
            </div>
        </Drawer>
    )
}

