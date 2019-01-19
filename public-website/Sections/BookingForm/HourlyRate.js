import React from 'react'
// Sections
import {InputGroup_2Col_WithIcons} from './Layout/InputGroup'
// Material components
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FilledInput from '@material-ui/core/FilledInput'
// Icons
import CleanersIcon from '@material-ui/icons/Hotel'
import HoursIcon from '@material-ui/icons/Wc'

export default React.memo(function HourlyRate() {
    return ( 'test'
        // <InputGroup_2Col_WithIcons 
        //     fields = {[
        //         {
        //             key: 1,
        //             icon: <CleanersIcon />,
        //             label: 'Cleaners',
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'cleaners',
        //                 value: clientState.bedrooms,
        //                 onChange: handleChange('cleaners'),                 
        //                 input: <FilledInput name='cleaners' id='cleaners' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>1</MenuItem>,
        //                 <MenuItem value={2} key={2}>2</MenuItem>
        //             ]                    
        //         },
        //         {
        //             key: 2,
        //             icon: <HoursIcon />,
        //             label: 'Hours',                    
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'hours',
        //                 value: clientState.bathrooms,
        //                 onChange: handleChange('hours'),
        //                 input: <FilledInput name='hours' id='hours' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>2 to 2.5 Hours</MenuItem>,                            
        //                 <MenuItem value={2} key={2}>2.5 to 3 Hours</MenuItem>,
        //                 <MenuItem value={3} key={3}>3 to 4 Hours</MenuItem>,
        //                 <MenuItem value={4} key={4}>4 to 6 Hours</MenuItem>
        //             ]       
        //         },
        //     ]}
        // >
        // </InputGroup_2Col_WithIcons> 
    )
})