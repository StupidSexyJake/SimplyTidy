import React from 'react'
// Sections
import { InputGroup_1Col_WithIcons } from './Layout/InputGroup'
// Fields
import { Suburbs } from './Fields'
// Icons
import LocationIcon from '@material-ui/icons/LocationOn'

export default React.memo(function BedBaths() {
    return (
        <InputGroup_1Col_WithIcons
            fields={[
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