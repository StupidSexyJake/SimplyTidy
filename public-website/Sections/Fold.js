import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
// Material components
import Typography from '@material-ui/core/Typography'
// Custom components
import Scrim from '../components/Scrim'
import Container from '../components/Containers/Sections'

const useStyles = makeStyles(theme => ({
    root: {
        background: props => `url("/static/backgrounds/${props.hero}") no-repeat 0 center/cover`,
    }
}))

export default function Fold(props) {
    const { children, className, size, paddingTop, paddingBottom, titleProps, title, subtitle, scrim, ...other } = props
    const classes = useStyles(props)
    const output = (
        <React.Fragment>            
            <Container 
                paddingTop={paddingTop || 20}
                paddingBottom={paddingBottom || 12}
                >
                <Typography 
                    variant={titleProps.variant || 'h2'}
                    component={titleProps.component}               
                    color={titleProps.color}
                    align={titleProps.align || 'center'}
                    className={classNames(classes.title, className)}
                    {...titleProps}
                >
                    {title}
                </Typography>
                <Typography variant='h4' component='p'>
                    {subtitle}
                </Typography>
                {children}
            </Container>
        </React.Fragment>
    )
    if (scrim) {
        return (
            <section>
                <Scrim hsl={scrim} className={classes.root}>
                    {output}
                </Scrim>
            </section>            
        )
    } else {
        return (
            <section className={classes.root}>
                {output}
            </section>
        )
    }
}