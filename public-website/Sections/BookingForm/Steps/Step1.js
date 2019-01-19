import React from 'react'
// Sections
import ServiceType from '../ServiceType'
import FrequencySelect from '../FrequencySelect'
import FieldGroup from '../Layout/FieldGroup'
import Location from '../Location'
import BedBaths from '../BedBath'
import ShowMoreRooms from '../ShowMoreRooms'
import ExtraRooms from '../ExtraRooms'
import HourlyRate from '../HourlyRate'
import AddExtras from '../AddExtras'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default React.memo(function Step1() {
    // Set styles
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
    // Define styles
    const classes = useStyles()
    // Handle client state change on click events
    // Handle select events for service package type
    // const handleSelectFixedPrice = () => {
    //     setClientState({...clientState, 'fixedPrice': true})
    // }
    // const handleSelectHourly = () => {
    //     setClientState({...clientState, 'fixedPrice': false})
    // }

    
    const packageColor = {
        true: 'primary',
        false: 'default'
    }
    function ButtonColor(propInputs) {
        const buttonColor = packageColor[propInputs.isSelected]
        return <Button variant='contained' color={buttonColor} onClick={propInputs.onClick}>{propInputs.children}</Button>
    }
    return (
        <React.Fragment>
            {/* <ServiceType />
            <form>
                <FrequencySelect />
                <Grid container>
                    <Grid item xs={9} className={classes.sectionContainer}>
                        <FieldGroup
                            title='Your home'
                            description='Tell us about your home'>
                            <Location />
                            <BedBaths />
                            <Grid
                                container spacing={16}
                                className={classes.gridContainer}
                                alignItems='center'
                            >
                                {!bookingFormState.showAllRooms && <ShowMoreRooms />}
                                {bookingFormState.showAllRooms && <ExtraRooms />}
                            </Grid>
                        </FieldGroup>
                        <FieldGroup
                            title='Service Type'
                            description="Fixed prices or hourly rates. It's your choice."
                        >
                            <Grid
                                container spacing={8}
                                className={classes.gridContainer}
                                alignItems='center'
                            >
                                <Grid item>
                                    <ButtonColor
                                        isSelected={clientState.fixedPrice}
                                        onClick={handleSelectFixedPrice}
                                    >
                                        Fixed Price Package
                                    </ButtonColor>
                                </Grid>
                                <Grid item>
                                    <ButtonColor
                                        isSelected={!clientState.fixedPrice}
                                        onClick={handleSelectHourly}
                                    >
                                        Hourly Rate
                                    </ButtonColor>
                                </Grid>
                            </Grid>
                        </FieldGroup>
                        {clientState.fixedPrice && <FieldGroup
                            title='Add Extras'
                            description='Add some optional extras for that extra shine'
                        >
                            <AddExtras />
                        </FieldGroup>
                        }
                        {!clientState.fixedPrice && <FieldGroup
                            title='Hours Required'
                            description='Select how many cleaners and hours you expect your service to take'
                        >
                            <HourlyRate />
                        </FieldGroup>
                        }
                    </Grid>
                    <Grid
                        item xs={3}
                        className={classes.helpContainer}
                    >
                        <Typography
                            variant='subtitle1'
                            className={classes.sectionTitle}
                        >
                            Need Help?
                        </Typography>
                        <Typography
                            variant='caption'
                            className={classes.sectionSubtitle}
                        >
                            Click here to chat online with our Customer Happiness Team
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.sectionTitle}
                        >
                            Booking Summary
                        </Typography>
                        <Typography
                            variant='caption'
                            className={classes.sectionSubtitle}
                        >
                            Click here to chat online with our Customer Happiness Team
                        </Typography>
                    </Grid>
                </Grid>
            </form> */}
        </React.Fragment>
    )
})