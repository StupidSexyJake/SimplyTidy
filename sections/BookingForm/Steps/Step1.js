import React, { useContext } from 'react'
// State
import { Store } from '../../../state/store'
// Data
import {
    roomsMap,
    hourlyRateMap,
    packageMap,
    serviceMap,
    extrasMap,
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
    InputGroup_FieldIcon,
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
    PriceSummary,
} from '../Content'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core';

// Set styles
const useStyles = makeStyles(theme => ({
    serviceImageContainer: {
        marginTop: 4 * theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            marginTop: 2 * theme.spacing.unit
        }
    },
    frequencyContainer: {
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 1 * theme.spacing.unit
    },
    container: {
        marginTop: 2 * theme.spacing.unit,
    },
    gridItem: {
        paddingBottom: '0 !important',
        paddingTop: '0 !important'
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
        marginBottom: 1 * theme.spacing.unit,
    },
    bookingSummaryGroup: {
        marginTop: 0,
        marginBottom: 0,
    },
    bookingSummaryDivider: {
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit
    },
    totalPrice: {
        paddingBottom: 0
    }
}))

export default function Step1() {
    // Get state
    const { state } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className={classes.serviceImageContainer}>
                <ServiceImage />
            </div>
            <Grid container
                className={classes.container}
                justify='center'
                spacing={32}
            >
                <Grid item
                    className={classes.gridItem}
                    xs={12}
                    sm={11}
                    md={10}
                    lg={9}
                >
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
                        <InputGroup_FieldIcon
                            data={packageMap}
                        />
                    </FormGroup>
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
                    <ExpandGroup
                        expandState={state.service.service === '10'}
                    >
                        <FormGroup
                            title='Service Frequency'
                            description='How often would you like us to come?'
                        >
                            <InputGroup_FieldIcon
                                data={frequencyMap}
                            />
                        </FormGroup>
                    </ExpandGroup>
                    <ExpandGroup
                        expandState={
                            state.service.package === 'fixedPrice' &&
                            (state.service.service === '10' || state.service.service === '20')
                        }
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
                </Grid>
                <Grid item
                    className={classes.gridItem}
                    xs={12}
                    sm={11}
                    md={10}
                    lg={3}
                >
                    <Hidden mdDown>
                        <SidebarGroup
                            title='Need Help?'
                            titleVariant='h6'
                        >
                            <StaticGroup
                                content={NeedHelp}
                            />
                        </SidebarGroup>
                    </Hidden>
                    <Paper
                        elevation={0}
                        className={classes.paper}
                    >
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
                            <Typography>
                                Your Price
                            </Typography>
                            <StaticGroup
                                variant='h4'
                                align='left'
                                content={PriceSummary}
                                className={classes.totalPrice}
                            />
                        </SidebarGroup>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}