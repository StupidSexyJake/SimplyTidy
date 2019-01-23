import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
// State
import { Store } from '../../state/store'
// Actions
import {
    nextBookingStep,
    previousBookingStep
} from '../../state/actions'
// Steps
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
import { Container } from '../../components/Containers'

// Define steps
const steps = ['Choose Your Service', 'Select A Date', 'Add Instructions', 'Confirm Booking']

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

// Create styles
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.grey[200],
    },
    stepperContainer: {
        paddingTop: theme.spacing.unit,
        height: 'fit-content'
    },
    stepper: {
        background: theme.palette.grey[200],
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit,
    },
    cardContainer: {
        paddingBottom: 6 * theme.spacing.unit,
        height: 'fit-content'
    },
    title: {
        marginTop: 6 * theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
}))

export default React.memo(function BookingForm(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Container variant='base' md={6} className={classes.stepperContainer}>
                <Stepper
                    activeStep={state.bookingForm.page}
                    alternativeLabel
                    className={classes.stepper}
                >
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>
                                    {label}
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Container>
            <Container variant='base' md={8} className={classes.cardContainer}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContainer}>
                        <Container>
                            {state.bookingForm.page === steps.length ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed
                                    </Typography>
                                </div>
                            ) : (
                                    <div>
                                        <Typography
                                            variant='h4'
                                            component='p'
                                            className={classes.title}
                                            color='textPrimary'
                                        >
                                            {getStepIndex(state.bookingForm.page)['title']}
                                        </Typography>
                                        <Typography
                                            variant='subtitle1'
                                            className={classes.subtitle}
                                            align='center'
                                        >
                                            {getStepIndex(state.bookingForm.page)['subtitle']}
                                        </Typography>
                                        {getStepIndex(state.bookingForm.page)['content']}
                                        <div>
                                            <Button
                                                disabled={state.bookingForm.page === 0}
                                                onClick={() => dispatch(previousBookingStep())}
                                                className={classes.backButton}
                                            >
                                                Back
                                        </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => dispatch(nextBookingStep())}
                                            >
                                                {state.bookingForm.page === steps.length - 1 ? 'Finish' : 'Next'}
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
})