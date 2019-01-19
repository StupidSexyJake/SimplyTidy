import PropTypes from 'prop-types'
// Autocomplete
import Downshift from 'downshift'
import deburr from 'lodash/deburr'
// Material components
import { makeStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FilledInput from '@material-ui/core/FilledInput'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

// Create styles
const useStyles = makeStyles(theme => ({
    formControl: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
    selectEmpty: {
        marginTop: 4 * theme.spacing.unit
    },
    autoCompleteContainer: {
        flexGrow: 1,
        position: 'relative'
    },
    autoCompletePaper: {
        position: 'absolute',
        zIndex: 1000,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
    inputInput: {
        width: 'auto',
        flexGrow: 1,
    },
    inputField: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
}))

export function TextInput(props) {
    // Define styles
    const classes = useStyles()
    // Set input component  
    function VariantInput(props) {
        const inputTypes = {
            filled: FilledInput,
            standard: Input
        }
        const InputVariant = inputTypes[props.variant]
        return <InputVariant {...props} />
    }
    return (
        <FormControl className={classes.formControl}>
            <InputLabel
                htmlFor={props.id}
                variant={props.variant}
            >
                {props.label}
            </InputLabel>
            <VariantInput
                name={props.id}
                id={props.id}
                variant={props.variant || 'standard'}
                autoComplete={props.autoComplete || '__nope'}
                fullWidth={props.fullWidth || false}
                value={props.value}
                onChange={props.onChange}
                {...props}
            />
        </FormControl>
    )
}

export function SelectInput(props) {
    // Define styles
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={props.id}>
                {props.label}
            </InputLabel>
            <Select
                displayEmpty
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                input={<Input name={props.id} id={props.id} />}
                className={classes.selectEmpty}
            >
                {props.menuItems.map((menuItem) => (
                    <MenuItem value={menuItem.value} key={menuItem.key}>
                        {menuItem.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}


export function Autocomplete(props) {
    // Define styles
    const classes = useStyles()
    // Render input
    function renderInput(inputProps) {
        const { InputProps, classes, ref, ...other } = inputProps;

        return (
            <TextField label={props.label} fullWidth {...InputProps} {...other} />
        )
    }
    // Get suggestion array
    function getSuggestions(value) {
        const inputValue = deburr(value.trim()).toLowerCase()
        const inputLength = inputValue.length
        let count = 0
        return inputLength === 0
            ? []
            : props.suggestions.filter(suggestion => {
                const keep =
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

                if (keep) {
                    count += 1
                }
                return keep
            })
    }
    // Render suggestions
    function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
        const isHighlighted = highlightedIndex === index
        const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1
        return (
            <MenuItem
                {...itemProps}
                key={suggestion.label}
                selected={isHighlighted}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                {suggestion.label}
            </MenuItem>
        );
    }
    // Render suggestions prop types
    renderSuggestion.propTypes = {
        highlightedIndex: PropTypes.number,
        index: PropTypes.number,
        itemProps: PropTypes.object,
        selectedItem: PropTypes.string,
        suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
    };
    return (
        <Downshift id="downshift"
            onChange={props.onChange}
            selectedItem={props.value}
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                highlightedIndex,
                inputValue,
                isOpen,
                selectedItem,
            }) => (
                    <div className={classes.autoCompleteContainer}>
                        {renderInput({
                            classes,
                            InputProps: getInputProps({
                                autoComplete: '__nope'
                            }),
                        })}

                        <div {...getMenuProps()}>
                            {isOpen ? (
                                <Paper className={classes.autoCompletePaper} square>
                                    {getSuggestions(inputValue).map((suggestion, index) =>
                                        renderSuggestion({
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({ item: suggestion.label }),
                                            highlightedIndex,
                                            selectedItem,
                                        }),
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    </div>
                )}
        </Downshift>
    )
}