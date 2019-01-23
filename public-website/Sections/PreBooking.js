import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Layout
import { InputGroup } from './BookingForm/Layout/InputGroup'
// Fields
import {
    Name,
    Email,
    Suburb,
    Service,
    Bedrooms,
    Bathrooms,
} from './BookingForm/Fields'
// Material components
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// Custom components
import { CallToActionButton } from '../components/Buttons'

// Create styles
const useStyles = makeStyles(theme => ({
    card: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit
    },
    inputGroup: {
        marginBottom: theme.spacing.unit
    },
    submit: {
        display: 'block',
        marginTop: 2 * theme.spacing.unit
    }
}))

export default function PreBooking(props) {
    // Define styles
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={32}
            justify='center'
            className={props.className}>
            <Grid item xs={8}>
                <Card className={classes.card}>
                    <CardContent>
                        <InputGroup
                            className={classes.inputGroup}
                            cols={3}
                            fields={[
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
                            className={classes.submit}>
                            Get an instant quote
                        </CallToActionButton>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}