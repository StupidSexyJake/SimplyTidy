import React from 'react'
// Utils
import { VariantInput } from '../../../utils/functions'
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
        textAlign: 'center',
    },
    icon: {
        color: theme.palette.primary.dark
    }
}))

export function InputGroup(props) {
    // Get number of columns
    const cols = props.cols || 1
    // Define styles
    const classes = useStyles()
    return (
        <Grid container
            spacing={16}
            className={classes.container}
            alignItems='center'
        >
            {props.data.map((data, index) => (
                <Grid item
                    xs={12}
                    sm={6}
                    md={12 / cols}
                    key={index}
                >
                    <VariantInput filled={props.filled} inputVariant={data.inputField} />
                </Grid>
            ))}
        </Grid>
    )
}

export function InputGroup_WithIcons(props) {
    // Definte styles
    const classes = useStyles()
    // Get number of columns
    const cols = props.cols || 1
    return (
        <Grid
            container
            spacing={16}
            className={classes.container}
            alignItems='center'
        >
            {props.data.map((data, index) => (
                <React.Fragment key={index}>
                    <Grid item
                        xs={2}
                        sm={1}
                        className={classes.iconContainer}
                    >
                        <VariantInput
                            inputVariant={data.icon}
                            fontSize='large'
                            className={classes.icon}
                        />
                    </Grid>
                    <Grid item
                        xs={10}
                        sm={(12 / cols) - 1}
                    >
                        <VariantInput
                            filled={props.filled}
                            inputVariant={data.inputField}
                        />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}