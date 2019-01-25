import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
// Custom components
import { Container } from '../../components/Containers'

function getServices() {
    return [
        {
            value: 1,
            href: '/how',
            image: '/static/cards/home-cleaning.jpg',
            title: 'Routine Cleaning',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        },
        {
            value: 2,
            href: '/how',
            image: '/static/cards/contemplative-reptile.jpg',
            title: 'One Time Cleaning',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        },
        {
            value: 3,
            href: '/how',
            image: '/static/cards/spring-cleaning.jpg',
            title: 'Deep Cleaning',
            description: 'Nulla posuere sollicitudin aliquam ultrices sagittis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Turpis egestas maecenas.'
        },
        {
            value: 4,
            href: '/how',
            image: '/static/cards/bond-cleaning.jpg',
            title: 'Bond Cleaning',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet.'
        },
    ]
}

// Split title into 2 lines
function splitTitle(title) {
    const titleArray = title.split(' ')
    const line2 = titleArray[titleArray.length - 1]
    const line1 = title.split(` ${line2}`)[0]
    return { line1, line2 }
}

// Create styles
const serviceListStyles = makeStyles({
    media: {
        height: '8rem'
    },
    title: {
        padding: 0
    }
})

// Create service list presentational component
function ServiceList() {
    const classes = serviceListStyles()
    return (
        <React.Fragment>
            {getServices().map((service) => (
                <Grid item md={6} lg={3} className={classes.gridItem} key={service.value}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={service.image}
                            >
                            </CardMedia>
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant='h5' component='p' color='primary' className={classes.title} align='left'>
                                    {splitTitle(service.title).line1} {splitTitle(service.title).line2}
                                </Typography>
                                <Typography color='textSecondary' component="p" className={classes.subtitle}>
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
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
        padding: '2rem 0 1rem 0'
    },
    subtitle: {
        marginBottom: 4 * theme.spacing.unit
    },
    CTAContainer: {
        width: '100%',
        margin: '0 auto',
        paddingTop: '3rem',
        maxWidth: '20rem'
    }
}))

export default React.memo(function Services() {
    // Define styles
    const classes = serviceStyles()
    return (
        <section>
            <Container variant='section'>
                <Typography variant='h3' component='h2' className={classes.heading}>
                    Services For Every Need
                </Typography>
                <Typography variant='h6' component='p' className={classes.subtitle} align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </Typography>
                <Grid container spacing={32} justify='center' alignItems='center' className={classes.gridContainer}>
                    <ServiceList />
                </Grid>
                <div className={classes.CTAContainer}>
                    <Button fullWidth variant='outlined' size='large' color='primary'>
                        See What's Included
                    </Button>
                </div>
            </Container>
        </section>
    )
})