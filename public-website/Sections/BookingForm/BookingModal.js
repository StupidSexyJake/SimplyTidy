import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Context
// Sections
import Step1 from './Steps/Step1'
// Material components
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// Custom components
import Container from '../../components/Containers'

// Get current step
function getStepIndex(stepIndex) {
    switch (stepIndex) {
        case 0:
            return {
                title: 'How Can We Help You Today?',
                subtitle: 'Tell us about your home and cleaning requirements',
                content: <Step1 />
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

// Export booking form
export default React.memo(function BookingForm(props) {
    // Create styles
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
    // Define styles
    const classes = useStyles()
    // Define props
    const { service, ...other } = props
    // Define steps
    const steps = ['Choose Your Service', 'Select A Date', 'Add Instructions', 'Confirm Booking']
    // // Handle next step
    // function handleNext() {
    //     setBookingFormState('page', bookingFormState.page + 1)
    // }
    // // Handle previous step
    // function handleBack() {
    //     setBookingFormState(['page'], bookingFormState.page - 1)
    // }
    return (
        <section className={classes.root}>
            {/* <Container md={6} paddingTop='1' paddingBottom='0' height='fit-content'>
                <Stepper activeStep={bookingFormState.page} alternativeLabel className={classes.stepper}>
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
                            {bookingFormState.page === steps.length ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed
                                    </Typography>
                                </div>
                            ) : (
                                <div>
                                    <Typography variant='h4' component='p' className={classes.title} color='textPrimary'>
                                        {getStepIndex(bookingFormState.page)['title']}
                                    </Typography>
                                    <Typography variant='subtitle1' className={classes.subtitle} align='center'>
                                        {getStepIndex(bookingFormState.page)['subtitle']}
                                    </Typography>
                                    {getStepIndex(bookingFormState.page)['content']}
                                    <div>
                                        <Button disabled={bookingFormState.page === 0} onClick={handleBack} className={classes.backButton}>
                                            Back
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={handleNext}>
                                            {bookingFormState.page === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Container>
                    </CardContent>
                </Card>
            </Container> */}
        </section>
    )
})