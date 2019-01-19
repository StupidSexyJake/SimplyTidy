import React from 'react'
// Sections
import { InputGroup_2Col_WithIcons } from './Layout/InputGroup'
// Material components
import { makeStyles } from '@material-ui/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FilledInput from '@material-ui/core/FilledInput'
// Icons
import LivingAreaIcon from '@material-ui/icons/Hotel'
import KitchenIcon from '@material-ui/icons/Hotel'

const useStyles = makeStyles(theme => ({
    addPaddingTop: {
        marginTop: theme.spacing.unit
    }
}))

export default React.memo(function ExtraRooms() {
    const classes = useStyles()
    return ('test'
        // <InputGroup_2Col_WithIcons 
        //     fields = {[
        //         {
        //             key: 1,
        //             icon: <LivingAreaIcon />,
        //             label: 'Living Areas',
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'livingAreas',
        //                 value: clientState.livingAreas,
        //                 onChange: handleChange('livingAreas'),
        //                 className: classes.addMarginTop,                        
        //                 input: <FilledInput name='livingAreas' id='livingAreas' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>1</MenuItem>,
        //                 <MenuItem value={2} key={2}>2</MenuItem>,
        //                 <MenuItem value={3} key={3}>3</MenuItem>,
        //                 <MenuItem value={4} key={4}>4</MenuItem>
        //             ]                    
        //         },
        //         {
        //             key: 2,
        //             icon: <KitchenIcon />,
        //             label: 'Kitchens',                    
        //             inputType: Select,
        //             inputProps: {
        //                 displayEmpty: true,
        //                 name: 'kitchens',
        //                 value: clientState.kitchens,
        //                 onChange: handleChange('kitchens'),
        //                 className: classes.addMarginTop, 
        //                 input: <FilledInput name='kitchens' id='kitchens' />
        //             },
        //             inputChildren: [
        //                 <MenuItem value={1} key={1}>1</MenuItem>,
        //                 <MenuItem value={2} key={2}>2</MenuItem>
        //             ]      
        //         },
        //     ]}
        // >
        // </InputGroup_2Col_WithIcons>
    )
})