import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
}))

export const TextInput = React.memo(function input(props) {
    const classes = useStyles()
    return (
        <FormControl className={classes.root}>
            <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
            <Input name={props.name} id={props.name} value={props.value} onChange={props.onChange} />
        </FormControl>
    )
})