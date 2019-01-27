import React, { useContext } from 'react'
// State
import { Store } from '../../../state/store'
// Data
import {
    roomsMap,
    hourlyRateMap,
    packageMap,
    extrasMap,
    serviceMap,
    frequencyMap
} from '../../../data/serviceData'
// Sections
import {
    FormGroup,
    SidebarGroup,
    ExpandGroup
} from '../Layout/Sections'
// Input groups
import {
    InputGroup,
    InputGroup_WithIcons,
} from '../Layout/InputGroup'
// Input fields
import {
    ServiceImage,
    Frequency,
} from '../Fields'
// Content groups
import {
    ContentGroup_ParentValue,
    StaticGroup,
    ContentGroup_ChildValues
} from '../Layout/ContentGroup'
// Static content
import {
    NeedHelp,
    TrustIcons,
    PriceSummary,
} from '../Content'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

// Set styles
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing.unit
    },
    border: {
        marginTop: 2 * theme.spacing.unit,
        paddingRight: 3 * theme.spacing.unit,
        // borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    },
    sectionContainer: {
    },
    sidebarContainer: {
        paddingLeft: 3 * theme.spacing.unit,
    },
    stripeImage: {
        height: '32px'
    },
    lockIcon: {
        fontSize: '2rem'
    },
    paper: {
        padding: 2 * theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        background: theme.palette.primary.light,
        marginTop: 3 * theme.spacing.unit,
        marginBottom: 1 * theme.spacing.unit,
    },
    bookingSummaryGroup: {
        marginTop: 0,
        marginBottom: 0,
    },
    bookingSummaryDivider: {
        marginTop: 3 * theme.spacing.unit,
        marginBottom: 1 * theme.spacing.unit
    },
    price: {
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
                        <FormGroup
                            title='Your home'
                            description='Tell us about your home'
                        >
                            <InputGroup_WithIcons
                                cols={2}
                                filled
                                data={[
                                    roomsMap.values[10],
                                    roomsMap.values[20],
                                    roomsMap.values[30],
                                    roomsMap.values[40]
                                ]}
                            />
                        </FormGroup>
                        <FormGroup
                            title='Service Type'
                            description="Fixed prices or hourly rates. It's your choice."
                        >
                            <InputGroup
                                data={[packageMap]}
                            />
                        </FormGroup>
                        <ExpandGroup

                            expandState={state.service.package === 'fixedPrice' && state.service.service === 10}
                        >
                            <FormGroup
                                title='Add Extras'
                                description='Add some optional extras for that extra shine'
                            >
                                <InputGroup
                                    data={[extrasMap]}
                                />
                            </FormGroup>
                        </ExpandGroup>
                        <ExpandGroup
                            expandState={state.service.package === 'hourlyRate'}
                        >
                            <FormGroup
                                title='Hours Required'
                                description='Select how many cleaners and hours you expect your service to take'
                            >
                                <InputGroup_WithIcons
                                    cols={2}
                                    filled
                                    data={[
                                        hourlyRateMap.values.cleaners,
                                        hourlyRateMap.values.hours,
                                    ]}
                                />
                            </FormGroup>

                        </ExpandGroup>
                    </div>
                </Grid>
                <Grid
                    item xs={3}
                    className={classes.sidebarContainer}
                >

                    <SidebarGroup
                        title='Need Help?'
                    >
                        <StaticGroup
                            content={NeedHelp}
                        />
                    </SidebarGroup>
                    <Paper elevation={0} className={classes.paper}>
                        <SidebarGroup
                            title='Booking Summary'
                            className={classes.bookingSummaryGroup}
                        >
                            <ContentGroup_ParentValue
                                data={[serviceMap, packageMap]}
                            />
                            <ContentGroup_ChildValues
                                data={[packageMap]}
                            />
                            <Divider className={classes.bookingSummaryDivider} />
                            <StaticGroup
                                className={classes.price}
                                content={PriceSummary}
                            />
                        </SidebarGroup>
                    </Paper>
                    {/* <SidebarGroup>
                        <StaticGroup
                            content={TrustIcons}
                            height={4}
                        />
                    </SidebarGroup> */}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}