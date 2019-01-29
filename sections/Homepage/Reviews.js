import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
// Custom components
import { Wrapper } from '../../components/Wrappers'
import { CallToActionButton } from '../../components/Buttons'
// Colors
import amber from '@material-ui/core/colors/amber'
// Icons
import QuoteIcon from '@material-ui/icons/FormatQuote'
import StarIcon from '@material-ui/icons/StarRate'
import ExpandIcon from '@material-ui/icons/KeyboardArrowDown'

// ReviewCard styles
const reviewCardStyles = makeStyles(theme => ({
    topCard: {
        paddingTop: 4 * theme.spacing.unit,
        paddingBottom: 6 * theme.spacing.unit,
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 4 * theme.spacing.unit
    },
    gridContainer: {
        width: '100%'
    },
    cardHeader: {
        alignItems: 'flex-start'
    },
    icon: {
        flex: '0 0 auto',
        paddingRight: 2 * theme.spacing.unit
    },
    quoteIcon: {
        transform: 'scaleX(-1) scaleY(-1)',
        color: theme.palette.grey[500]
    },
    comment: {
        flex: '1 1 auto',
        paddingTop: 2 * theme.spacing.unit
    },
    rating: {
        paddingTop: 2 * theme.spacing.unit
    },
    starIcon: {
        color: amber[500]
    },
    author: {
        paddingTop: 0,
        marginTop: -4 * theme.spacing.unit
    },
    avatar: {
        width: 8 * theme.spacing.unit,
        height: 8 * theme.spacing.unit,
        marginLeft: 'auto'
    },
}))

export function ReviewCard() {
    const classes = reviewCardStyles()
    return (
        <Grid item
            xs={12}
            sm={6}
            lg={4}
        >
            <Card>
                <CardContent
                    className={classes.topCard}
                >
                    <Grid container
                        alignItems='flex-start'
                        wrap='nowrap'
                    >
                        <Grid item
                            className={classes.icon}
                        >
                            <QuoteIcon
                                className={classes.quoteIcon}
                                fontSize='large'
                            />
                        </Grid>
                        <Grid item
                            className={classes.comment}
                        >
                            <Typography
                                variant='subtitle1'
                            >
                                <em>
                                    I used Gold Coast Maids for the first time this week and was impressed. I liked the online booking system. I did it in my lunch break at work and they came the next day! Will definitely use again.
                                </em>
                            </Typography>
                            <div className={classes.rating}>
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardContent className={classes.author}>
                    <Avatar
                        alt="CLIENT NAME"
                        src="/static/avatars/1.jpg"
                        className={classes.avatar}
                    />
                    <Typography variant='body1'>
                        Jake C
                    </Typography>
                    <Typography variant='body2'>
                        September 1, 2018
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

// Reviews styles
const reviewsStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: 4 * theme.spacing.unit,
    },
    buttonContainer: {
        marginTop: 4 * theme.spacing.unit,
    },
}))

export default function Reviews(props) {
    const classes = reviewsStyles()
    return (
        <section className={classes.root}>
            <Wrapper variant='section'>
                <Typography variant='h2'>
                    Actual Customer Reviews
                </Typography>
                <Hidden smDown>
                    <Typography
                        variant='h5'
                        component='p'
                        className={classes.subtitle}
                    >
                        And that's just a few
                    </Typography>
                </Hidden>
                <Grid container
                    spacing={32}
                    justify='center'
                >
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </Grid>
                <Grid container
                    spacing={32}
                    justify='center'
                    className={classes.buttonContainer}
                >
                    <Grid item
                        xs={10}
                        sm={3}
                    >
                        <Button
                            fullWidth
                            variant='outlined'
                            size='large'
                            color='primary'
                        >
                            Read More Reviews
                        </Button>
                    </Grid>
                    <Grid item
                        xs={10}
                        sm={3}
                    >
                        <CallToActionButton
                            fullWidth
                            size='large'
                        >
                            Get An Instant Quote
                        </CallToActionButton>
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
}