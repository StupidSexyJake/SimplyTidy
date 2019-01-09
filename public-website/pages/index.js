/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
// --- Post bootstrap -----
import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
// Custom components
import Header from '../components/Header'
// Sections
import Fold from '../Sections/Fold'
import Reviews from '../Sections/Reviews'

const useStyles = makeStyles(theme => ({
    fold: {
        padding: '4rem 0 6rem 0'
    },
    fold_title: {
        maxWidth: '62.5rem',
        margin: '0 auto',
        padding: '0 0 6rem 0',
        textAlign: 'center'
    },
    fold_card: {
        width: 'fit-content',
        borderRadius: '4px',
        margin: '0 auto',
    },
    fold_cardContent: {
        display: 'inline-flex',
        padding: '1.5rem'
    },
    fold_cardContent_text: {
        color: theme.palette.primary.main,
        paddingRight: '1rem'       
    }
}))

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title="House Cleaning Services" />
            <Fold size='fit' hero='homepage-hero-woman-relaxing.jpg'>
                <div className={classes.fold}>
                    <Typography variant='h1' className={classes.fold_title}>
                        That Clean Home Feeling!
                    </Typography>
                    <Card className={classes.fold_card}>
                        <CardContent className={classes.fold_cardContent}>
                            <Typography variant='h4' component='span' className={classes.fold_cardContent_text}>
                                You click. We clean. It's that simple.
                            </Typography>
                            <Button color='primary' variant='contained' size='large'>
                                Get an instant quote
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </Fold>
            <Reviews />
        </div>
    )
}