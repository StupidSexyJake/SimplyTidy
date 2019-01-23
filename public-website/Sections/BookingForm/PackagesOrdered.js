import React, { useContext } from 'react'
// State
import { Store } from '../../state/store'
// Fields
import {
    NumberOfCleaners,
    NumberOfHours,
    Extras,
} from './Fields'
// Field groups
import { ExpandGroup } from './Layout/FieldGroup'
// Input groups
import {
    InputGroup,
    InputGroup_WithIcons,

} from './Layout/InputGroup'
// Icons
import BedroomsIcon from '@material-ui/icons/Hotel'
import BathroomsIcon from '@material-ui/icons/Wc'

function ExpandPackage1() {
    // Get state
    const { state } = useContext(Store)
    console.log(`expand 1: ${state.service.package === 10}`)
    return (
        <ExpandGroup
            title='Add Extras'
            description='Add some optional extras for that extra shine'
            expandState={state.service.package === 10}
        >
            <InputGroup
                fields={[
                    { key: 1, input: <Extras /> }
                ]}
            />
        </ExpandGroup>
    )
}

function ExpandPackage2() {
    // Get state
    const { state } = useContext(Store)
    console.log(`expand 2: ${state.service.package === 20}`)
    return (
        <ExpandGroup
            title='Hours Required'
            description='Select how many cleaners and hours you expect your service to take'
            expandState={state.service.package === 20}
        >
            <InputGroup_WithIcons
                cols={2}
                fields={[
                    { key: 1, icon: <BedroomsIcon />, input: <NumberOfCleaners variant='filled' /> },
                    { key: 2, icon: <BathroomsIcon />, input: <NumberOfHours variant='filled' /> }
                ]}
            />
        </ExpandGroup>
    )
}

function ExpandPackage3() {
    // Get state
    const { state } = useContext(Store)

    console.log(`expand 3: ${state.service.package === 30}`)
    return (
        <ExpandGroup
            title='Custom Cleaning Service'
            description='Create your own fixed-price package based on your individual needs'
            expandState={state.service.package === 30}
        >
        </ExpandGroup>
    )
}

export function ExpandPackage() {
    // Get state
    const { state } = useContext(Store)
    switch (state.service.package) {
        case 10:
            console.log('Package 1')
            return (
                <React.Fragment>
                    <ExpandPackage1 />
                    <ExpandPackage2 />
                    <ExpandPackage3 />
                </React.Fragment>
            )
        case 20:
            console.log('Package 2')
            return (

                <React.Fragment>
                    <ExpandPackage2 />
                    <ExpandPackage3 />
                    <ExpandPackage1 />
                </React.Fragment>

            )
        case 301:
            console.log('Package 3')
            return (
                <React.Fragment>
                    <ExpandPackage3 />
                    <ExpandPackage1 />
                    <ExpandPackage2 />
                </React.Fragment>
            )
        default:
            console.log('Default')
            return (
                <React.Fragment>
                    <ExpandPackage1 />
                    <ExpandPackage2 />
                    <ExpandPackage3 />
                </React.Fragment>
            )
    }
}
