import React, {useMemo} from 'react'

// Export context
export const DrawerContext = React.createContext()

// Set state
const drawerContextValue = () => {
    // Set state
    

    // Set context value
    const drawerContextValue = useMemo(() => {
        return { drawerState, setDrawerState }
    }, [drawerState])
    return drawerContextValue
}

// Manage state and export context provider
export function DrawerContextProvider(props) {
    // Return context provider
    return (
        <DrawerContext.Provider value={drawerContextValue}>
            {props.children}
        </DrawerContext.Provider>
    )
}