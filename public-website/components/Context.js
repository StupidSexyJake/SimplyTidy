import React from 'react'
const DrawerContextProvider = React.createContext()
export const ClientContext = React.createContext()
export const ServiceContext = React.createContext()
export const BookingFormContext = React.createContext()


export function DrawerContext(props) {
    // Booking form drawer state    
    const [drawerState, changeDrawerState] = React.useReducer((state, action) => {
        switch (action) {
            case 'open':
                return true
            case 'close':
                return false
            default:
                return state;
        }
    }, false)
    return (
        <DrawerContextProvider.Provider value={{drawerState, changeDrawerState}}>
            {props.children}
        </DrawerContextProvider.Provider>
    )
}