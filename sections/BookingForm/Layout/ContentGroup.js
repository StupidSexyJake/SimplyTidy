import React, { useContext } from 'react'
// State
import { Store } from '../../../state/store'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: 0.5 * theme.spacing.unit
    },
    iconContainer: {
        height: '20px'
    },
    icon: {
        color: theme.palette.primary.dark
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

export function StaticGroup(props) {
    // Definte styles
    const classes = useStyles()
    // Define props
    const { content, ...other } = props
    // Get number of columns
    const cols = props.cols || 1
    return (
        <Grid
            container
            spacing={8}
            className={classes.container}
            alignItems='center'
        >
            <Grid
                item
                md={12 / cols}
                sm={6} xs={12}
            >
                <VariantInput inputVariant={props.content} {...other} />
            </Grid>
        </Grid>
    )
}

export function ContentGroup_ParentValue(props) {
    // Get state
    const { state } = useContext(Store)
    // Definte styles
    const classes = useStyles()
    // Get number of columns
    const cols = props.cols || 1
    return (
        <Grid
            container
            className={classes.container}
            spacing={8}
            alignItems='flex-start'
        >
            {props.data.map((data, index) => (
                <React.Fragment key={index}>
                    <Grid item
                        xs={2}
                        className={classes.iconContainer}
                    >
                        <VariantInput
                            inputVariant={data.values[state[data.stateType][data.stateValue]].icon}
                            fontSize='small'
                            className={classes.icon}
                        />
                    </Grid>
                    <Grid item
                        xs={10}
                        sm={4}
                        md={10 / cols}
                    >
                        <VariantInput inputVariant={data.summary} />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}

export function ContentGroup_ChildValues(props) {
    // Get state
    const { state } = useContext(Store)
    // Definte styles
    const classes = useStyles()
    return (
        <Grid container
            className={classes.container}
            spacing={8}
            alignItems='flex-start'
            justify='flex-end'
        >
            {props.data.map((data) => {
                const childData = data.values[state[data.stateType][data.stateValue]]
                let output = []
                for (const key in childData.values) {
                    let value = childData.values[key]
                    let iconGrid, summaryGrid, summaryLabel
                    switch (state[data.stateType][data.stateValue]) {
                        case ('fixedPrice'):
                            iconGrid = 3
                            summaryGrid = 3
                            break
                        case ('hourlyRate'):
                            iconGrid = 2
                            summaryGrid = 10
                            summaryLabel = value.suffix
                            break
                        default:
                            console.log('error with package selection')
                    }
                    output.push(
                        <React.Fragment key={key}>
                            <Grid item
                                xs={iconGrid}
                                className={classes.iconContainer}
                            >
                                <VariantInput
                                    inputVariant={value.icon}
                                    fontSize='small'
                                    className={classes.icon}
                                />
                            </Grid>
                            <Grid item
                                xs={summaryGrid}
                            >
                                <Typography>
                                    {value.values[state[value.stateType][value.stateValue]].label} {summaryLabel}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    )
                }
                return output
            })}
        </Grid>
    )
}