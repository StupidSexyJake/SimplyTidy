import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Layout
import { InputField } from './BookingForm/Layout/InputContainer'
// Fields
import {
    Name,
    Email,
    Suburb,
    Service,
    Bedrooms,
    Bathrooms
} from './BookingForm/Fields'
// Material components
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// Custom components
import Button_CTA from '../components/Buttons'

export default function PreBooking() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: 8 * theme.spacing.unit,
            paddingTop: 2 * theme.spacing.unit,
            paddingBottom: 2 * theme.spacing.unit,
            paddingLeft: 4 * theme.spacing.unit,
            paddingRight: 4 * theme.spacing.unit
        },
        submit: {
            display: 'block',
            marginTop: 4 * theme.spacing.unit
        },
        container: {
            flexGrow: 1,
            position: 'relative',
        },
        paper: {
            position: 'absolute',
            zIndex: 1,
            marginTop: theme.spacing.unit,
            left: 0,
            right: 0,
        },
    }))
    // Define styles
    const classes = useStyles()
    return (
        <Grid container spacing={32} justify='center'>
            <Grid item xs={8}>
                <Card className={classes.root}>
                    <CardContent>
                        <Grid container spacing={16}>
                            <InputField>
                                <Name />
                            </InputField>
                            <InputField>
                                <Email />
                            </InputField>
                            <InputField>
                                <Suburb />
                            </InputField>
                            <InputField>
                                <Service />
                            </InputField>
                            <InputField>
                                <Bedrooms />
                            </InputField>
                            <InputField>
                                <Bathrooms />
                            </InputField>
                        </Grid>
                        <Button_CTA
                            fullWidth
                            size='large'
                            className={classes.submit}>
                            Get an instant quote
                        </Button_CTA>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}