import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Context
import { ClientContext } from '../state/ClientState'
import { ServiceContext } from '../state/ServiceState'
// Material components
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// Custom components
import { TextInput } from '../components/BookingForm/Input'
import Button_CTA from '../components/CTA/Button'
import Suburbs from '../components/Suburbs'

export default React.memo(function PreBooking() {
    console.log('PreBooking rendered')
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: 8 * theme.spacing.unit,
            paddingTop: 2 * theme.spacing.unit,
            paddingBottom: 2 * theme.spacing.unit,
            paddingLeft: 4 * theme.spacing.unit,
            paddingRight: 4 * theme.spacing.unit
        },
        inputField: {
            marginBottom: theme.spacing.unit,
            width: '100%'
        },
        submit: {
            display: 'block',
            marginTop: 4 * theme.spacing.unit
        },
        selectEmpty: {
            marginTop: 4 * theme.spacing.unit
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
    // Define styles
    const classes = useStyles()
    // Get state contexts
    const { clientState, setClientState } = React.useContext(ClientContext)
    const { serviceState, setServiceState } = React.useContext(ServiceContext)
    // Handle client state change on click events
    const handleClickClient = (name) => event => {
        setClientState({ ...clientState, [name]: event.target.value })
    }
    // Handle service state change on click events
    const handleClickService = (name) => event => {
        setServiceState({ ...clientState, [name]: event.target.value })
    }
    return (
        <Grid container spacing={32} justify='center'>
            <Grid item xs={8}>
                <Card className={classes.root}>
                    <CardContent>
                        <Grid container spacing={16}>
                            <Grid item md={4} sm={6} xs={12}>
                                <TextInput
                                    label='Name'
                                    name='name'
                                    value={clientState.name}
                                    onChange={handleClickClient('name')}
                                />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor='email'>
                                        Email
                                    </InputLabel>
                                    <Input
                                        name='email'
                                        type='email'
                                        id="email"
                                        value={clientState.email}
                                        onChange={handleClickClient('email')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Suburbs classes={classes} />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl className={classes.inputField}>
                                    <InputLabel htmlFor="service">
                                        Type of Service
                                    </InputLabel>
                                    <Select
                                        value={serviceState.service}
                                        onChange={handleClickService('service')}
                                        input={<Input name="service" id="service" />}
                                        displayEmpty
                                        name="service"
                                        className={classes.selectEmpty}>
                                        <MenuItem value={10}>
                                            Routine Cleaning
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            One Time Cleaning
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            Deep Cleaning
                                        </MenuItem>
                                        <MenuItem value={40}>
                                            Bond Cleaning
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl className={classes.inputField}>
                                    <InputLabel shrink htmlFor="bedrooms">
                                        Bedrooms
                                    </InputLabel>
                                    <Select
                                        value={serviceState.bedrooms}
                                        onChange={handleClickService('bedrooms')}
                                        input={<Input name="bedrooms" id="bedrooms" />}
                                        displayEmpty
                                        name="bedrooms"
                                        className={classes.selectEmpty}>
                                        <MenuItem value={1}>
                                            1
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            2
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            3
                                        </MenuItem>
                                        <MenuItem value={4}>
                                            4
                                        </MenuItem>
                                        <MenuItem value={5}>
                                            5
                                        </MenuItem>
                                        <MenuItem value={6}>
                                            6
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <FormControl className={classes.inputField}>
                                    <InputLabel
                                        shrink
                                        htmlFor="bathrooms">
                                        Bathrooms
                                    </InputLabel>
                                    <Select
                                        value={serviceState.bathrooms}
                                        onChange={handleClickService('bathrooms')}
                                        input={<Input name="bathrooms" id="bathrooms" />}
                                        displayEmpty
                                        name="bathrooms"
                                        className={classes.selectEmpty}>
                                        <MenuItem value={1}>
                                            1
                                        </MenuItem>
                                        <MenuItem value={2}>
                                            2
                                        </MenuItem>
                                        <MenuItem value={3}>
                                            3
                                        </MenuItem>
                                        <MenuItem value={4}>
                                            4
                                        </MenuItem>
                                        <MenuItem value={5}>
                                            5
                                        </MenuItem>
                                        <MenuItem value={6}>
                                            6
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button_CTA
                            fullWidth
                            size='large'
                            className={classes.submit}>
                            Get an instant quote
                        </Button_CTA>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
})