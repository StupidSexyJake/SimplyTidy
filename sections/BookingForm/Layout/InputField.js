import React from 'react'
// Utils
import { VariantInput } from '../../../utils/functions'
// Autocomplete
import Downshift from 'downshift'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { ButtonWithIcon } from '../../../components/Buttons';

// Create styles
const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%'
    },
    formControlLabelLine2: {
        fontSize: theme.typography.captionNext.fontSize,
        marginRight: 0.75 * theme.spacing.unit
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
    selectedIconContainer: {
        textAlign: 'center'
    },
    selectedIconIcon: {
        display: 'block',
        margin: '0 auto',
        marginTop: 2 * theme.spacing.unit,
        fontSize: `${16 * theme.spacing.unit / 16}rem`,
        color: theme.palette.primary.dark,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            fontSize: `${12 * theme.spacing.unit / 16}rem`,
        }
    },
    selectedIconTitle: {
        paddingBottom: 0,
        marginBottom: 0.5 * theme.spacing.unit,
        color: theme.palette.primary.dark
    },
    selectedIconChangeSelected: {
        color: theme.palette.text.disabled
    },
    buttonSelect: {
        transition: 'all 0.1s cubic-bezier(0.4, 0.0, 0.2, 1)',
        width: '100%'
    },
    buttonSelectIcon: {
        marginRight: theme.spacing.unit,
        lineHeight: 1,
    },
    buttonSeletDisabled: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.contrastText} !important`,
    },
    radioGroup: {
        justifyContent: 'center',
    },
    radioChecked: {
        '&, & + $radioLabel': {
            color: theme.palette.secondary.main,
        },
    },
    radioLabel: {},
    noMarginRight: {
        marginRight: 0
    }
}))

export function TextInput(props) {
    // Define styles
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl}>
            <InputLabel
                htmlFor={props.id}
                variant={props.variant}
            >
                {props.label}
            </InputLabel>
            <VariantInput
                inputVariant={props.inputVariant}
                fullWidth
                autoComplete={props.id}
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                {...props.inputProps}
            />
        </FormControl>
    )
}

export function SelectInput(props) {
    // Define styles
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl} variant={props.variant || 'standard'} >
            <InputLabel htmlFor={props.id}>
                {props.label}
            </InputLabel>
            <Select
                fullWidth
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                input={<VariantInput inputVariant={props.inputVariant} />}
            >
                {props.options.map((option) => (
                    <MenuItem
                        selected={option.selected}
                        value={option.value}
                        key={option.key}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export function Autocomplete(props) {
    // Define styles
    const classes = useStyles()
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
                        <TextField
                            label={props.label}
                            variant={props.variant}
                            fullWidth
                            inputProps={getInputProps({
                                autoComplete: '__nope'
                            })}
                        />
                        <div {...getMenuProps()}>
                            {isOpen ? (
                                <Paper className={classes.autoCompletePaper} square>
                                    {props.getSuggestions(inputValue).map((suggestion, index) =>
                                        <MenuItem
                                            {...getItemProps({ item: suggestion.label })}
                                            key={suggestion.label}
                                            selected={highlightedIndex === index}
                                            component="div"
                                            style={{
                                                fontWeight: (selectedItem || '').indexOf(suggestion.label) > -1 ? 500 : 400,
                                            }}
                                        >
                                            {suggestion.label}
                                        </MenuItem>
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    </div>
                )}
        </Downshift>
    )
}

export function SelectedIcon(props) {
    // Define styles
    const classes = useStyles()
    return (
        <div className={classes.selectedIconContainer}>
            <VariantInput inputVariant={props.icon} className={classes.selectedIconIcon} />
            <Typography
                variant='h6'
                component='p'
                className={classes.selectedIconTitle}
            >
                {props.title}
            </Typography>
            <Button
                size='small'
                color='primary'
                onClick={props.onClick}
            >
                Change {props.changeLabel}
            </Button>
            <Menu id="selectServiceMenu"
                anchorEl={props.anchorEl}
                open={Boolean(props.anchorEl)}
                onClose={props.onClose}
            >
                {props.options.map((option) => (
                    <MenuItem
                        onClick={props.onClose}
                        value={option.value}
                        key={option.key}
                        selected={option.selected}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export function RadioSelect(props) {
    // Define styles
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl}>
            <RadioGroup
                row
                aria-label={props.label}
                name={props.label}
                className={classes.radioGroup}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option) => (
                    <FormControlLabel
                        key={option.key}
                        classes={{ label: classes.radioLabel }}
                        align='center'
                        value={option.value}
                        control={<Radio classes={{ checked: classes.radioChecked }} />}
                        label={
                            <React.Fragment>
                                <span>{option.label}</span> <br />
                                {option.line2 && <span className={classes.formControlLabelLine2}>{option.line2}</span>}
                            </React.Fragment>
                        }
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export function ButtonSelect(props) {
    // Define styles
    const classes = useStyles()
    // Define selected color
    const selectedColor = {
        true: 'primary',
        false: 'default'
    }
    return (
        <Grid container
            spacing={16}
            alignItems='center'
        >
            {props.options.map((item) => (
                <Grid item
                    key={item.key}
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <ButtonWithIcon
                        icon={item.icon}
                        buttonStyles={
                            {
                                size: 'large',
                                disabled: item.value === props.value,
                                variant: 'contained',
                                color: selectedColor[item.value === props.value],
                                onClick: () => props.onClick(item.value),
                                classes: { disabled: classes.buttonSeletDisabled },
                                className: classes.buttonSelect
                            }
                        }
                    >
                        {item.label}
                    </ButtonWithIcon>
                </Grid>
            ))}
        </Grid>

    )
}

export function ChipSelect(props) {
    return (
        <Grid container
            spacing={16}
        >
            {props.selected.map((chip, index) => (
                <Grid item key={chip.label}>
                    <Chip
                        label={chip.label}
                        onDelete={() => props.onDelete(chip)}
                        color='primary'
                    />
                </Grid>
            ))}
            {props.unselected.map((chip, index) => (
                <Grid item key={chip.label}>
                    <Chip
                        label={chip.label}
                        onClick={() => props.onClick(chip)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}