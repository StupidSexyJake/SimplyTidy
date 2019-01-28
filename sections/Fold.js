import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import { Wrapper } from '../components/Wrappers'

export default function Fold(props) {
    // Create styles
    const useStyles = makeStyles(theme => ({
        section: {
            height: props => props.height || 'auto'
        },
        scrim: {
            background: props => `url('/static/backgrounds/${props.hero}') no-repeat 0 center/cover`,
        },
    }))
    // Define styles
    const classes = useStyles(props)
    return (
        <section className={classes.section}>
            <Scrim
                hsl={props.scrim}
                className={classes.scrim}>
                <Wrapper variant='fold'>
                    <Typography
                        variant={props.titleProps && props.titleProps.variant || 'h1'}
                        component={props.titleProps && props.titleProps.component}
                        color={props.titleProps && props.titleProps.color}
                        className={classNames(classes.title, props.className)}
                        {...props.titleProps}
                    >
                        {props.title}
                    </Typography>
                    <Hidden
                        smDown
                        implementation='css'
                    >
                        <Typography
                            variant='h4'
                            component='p'
                            color={props.subtitleProps && props.subtitleProps.color}
                            {...props.subtitleProps}
                        >
                            {props.subtitle}
                        </Typography>
                    </Hidden>
                    {props.children}
                </Wrapper>
            </Scrim>
        </section>
    )
}