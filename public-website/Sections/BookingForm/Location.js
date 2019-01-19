import React from 'react'
// Sections
import {InputGroup_1Col_WithIcons} from './InputGroup'
// Custom components
import Suburbs from '../../components/Suburbs'
// Icons
import LocationIcon from '@material-ui/icons/LocationOn'

export default React.memo(function BedBaths() {
    return (
        <InputGroup_1Col_WithIcons 
            fields = {[
                {
                    key: 1,
                    icon: <LocationIcon />,
                    input: <Suburbs  
                        variant='filled' 
                        autoComplete='off' />
                },
            ]}
        >
        </InputGroup_1Col_WithIcons>
    )
})