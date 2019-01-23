import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import { Container } from '../components/Containers'

export default function Fold(props) {
    // Create styles
    const useStyles = makeStyles(theme => ({
        scrim: {
            background: props => `url("/static/backgrounds/${props.hero}") no-repeat 0 center/cover`,
        },
        container: {
            paddingTop: 18 * theme.spacing.unit,
            paddingBottom: 12 * theme.spacing.unit
        }
    }))
    // Define styles
    const classes = useStyles(props)
    return (
        <section>
            <Scrim
                hsl={props.scrim}
                className={classes.scrim}>
                <Container variant='fold'>
                    <Typography
                        variant={props.titleProps.variant || 'h2'}
                        component={props.titleProps.component}
                        color={props.titleProps.color}
                        className={classNames(classes.title, props.className)}
                        {...props.titleProps}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant='h4'
                        component='p'>
                        {props.subtitle}
                    </Typography>
                    {props.children}
                </Container>
            </Scrim>
        </section>
    )
}