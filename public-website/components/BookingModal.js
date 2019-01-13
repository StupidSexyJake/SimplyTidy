import React from 'react'
import { makeStyles } from '@material-ui/styles'
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
import Container from './Container'

const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100vh - 2rem)',        
        background: theme.palette.grey[200]   
    },
    container: {
        paddingTop: '2rem'
    },
    stepper: {
        background: theme.palette.grey[200]
    },
    card: {
        margin: '1.5rem auto',
        height: '65vh',
        maxWidth: '60rem'
    },
    title: {
        paddingTop: '1rem'
    }
}))

function getSteps() {
    return ['Choose Your Service', 'Select A Date', 'Add Instructions', 'Confirm Booking']
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return {
                title: 'How Can We Help You Today?',
                content: 'Test1'
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

export default function BookingForm() {
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()
    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }
    function handleReset() {
        setActiveStep(0)
    }
    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Card className={classes.card}>
                    <CardContent>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>All steps completed</Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                <Typography variant='h4' component='p' className={classes.title}>
                                    {getStepContent(activeStep)['title']}
                                </Typography>
                                {getStepContent(activeStep)['content']}
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </section>
    )
}