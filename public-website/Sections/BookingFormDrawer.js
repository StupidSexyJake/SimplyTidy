import React from 'react'
// Context
import {DrawerContext} from '../state/DrawerState'
// Sections
import BookingModal from './BookingForm/BookingModal'
// Material components
import Drawer from '@material-ui/core/Drawer'

export default React.memo(function BookingFormDrawer() {
    console.log('booking form drawer render')
    // Get state contexts
    const {drawerState, setDrawerState} = React.useContext(DrawerContext)
    // Handle close event
    const handleClose = (val) => {
        console.log('close drawer')
        setDrawerState(val)
    }
    
    return (
        <Drawer anchor='top' open={drawerState} onClose={() => handleClose(false)}>
            <div tabIndex={0} role='button'>
                <BookingModal />    
            </div>
        </Drawer>
    )
})