import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Data
import {
    clientMap,
    roomsMap,
    serviceMap
} from '../data/serviceData'
// Layout
import {
    InputGroup,
    InputGroup_WithIcons
} from './BookingForm/Layout/InputGroup'
// Fields
import {
    Name,
    Email,
    Suburb,
    Service,
    Bedrooms,
    Bathrooms,
} from './BookingForm/Fields'
// MUI components
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Wrapper } from '../components/Wrappers'
// Custom components
import { CallToActionButton } from '../components/Buttons'

// Create styles
const useStyles = makeStyles(theme => ({
    card: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
    },
    inputGroup: {
        marginBottom: theme.spacing.unit
    },
    submit: {
        display: 'block',
        marginTop: 3 * theme.spacing.unit
    },
    mobileTitle: {
        paddingBottom: theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            fontSize: 'calc(28px + (34 - 28) * (100vw - 320px) / (380 - 320))'
        }
    },
    mobileSubtitle: {
        color: theme.palette.primary.main,
        marginBottom: 2 * theme.spacing.unit
    },
    mobileSubmit: {
        display: 'block',
        marginTop: 6 * theme.spacing.unit
    },
}))

export function PreBooking(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={32}
            justify='center'
            className={props.className}
        >
            <Grid item
                xs={12}
                sm={10}
                md={8}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <InputGroup
                            className={classes.inputGroup}
                            cols={3}
                            data={[
                                { key: 1, inputField: Name },
                                { key: 2, inputField: Email },
                                { key: 3, inputField: Suburb },
                                { key: 4, inputField: Service },
                                { key: 5, inputField: Bedrooms },
                                { key: 6, inputField: Bathrooms }
                            ]}
                        />
                        <CallToActionButton
                            fullWidth
                            size='large'
                            className={classes.submit}
                        >
                            Get an instant quote
                        </CallToActionButton>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}

export function PreBooking_Mobile(props) {
    // Define styles
    const classes = useStyles(props)
    return (
        <Grid
            container
            justify='center'
            className={props.className}
        >
            <Grid item
                xs={12
                }>
                <Wrapper variant='section'>
                    <Typography
                        variant='h3'
                        component='p'
                        className={classes.mobileTitle}
                    >
                        You click. We clean.
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        align='center'
                        className={classes.mobileSubtitle}
                    >
                        It's that simple.
                    </Typography>
                    <InputGroup_WithIcons
                        cols={1}
                        iconSize='default'
                        alignIcons='flex-end'
                        data={[
                            serviceMap,
                            roomsMap.values[10],
                            roomsMap.values[20],
                            clientMap.values.suburb,
                            // clientMap.values.name,
                            // clientMap.values.email,
                        ]}
                    />
                    <CallToActionButton
                        fullWidth
                        size='large'
                        className={classes.mobileSubmit}>
                        Get an instant quote
                    </CallToActionButton>
                </Wrapper>
            </Grid>
        </Grid >
    )
}