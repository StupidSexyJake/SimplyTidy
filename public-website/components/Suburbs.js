import React from 'react'
import Downshift from 'downshift'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
// Context
import {ClientContext} from '../state/ClientState'
// Material components
import { makeStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import FilledInput from '@material-ui/core/FilledInput'

const suggestions = [
    { label: 'Advancetown' },
    { label: 'Arundel' },
    { label: 'Ashmore' },
    { label: 'Benowa' },
    { label: 'Biggera Waters' },
    { label: 'Bilinga' },
    { label: 'Broadbeach' },
    { label: 'Bundall' },
    { label: 'Burleigh Heads' },
    { label: 'Burleigh Waters' },
    { label: 'Carrara' },
    { label: 'Chevron Island' },
    { label: 'Clear Island Waters' },
    { label: 'Coolangatta' },
    { label: 'Coombabah' },
    { label: 'Coomera' },
    { label: 'Currumbin' },
    { label: 'Currumbin Waters' },
    { label: 'Currumbin Valley' },
    { label: 'Elanora' },
    { label: 'Gaven' },
    { label: 'Helensvale' },
    { label: 'Highland Park' },
    { label: 'Hollywell' },
    { label: 'Hope Island' },
    { label: 'Isle of Capri' },
    { label: 'Jacobs Well' },
    { label: 'Kirra' },
    { label: 'Labrador' },
    { label: 'Main Beach' },
    { label: 'Maudsland' },
    { label: 'Mermaid Beach' },
    { label: 'Mermaid Waters' },
    { label: 'Merrimac' },
    { label: 'Molendinar' },
    { label: 'Mudgeeraba' },
    { label: 'Nerang' },
    { label: 'Nobbys Beach' },
    { label: 'Ormeau' },
    { label: 'Oxenford' },
    { label: 'Pacific Pines' },
    { label: 'Palm Beach' },
    { label: 'Paradise Point' },
    { label: 'Parkwood' },
    { label: 'Pimpama' },
    { label: 'Reedy Creek' },
    { label: 'Robina' },
    { label: 'Runaway Bay' },
    { label: 'Sanctuary Cove' },
    { label: 'Southport' },
    { label: 'Surfers Paradise' },
    { label: 'Tallai' },
    { label: 'Tallebudgera' },
    { label: 'Tugun' },
    { label: 'Varsity Lakes' },
    { label: 'Worongary' },
    { label: 'Miami' },
    { label: 'Miami' },
    { label: 'Miami' },
    { label: 'Miami' },
]

function renderInput(inputProps) {
    
    const { InputProps, classes, ref, variant, suburb, label, name, id, value, autoComplete, ...other } = inputProps
    const inputTypes = {
        filled: FilledInput,
        standard: Input
    }
    function VariantInput(props) {
        const InputVariant = inputTypes[inputProps.variant || 'standard']
        return <InputVariant {...props} />
    }
    return (
        <FormControl className={classes.inputField}>
            <InputLabel htmlFor={name} variant={variant || 'standard'}>{label}</InputLabel>
            <VariantInput autoComplete='__nope'
                name={name} 
                id={id} 
                value={inputProps.InputProps.value} 
                inputRef={ref} 
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }} 
                {...InputProps}
            />
        </FormControl>
    )
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
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
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

            if (keep) {
                count += 1;
            }
            return keep;
        });
}

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
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



export default React.memo(function Suburbs(props) {
    const classes = useStyles()
    const {clientState, setClientState} = React.useContext(ClientContext)
    const hande = function handeClick(selection) {
        setClientState({...clientState, 'suburb': selection})
    }
    return (
        <Downshift id="downshift" 
            onChange={hande}
            selectedItem={clientState.suburb}
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
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            name: 'suburb',
                            id: 'suburb',
                            value: clientState.suburb,
                            classes,
                            variant: props.variant,
                            label: 'Suburb',
                            InputProps: getInputProps({
                                autoComplete: props.autoComplete || '__nope',
                            }),
                        })}
                        <div {...getMenuProps()}>
                            {isOpen ? (
                                <Paper className={classes.paper} square>
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
})