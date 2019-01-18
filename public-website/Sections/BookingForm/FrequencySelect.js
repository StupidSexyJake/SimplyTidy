import React from 'react'
// Context
import {ClientContext} from '../../components/Context'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
    frequencyGroup: {
        justifyContent: 'center',
    },
    checked: {
        '&, & + $label': {
          color: theme.palette.secondary.main,
        },
    },
    label: {},
    noMarginRight: {
        marginRight: 0
    }
}))

export default function FrequencySelect() {
    const {clientState, setClientState} = React.useContext(ClientContext)
    const classes = useStyles()
    const handleChange = (name) => event => {
        setClientState({...clientState, [name]: event.target.value})
    }
    return (
        <Grid container className={classes.root} justify='center' spacing={32}>
            <Grid item>
                <FormControl >
                    <RadioGroup
                        row
                        aria-label="Frequency"
                        name="Frequency"
                        className={classes.frequencyGroup}
                        value={clientState.frequency}
                        onChange={handleChange('frequency')}
                    >
                        <FormControlLabel 
                            classes={{ label: classes.label }} 
                            value='weekly' 
                            control={<Radio classes={{ checked: classes.checked }} />} 
                            label='Weekly' />
                        <FormControlLabel 
                            classes={{ label: classes.label }} 
                            value='fortnightly' 
                            control={<Radio classes={{ checked: classes.checked }} />} 
                            label='Fortnightly' />
                        <FormControlLabel 
                            classes={{ label: classes.label }} 
                            value='monthly' 
                            control={<Radio classes={{ checked: classes.checked }} />} 
                            label='Monthly' 
                            className={classes.noMarginRight} />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}