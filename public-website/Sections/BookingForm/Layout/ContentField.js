import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// Create styles
const useStyles = makeStyles((theme) => ({
    iconContentIcon: {
        height: props => props.height * theme.spacing.unit,
        fontSize: props => props.height * theme.spacing.unit,
    }
}))

// Create input component based on prop variant
function VariantInput(inputProps) {
    const { inputVariant, ...other } = inputProps
    const InputVariant = inputVariant
    return (
        <InputVariant {...other} />
    )
}

export function Summary(props) {
    return (
        <Typography variant={props.variant || 'body2'} align={props.align}>
            {props.summary}
        </Typography>
    )
}

export function StaticText(props) {
    return (
        <Typography variant={props.variant || 'caption'} align={props.align} className={props.className}>
            {props.children}
        </Typography>
    )
}

export function IconContent(props) {
    // Define styles
    const classes = useStyles(props)
    return (
        <Grid container spacing={8} alignItems='center' justify='flex-start'>
            {props.icons.map((icon, index) => (
                <Grid item key={index}>
                    <VariantInput inputVariant={icon.inputVariant} src={icon.src} className={classes.iconContentIcon} />
                </Grid>
            ))}
        </Grid>
    )
}