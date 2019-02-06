import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
// Custom components
import { Wrapper } from '../../components/Wrappers'
import Logo from '../../components/Logo'

// Create styles
const useStyles = makeStyles(theme => ({
    root: {
        background: `${theme.palette.primary.light} url('/static/backgrounds/cleaning-pattern-light.jpg') no-repeat 0 center / cover`,
    },
    gridWidthFix: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            margin: '0 !important'
        }
    },
    leftGrid: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 3,
        }
    },
    rightGrid: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 !important'
        }
    },
    divider: {
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit
    },
    heading: {
        textAlign: 'left',
        marginBottom: 2 * theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    content: {
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0,
            textAlign: 'justify'
        }
    },
}))

export default React.memo(function AboutUs() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Wrapper variant='section'>
                <Grid container
                    alignItems='center'
                    justify='center'
                    spacing={40}
                    className={classes.gridWidthFix}
                >
                    <Grid item
                        xs={12}
                        sm={10}
                        md={4}
                        className={classes.leftGrid}
                    >
                        <Logo
                            variant='section'
                            background='primaryLight'
                            align='center'
                        />
                        <Divider className={classes.divider} />
                        <Typography
                            variant='h6'
                            component='p'
                        >
                            <em>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            </em>
                        </Typography>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={10}
                        md={8}
                        className={classes.rightGrid}
                    >
                        <Typography
                            variant='h3'
                            component='h1'
                            className={classes.heading}
                        >
                            Gold Coast's Best Cleaners
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.content}
                            paragraph
                        >
                            You bought your home to live in it, not spend every hour cleaning it. You want to spend time with your family – you want to play games, watch movies, laugh, love, live. You shouldn’t have to live life from behind some cleaner and a rag. Let Gold Coast Maids take care of the work of cleaning your home so that you and your family can enjoy life.
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.content}
                            paragraph
                        >
                            Across the Gold Coast customers rave about our customer services and affordable prices. We work with each customer to fit their needs specifically so that you never have to worry about “getting out of the house for the cleaning people.” The entire Gold Coast can’t be wrong – Gold Coast Maids are the number one cleaning service around!
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.content}
                            paragraph
                        >
                            You bought your home to live in it, not spend every hour cleaning it. You want to spend time with your family – you want to play games, watch movies, laugh, love, live. You shouldn’t have to live life from behind some cleaner and a rag. Let Gold Coast Maids take care of the work of cleaning your home so that you and your family can enjoy life.
                        </Typography>
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
})