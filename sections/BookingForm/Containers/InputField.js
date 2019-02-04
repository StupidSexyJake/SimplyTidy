import React, { useContext } from 'react'
import deburr from 'lodash/deburr'
// State
import { Store } from '../../../state/store'
// Actions
import {
    handleClick,
    handleChange,
    handleLinkClick,
    addChip,
    deleteChip
} from '../../../state/actions'
// Layouts
import {
    TextInput,
    SelectInput,
    Autocomplete,
    SelectedIcon,
    ButtonSelect,
    ChipSelect,
    RadioSelect
} from '../Layout/InputField'
// Material component variants
import FilledInput from '@material-ui/core/FilledInput'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

export function TextInputContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category, variant } = props
    // Set input component
    function inputVariant(variant) {
        switch (variant) {
            case 'standard':
                return Input
            case 'filled':
                return FilledInput
            default:
                return Input
        }
    }
    return (
        <TextInput
            id={category.id}
            label={category.label}
            variant={variant}
            value={state[category.stateType][category.stateValue]}
            onChange={(event) => dispatch(handleClick(category.stateType, category.stateValue, event.target.value))}
            inputVariant={inputVariant(props.variant)}
        />
    )
}

export function SelectInputContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category, variant } = props
    // Set input component
    function inputVariant(variant) {
        switch (variant) {
            case 'standard':
                return Select
            case 'filled':
                return FilledInput
            default:
                return Select
        }
    }
    // Create options array for menu
    let options = []
    for (const key in category.values) {
        let value = category.values[key]
        options.push(
            {
                key: key,
                value: key,
                label: value.label
            }
        )
    }
    return (
        <SelectInput
            label={category.label}
            id={category.id}
            value={state[category.stateType][category.stateValue]}
            onChange={(event) => dispatch(handleClick(category.stateType, category.stateValue, event.target.value))}
            variant={variant || 'standard'}
            inputVariant={inputVariant(props.variant)}
            options={options}
        />
    )
}

export function AutoCompleteContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category, variant } = props
    // Get suggestions
    function getSuggestions(value) {
        const inputValue = deburr(value.trim()).toLowerCase()
        const inputLength = inputValue.length
        let count = 0
        return inputLength === 0
            ? []
            : category.values.filter(suggestion => {
                const keep =
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

                if (keep) {
                    count += 1
                }
                return keep
            })
    }
    return (
        <Autocomplete
            label={category.label}
            id={category.id}
            value={state[category.stateType][category.stateValue]}
            onChange={(selection) => dispatch(handleClick('client', 'suburb', selection))}
            variant={variant}
            getSuggestions={getSuggestions}
        />
    )
}

export function SelectedIconContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category } = props
    // Create options array for menu
    let options = []
    for (const key in category.values) {
        let value = category.values[key]
        options.push(
            {
                key: key,
                value: key,
                label: value.label,
                disabled: state[category.stateType][category.stateValue] === key
            }
        )
    }
    // Create menu state
    const [anchorEl, setAnchorEl] = React.useState(null)
    function localClick(event) {
        setAnchorEl(event.currentTarget)
    }
    function localClose(event) {
        setAnchorEl(null)
        if (event.target.value) {
            dispatch(handleClick(category.stateType, category.stateValue, event.target.value.toString()))
        }
    }
    return (
        <SelectedIcon
            title={category.values[state[category.stateType][category.stateValue]].label}
            icon={category.values[state[category.stateType][category.stateValue]].icon}
            changeLabel={category.label}
            options={options}
            onClose={localClose}
            onClick={localClick}
            anchorEl={anchorEl}
        />
    )
}

export function RadioSelectContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category } = props
    // Create options array for menu
    let options = []
    for (const key in category.values) {
        let value = category.values[key]
        options.push(
            {
                key: key,
                value: key,
                label: value.label,
                line2: `${value.discountAmount * 100}% off`
            }
        )

    }
    return (
        <RadioSelect
            label={category.label}
            id={category.id}
            value={state[category.stateType][category.stateValue]}
            onChange={(event) => dispatch(handleChange(category.stateType, category.stateValue, event.target.value))}
            options={options}
        />
    )
}

export function ButtonSelectContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category } = props
    // Create options array
    let options = []
    for (const key in category.values) {
        let value = category.values[key]
        options.push(
            {
                key: key,
                value: key,
                label: value.label,
                icon: value.icon
            }
        )
    }
    return (
        <ButtonSelect
            id={category.id}
            label={category.label}
            value={state[category.stateType][category.stateValue]}
            onClick={(value) => dispatch(handleLinkClick(category.stateType, category.stateValue, value))}
            options={options}
        />
    )
}

export function ChipSelectContainer(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define props
    const { category } = props
    // Get selected chips
    const createSelectedArray = () => {
        let selectedArray = []
        state[category.stateType][category.stateValue].map((chip) => (
            selectedArray.push({ key: chip, label: category.values[chip].label })
        ))
        return selectedArray
    }
    // Get unselected chips
    const createUnselectedArray = () => {
        let unselectedArray = []
        state[category.unselectedStateType][category.unselectedValue].map((chip) => (
            unselectedArray.push({ key: chip, label: category.values[chip].label })
        ))
        return unselectedArray
    }
    return (
        <ChipSelect
            selected={createSelectedArray()}
            unselected={createUnselectedArray()}
            onClick={(chip) => dispatch(addChip(category.stateType, category.stateValue, category.unselectedStateType, category.unselectedValue, chip.key))}
            onDelete={(chip) => dispatch(deleteChip(category.stateType, category.stateValue, category.unselectedStateType, category.unselectedValue, chip.key))}
        />
    )
}