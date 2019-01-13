import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
// Custom components
import Container from '../components/Container'

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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis.'
        },
        { 
            value: 5, 
            href: '/how', 
            image: '/static/cards/home-cleaning.jpg', 
            title: 'Airbnb Turnover', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis.'
        },
        { 
            value: 6, 
            href: '/how', 
            image: '/static/cards/spring-cleaning.jpg', 
            title: 'Special Requests', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis.'
        },
    ]
}

export function ServiceList() {
    const useStyles = makeStyles(theme => ({
        gridItem: {
            marginTop: '2rem'
        },
        content: {
            padding: '2rem 1rem',
        },
        media: {
            height: '8rem'
        }
    }))
    const classes = useStyles()
    return (
        <React.Fragment>
            {getServices().map((service) => (
                <Grid item sm={12} md={6} lg={4} xl={4} className={classes.gridItem} key={service.value}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={service.image}
                            />
                            <CardContent className={classes.content}>
                                <Typography variant='h5' component='p' color='primary'>
                                    {service.title}
                                </Typography>
                                <Typography component="p" align='center'>
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

export default function Services() {
    const useStyles = makeStyles(theme => ({
        root: {
            padding: '1rem 0 2rem 0'
        },
        heading: {
            paddingBottom: '2rem'
        },
    }))
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Container>
                <Typography variant='h3' component='h2' className={classes.heading}>
                    Services For Every Need
                </Typography>
                <Grid container spacing={32} justify='center' className={classes.gridContainer}>
                    <ServiceList />
                </Grid>
            </Container>
        </section>
    )
}