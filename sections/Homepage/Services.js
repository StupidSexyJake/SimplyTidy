import React from 'react'
// Data
import { serviceMap } from '../../data/serviceData'
// MUI components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
// Custom components
import { Wrapper } from '../../components/Wrappers'

// Create service array
let serviceArray = []
for (const key in serviceMap.values) {
    let value = serviceMap.values[key]
    serviceArray.push(
        {
            key: key,
            label: value.label,
            image: `/static/cards/${value.image}.jpg`,
            href: value.href,
            description: value.description.short
        }
    )
}

// Create styles
const serviceListStyles = makeStyles(theme => ({
    media: {
        height: 16 * theme.spacing.unit,
    },
}))

// Create service list presentational component
function ServiceList() {
    const classes = serviceListStyles()
    return (
        <React.Fragment>
            {serviceArray.map((service) => (
                <Grid item
                    key={service.key}
                    sm={6}
                    lg={3}
                    className={classes.gridItem}
                >
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={service.image}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='p'
                                color='primary'
                                align='left'
                            >
                                {service.label}
                            </Typography>
                            <Typography color='textSecondary'>
                                {service.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                component='a'
                                href={service.href}
                                size="small"
                                color="primary"
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </React.Fragment>
    )
}

// Services styles
const serviceStyles = makeStyles(theme => ({
    gridContainer: {
        paddingTop: 4 * theme.spacing.unit,
        paddingBottom: 2 * theme.spacing.unit,
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0,
            marginBottom: theme.spacing.unit
        }
    },
    subtitle: {
        marginBottom: 4 * theme.spacing.unit
    },
    CTAContainer: {
        maxWidth: 60 * theme.spacing.unit,
        margin: '0 auto',
        paddingTop: 6 * theme.spacing.unit,
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
    }
}))

export default function Services() {
    // Define styles
    const classes = serviceStyles()
    return (
        <section>
            <Wrapper variant='section'>
                <Typography
                    variant='h2'
                    className={classes.title}
                >
                    Services For Every Need
                </Typography>
                <Hidden smDown>
                    <Typography
                        variant='h5'
                        component='p'
                        className={classes.subtitle}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Typography>
                </Hidden>
                <Grid container
                    spacing={32}
                    justify='center'
                    className={classes.gridContainer}
                >
                    <ServiceList />
                </Grid>
                <div className={classes.CTAContainer}>
                    <Button
                        fullWidth
                        variant='outlined'
                        size='large'
                        color='primary'
                    >
                        See What's Included
                    </Button>
                </div>
            </Wrapper>
        </section>
    )
}