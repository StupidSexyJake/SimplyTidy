import React from 'react'
// Sections
import { InputGroup_2Col_WithIcons } from './Layout/InputGroup'
// Material components
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FilledInput from '@material-ui/core/FilledInput'
// Icons
import BedroomsIcon from '@material-ui/icons/Hotel'
import BathroomsIcon from '@material-ui/icons/Wc'

export default React.memo(function BedBath() {
    return ('test'
        // <InputGroup_2Col_WithIcons 
        //     fields = {[
        //         {
        //             key: 1,
        //             icon: <BedroomsIcon />,
        //             label: 'Bedrooms',
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'bedrooms',
        //                 value: clientState.bedrooms,
        //                 onChange: handleChange('bedrooms'),                 
        //                 input: <FilledInput name='bedrooms' id='bedrooms' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>1</MenuItem>,
        //                 <MenuItem value={2} key={2}>2</MenuItem>,
        //                 <MenuItem value={3} key={3}>3</MenuItem>,
        //                 <MenuItem value={4} key={4}>4</MenuItem>,
        //                 <MenuItem value={5} key={5}>5</MenuItem>,
        //                 <MenuItem value={6} key={6}>6</MenuItem>
        //             ]                    
        //         },
        //         {
        //             key: 2,
        //             icon: <BathroomsIcon />,
        //             label: 'Bathrooms',                    
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'bathrooms',
        //                 value: clientState.bathrooms,
        //                 onChange: handleChange('bathrooms'),
        //                 input: <FilledInput name='bathrooms' id='bathrooms' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>1</MenuItem>,
        //                 <MenuItem value={2} key={2}>2</MenuItem>,
        //                 <MenuItem value={3} key={3}>3</MenuItem>,
        //                 <MenuItem value={4} key={4}>4</MenuItem>,
        //                 <MenuItem value={5} key={5}>5</MenuItem>,
        //                 <MenuItem value={6} key={6}>6</MenuItem>
        //             ]       
        //         },
        //     ]}
        // >
        // </InputGroup_2Col_WithIcons>
    )
})