import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
    },
    iconContainer: {
        textAlign: 'center'
    },
    inputField: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
}))

export function InputGroup_2Col_WithIcons(props) {
    const classes = useStyles()
    function InputType(props) {
        const InputVariant = props.type
        return <InputVariant {...props.inputProps}>{props.inputChildren}</InputVariant>
    }
    return (
        <Grid container spacing={16} className={classes.root} alignItems='center'>
            {props.fields.map((field) => (
                <React.Fragment>
                    <Grid item xs={1} className={classes.iconContainer}>
                        {field.icon}
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl className={classes.inputField} variant='filled'>
                            <InputLabel shrink htmlFor={field.name}>{field.label}</InputLabel>
                            <InputType type={field.inputType} inputProps={field.inputProps} inputChildren={field.inputChildren} />
                        </FormControl>
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}

export function InputGroup_1Col_WithIcons(props) {
    const classes = useStyles()
    return (
        <Grid container spacing={16} className={classes.root} alignItems='center'>
            {props.fields.map((field) => (
                <React.Fragment>
                    <Grid item xs={1} className={classes.iconContainer}>
                        {field.icon}
                    </Grid>
                    <Grid item xs={11}>
                        {field.input}                
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}