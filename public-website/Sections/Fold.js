import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import Container from '../components/Containers/Sections'

export default React.memo(function Fold(props) {
    console.log('Fold rendered')
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            background: props => `url("/static/backgrounds/${props.hero}") no-repeat 0 center/cover`,
        }
    }))
    // Define styles
    const classes = useStyles(props)
    return (
        <section>
            <Scrim
                hsl={props.scrim}
                className={classes.root}>
                <Container
                    paddingTop={props.paddingTop || 20}
                    paddingBottom={props.paddingBottom || 12}
                >
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
})