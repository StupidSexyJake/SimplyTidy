import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        marginTop: 0.5 * theme.spacing.unit,
    },
    iconContainer: {
        textAlign: 'center'
    },
}))

export function InputGroup(props) {
    // Get number of columns
    const cols = props.cols || 1
    // Define styles
    const classes = useStyles()
    // Create input component
    function FieldInput(inputProps) {
        const InputVariant = inputProps.type
        return <InputVariant {...inputProps} />
    }
    return (
        <Grid
            container
            spacing={16}
            className={classes.container}
            alignItems='center'
        >
            {props.fields.map((field, index) => (
                <React.Fragment key={index}>
                    <Grid item md={12 / cols} sm={6} xs={12} className={props.className}>
                        <FieldInput filled={props.filled} type={field.inputField} />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}

export function InputGroup_WithIcons(props) {
    // Definte styles
    const classes = useStyles()
    // Get number of columns
    const cols = props.cols || 1
    // Create input component
    function FieldInput(inputProps) {
        const InputVariant = inputProps.type
        return <InputVariant {...inputProps} />
    }
    return (
        <Grid
            container
            spacing={16}
            className={classes.container}
            alignItems='center'
        >
            {props.fields.map((field, index) => (
                <React.Fragment key={index}>
                    <Grid item xs={1} className={classes.iconContainer}>
                        {field.icon}
                    </Grid>
                    <Grid item xs={(12 / cols) - 1}>
                        <FieldInput filled={props.filled} type={field.inputField} />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}