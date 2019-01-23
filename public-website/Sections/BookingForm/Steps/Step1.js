import React, { useContext } from 'react'
// State
import { Store } from '../../../state/store'
// Fields
import {
    ServiceImage,
    Bedrooms,
    Bathrooms,
    LivingAreas,
    Kitchens,
    Frequency,
    Packages,
    NumberOfCleaners,
    NumberOfHours,
    Extras,
    AllRooms,
} from '../Fields'
// Content
import {
    NeedHelp,
    BookingSummary
} from '../Content'
// Sections
import {
    FieldGroup,
    SidebarGroup,
    ExpandGroup
} from '../Layout/FieldGroup'
// Input groups
import {
    InputGroup,
    InputGroup_WithIcons,
} from '../Layout/InputGroup'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
// Icons
import LockIcon from '@material-ui/icons/EnhancedEncryption'
import { roomsMap, hourlyRateMap, packageMap, extrasMap } from '../../../components/serviceDetails';

/*

Component structure
:::::::::::::::::::::::

Grid container 
:: 1 total
:: Presentational component

    - <ServiceImage>
    :: 1 per grid container
    :: Imported from ../Fields
    :: Displays the selected service type with button to change service
    :: Placed outside left grid item for better presentation

    - <ExpandGroup>  <FrequencySelect /> </ExpandGroup>
    :: 1 per grid container
    :: ExpandGroup is a FieldGroup (see further below)
    :: FrequencySelect is a Field (see further below)
    :: Only displayed for relevant services
    :: Placed outside left grid item for better presentation


    - Left grid item
    :: Presentational component
    :: 1 per grid container
    :: Booking form
        
        - ../Layout/FieldGroup 
        :: Presentational and data component
        :: 1 or more per left grid
        :: Groups related fields
        :: Includes optional title and description as props
            
            - ../Layout/InputGroup
            :: Presentational component
            :: 1 or more per field group
            :: Defines the type of input e.g. how many columns, whether it has icons, etc.

                - ../Field 
                :: 1 or more per input group
                :: Data component
                :: Specifies the field input data

                - ../Layout/InputField
                :: 1 per field
                :: Presentational component
                :: Specifies the input type e.g. text input, select, radio buttons, etc.

  - Right grid item
  :: 1 per grid container
  :: Presentational component
  :: Sidebar

    - ../Layout/FieldGroup
    :: Same as left grid

      - ../Content
      :: 1 or more per field group
      :: Data component
      :: Speficies the content to be displayed   

*/

// Set styles
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing.unit
    },
    border: {
        marginTop: 2 * theme.spacing.unit,
        paddingRight: 4 * theme.spacing.unit,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    },
    sectionContainer: {
    },
    helpContainer: {
        paddingLeft: 4 * theme.spacing.unit,
    },
    stripeImage: {
        height: '32px'
    },
    lockIcon: {
        fontSize: '2rem'
    }
}))

export default function Step1() {
    // Get state
    const { state } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <ServiceImage />
            <ExpandGroup
                expandState={state.service.service === 10}
                timeout='auto'
            >
                <Frequency />
            </ExpandGroup>
            <Grid container className={classes.container}>
                <Grid
                    item xs={9}
                    className={classes.sectionContainer}
                >
                    <div className={classes.border}>
                        <FieldGroup
                            title='Your home'
                            description='Tell us about your home'
                        >
                            <InputGroup_WithIcons
                                cols={2}
                                filled
                                fields={[
                                    roomsMap.values[10],
                                    roomsMap.values[20],
                                    roomsMap.values[30],
                                    roomsMap.values[40]
                                ]}
                            />
                        </FieldGroup>
                        <FieldGroup
                            title='Service Type'
                            description="Fixed prices or hourly rates. It's your choice."
                        >
                            <InputGroup
                                fields={[packageMap]}
                            />
                        </FieldGroup>
                        <ExpandGroup
                            title='Add Extras'
                            description='Add some optional extras for that extra shine'
                            expandState={state.service.package === 'fixedPrice' && state.service.service === 10}
                        >
                            <InputGroup
                                fields={[extrasMap]}
                            />
                        </ExpandGroup>
                        <ExpandGroup
                            title='Hours Required'
                            description='Select how many cleaners and hours you expect your service to take'
                            expandState={state.service.package === 'hourlyRate'}
                        >
                            <InputGroup_WithIcons
                                cols={2}
                                filled
                                fields={[
                                    hourlyRateMap.values.cleaners,
                                    hourlyRateMap.values.hours,
                                ]}
                            />
                        </ExpandGroup>
                    </div>
                </Grid>
                <Grid
                    item xs={3}
                    className={classes.helpContainer}
                >
                    <SidebarGroup
                        title='Need Help?'
                    >
                        <NeedHelp align='center' />
                    </SidebarGroup>
                    <Grid container>
                        <Grid item xs={3}>
                            <LockIcon className={classes.lockIcon} />
                        </Grid>
                        <Grid item xs={9}>
                            <img
                                src='./static/other/powered_by_stripe.png'
                                className={classes.stripeImage}
                            />
                        </Grid>
                    </Grid>
                    <SidebarGroup
                        title='Booking Summary'
                    >
                        <BookingSummary variant='body2' />
                    </SidebarGroup>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}