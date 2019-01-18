import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Context
import {ClientContext, BookingFormContext} from '../../components/Context'
// Sections
import ServiceType from './ServiceType'
import FrequencySelect from './FrequencySelect'
import FieldGroup from '../../components/BookingForm/FieldGroup'
import Location from './Location'
import BedBaths from './BedBath'
import ShowMoreRooms from './ShowMoreRooms'
import ExtraRooms from './ExtraRooms'
import HourlyRate from './HourlyRate'
// Material components
import Grid from '@material-ui/core/Grid'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// Custom components
import Container from '../../components/Containers/Sections'
import AddExtras from './AddExtras'

function getStepContent(stepIndex, props) {
    const useStyles = makeStyles(theme => ({
        gridContainer: {
            paddingLeft: theme.spacing.unit,
            paddingRight: theme.spacing.unit
        },
        sectionTitle: {
            paddingBottom: 0
        },
        sectionSubtitle: {
            paddingBottom: 2 * theme.spacing.unit
        },
        sectionContainer: {            
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            paddingRight: 4 * theme.spacing.unit,      
        },
        helpContainer: {
            paddingLeft: 4 * theme.spacing.unit, 
        },        
    }))
    const classes = useStyles()    
    const {clientState, setClientState} = React.useContext(ClientContext)
    const {bookingFormState, changeBookingFormState} = React.useContext(BookingFormContext)


    const selectFixed = () => {
        setClientState({...clientState, 'fixedPrice': true})
    }
    const selectHourly = () => {
        setClientState({...clientState, 'fixedPrice': false})
    }
    
    
    const packageColor = {
        true: 'primary',
        false: 'default'
    }
    function ButtonColor(propInputs) {
        const buttonColor = packageColor[propInputs.isSelected]
        return <Button variant='contained' color={buttonColor} onClick={propInputs.onClick}>{propInputs.children}</Button>
    }
   
    switch (stepIndex) {
        case 0:
            return {
                title: 'How Can We Help You Today?',
                subtitle: 'Tell us about your home and cleaning requirements',
                content: (
                    <React.Fragment>
                        <ServiceType />
                        <form>
                            <FrequencySelect />
                             <Grid container>
                                <Grid item xs={9} className={classes.sectionContainer}>
                                    <FieldGroup title='Your home' description='Tell us about your home'>
                                        <Location />
                                        <BedBaths />
                                        <Grid container spacing={16} className={classes.gridContainer} alignItems='center'>
                                            {!bookingFormState.showAllRooms && <ShowMoreRooms />}
                                            {bookingFormState.showAllRooms && <ExtraRooms />}
                                        </Grid>
                                    </FieldGroup>
                                    <FieldGroup title='Service Type' description="Fixed prices or hourly rates. It's your choice.">
                                        <Grid container spacing={8} className={classes.gridContainer} alignItems='center'>
                                            <Grid item>
                                                <ButtonColor isSelected={clientState.fixedPrice} onClick={selectFixed}>
                                                    Fixed Price Package
                                                </ButtonColor>
                                            </Grid>
                                            <Grid item>
                                                <ButtonColor isSelected={!clientState.fixedPrice} onClick={selectHourly}>
                                                    Hourly Rate
                                                </ButtonColor>
                                            </Grid>   
                                        </Grid>
                                    </FieldGroup>
                                    {clientState.fixedPrice && <FieldGroup title='Add Extras'
                                        description='Add some optional extras for that extra shine'
                                    >
                                        <AddExtras />
                                    </FieldGroup>
                                    }
                                    {!clientState.fixedPrice && <FieldGroup title='Hours Required'
                                        description='Select how many cleaners and hours you expect your service to take'
                                    >
                                        <HourlyRate />
                                    </FieldGroup>
                                    }
                                </Grid>
                                <Grid item xs={3} className={classes.helpContainer}>
                                    <Typography variant='subtitle1' component='p' className={classes.sectionTitle}>
                                        Need Help?
                                    </Typography>
                                    <Typography variant='caption' className={classes.sectionSubtitle}>
                                        Click here to chat online with our Customer Happiness Team
                                    </Typography>
                                    <Typography variant='subtitle1' component='p' className={classes.sectionTitle}>
                                        Booking Summary
                                    </Typography>
                                    <Typography variant='caption' className={classes.sectionSubtitle}>
                                        Click here to chat online with our Customer Happiness Team
                                    </Typography>
                                </Grid>                  
                            </Grid>                            
                        </form>
                    </React.Fragment>
                )
            }
        case 1:
            return {
                title: 'Choose Your Preferred Service Date',
                content: 'Test2'
            }
        case 2:
            return {
                title: 'Add Special Instructions',
                content: 'Test3'
            }
        case 3:
            return {
                title: 'Confirm Your Booking Request',
                content: 'Test3'
            }
        default:
            return {
                title: 'Uh Oh! Something Went Wrong...',
                content: 'Please email us at support@goldcoastmaids.com.au'
            }
    }
}

export default function BookingForm(props) {
    const {clientState, setClientState} = React.useContext(ClientContext)
    const {bookingFormState, changeBookingFormState} = React.useContext(BookingFormContext)
    const { service, ...other } = props
    const steps = ['Choose Your Service', 'Select A Date', 'Add Instructions', 'Confirm Booking']
    const useStyles = makeStyles(theme => ({
        root: {
            background: theme.palette.grey[200],
        },
        stepper: {
            background: theme.palette.grey[200],         
            marginTop: 2 * theme.spacing.unit,            
            marginBottom: 2 * theme.spacing.unit,
        },
        title: {
            marginTop: 2 * theme.spacing.unit,
            paddingBottom: theme.spacing.unit
        },
        card: {
            height: '100%',
        },
    }))
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(bookingFormState.page)
    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        props.changeState('page', bookingFormState.page + 1)
    }
    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
        props.changeState(['page'], bookingFormState.page - 1)
    }
    function handleReset() {
        setActiveStep(0)
        props.changeState(['page'], 0)
    }
    return (
        <section className={classes.root}>
            <Container md={6} paddingTop='1' paddingBottom='0' height='fit-content'>
                <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Container>
            <Container md={8} paddingTop='0' paddingBottom='6' height='fit-content'>
                <Card className={classes.card}>
                    <CardContent>
                        <Container paddingTop='2' paddingBottom='2'>
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography className={classes.instructions}>All steps completed</Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography variant='h4' component='p' className={classes.title} color='textPrimary'>
                                        {getStepContent(activeStep, props)['title']}
                                    </Typography>
                                    <Typography variant='subtitle1' component='p' className={classes.subtitle} align='center'>
                                        {getStepContent(activeStep, props)['subtitle']}
                                    </Typography>
                                    {getStepContent(activeStep, props)['content']}
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Container>
                    </CardContent>
                </Card>
            </Container>
        </section>
    )
}