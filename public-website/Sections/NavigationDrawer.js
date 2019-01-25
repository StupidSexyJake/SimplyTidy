import React, { useContext } from 'react'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Sections
import NavigationDrawerContent from './NavigationDrawerContent'
// Material components
import Drawer from '@material-ui/core/Drawer'

export default function NavigationDrawer() {
    // Get state contexts
    const { state, dispatch } = useContext(Store)
    return (
        <Drawer
            anchor='left'
            open={state.drawers.navigation}
            onClose={() => dispatch(toggleDrawer('navigation', false))}
        >
            <div
                tabIndex={0}
                role='button'
            >
                <NavigationDrawerContent />
            </div>
        </Drawer>
    )
}