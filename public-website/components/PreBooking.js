import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Downshift from 'downshift'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
// Material components
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import NativeSelect from '@material-ui/core/NativeSelect'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
// Custom components
import { CTA } from '../components/Button'

const useStyles = makeStyles(theme => ({
    card: {
        width: 'fit-content',
        maxWidth: '45rem',
        margin: '0 auto',
    },
    heading: {
        padding: '0.5rem 0'
    },
    formControl: {
        marginBottom: '0.5rem',
        width: '100%'
    },
    submit: {
        display: 'block',
        marginTop: '2rem'
    },
    selectEmpty: {
        marginTop: '2rem',
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
}))
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
    const { InputProps, classes, ref, label, name, id, value, autoComplete, ...other } = inputProps
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input autoComplete='__nope'
                name={name} 
                id={id} 
                value={value} 
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

export default function PreBooking() {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        suburb: '',
        service: 10,
        bedrooms: 1,
        bathrooms: 1

    })
    React.useEffect(() => {
        setValues({
            ...values,
        })
    }, [])
    const handleChange = (name, email, suburb, service, bedrooms, bathrooms) => event => {
        setValues({
            ...values,
            [name]: event.target.value,
            [email]: event.target.value,
            [suburb]: event.target.value,
            [service]: event.target.value,
            [bedrooms]: event.target.value,
            [bathrooms]: event.target.value
        });
    }
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant='h4' component='p' className={classes.heading}>
                    You click. We clean. It's that simple.
                </Typography>
                <form autoComplete='__nope'>
                    <Grid container spacing={16}>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='name'>Name</InputLabel>
                                <Input name='name' id='name' value={values.name} onChange={handleChange('name')} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor='email'>Email</InputLabel>
                                <Input name='email' type='email' id="email" value={values.email} onChange={handleChange('email')} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <Downshift id="downshift">
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
                                                value: '',
                                                classes,
                                                label: 'Suburb',                                                
                                                InputProps: getInputProps({
                                                    autoComplete: '__nope',
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
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="service">Type of Cleaning</InputLabel>
                                <Select
                                    value={values.service}
                                    onChange={handleChange('service')}
                                    input={<Input name="service" id="service" />}
                                    displayEmpty
                                    name="service"
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={10}>Routine</MenuItem>
                                    <MenuItem value={20}>One Time</MenuItem>
                                    <MenuItem value={30}>Deep</MenuItem>
                                    <MenuItem value={40}>Bond </MenuItem>
                                    <MenuItem value={50}>Airbnb</MenuItem>
                                    <MenuItem value={60}>Special Request</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="bedrooms">Bedrooms</InputLabel>
                                <Select
                                    value={values.bedrooms}
                                    onChange={handleChange('bedrooms')}
                                    input={<Input name="bedrooms" id="bedrooms" />}
                                    displayEmpty
                                    name="bedrooms"
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="bathrooms">Bathrooms</InputLabel>
                                <Select
                                    value={values.bathrooms}
                                    onChange={handleChange('bathrooms')}
                                    input={<Input name="bathrooms" id="bathrooms" />}
                                    displayEmpty
                                    name="bathrooms"
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>                
                    <CTA fullWidth size='large' className={classes.submit}>
                        Get an instant quote
                    </CTA>
                </form>
            </CardContent>
        </Card>
    )
}