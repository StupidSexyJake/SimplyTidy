import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// Custom components
import { Wrapper } from '../../components/Wrappers'
// Icons
import ConvenientIcon from '@material-ui/icons/Devices'
import QualityIcon from '@material-ui/icons/FavoriteBorder'
import CustomerServiceIcon from '@material-ui/icons/SentimentSatisfiedAlt'

// Create styles
const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: 8 * theme.spacing.unit
    },
    items: {
        textAlign: 'center',
    },
    label: {
        color: theme.palette.primary.dark,
        marginBottom: 2 * theme.spacing.unit
    },
    icon: {
        fontSize: '5rem',
        color: theme.palette.primary.main,
        marginBottom: 1 * theme.spacing.unit
    },
    CTAWrapper: {
        width: '100%',
        margin: '0 auto',
        marginTop: 10 * theme.spacing.unit,
        maxWidth: 60 * theme.spacing.unit
    }
}))

export default React.memo(function Benefits() {
    // Define styles
    const classes = useStyles()
    return (
        <section>
            <Wrapper variant='section'>
                <Typography variant='h2'>
                    Reasons to Love Us
                </Typography>
                <Hidden smDown>
                    <Typography
                        variant='h5'
                        component='p'
                        className={classes.subtitle}
                    >
                        Lorem ipsum dolor sit amet sed do eiusmod tempor.
                    </Typography>
                </Hidden>
                <Grid container
                    justify='center'
                    spacing={32}
                >
                    <Grid item
                        xs={12}
                        sm={10}
                        md={3}
                        className={classes.items}
                    >
                        <ConvenientIcon className={classes.icon} />
                        <Typography
                            variant='h5'
                            component='p'
                            className={classes.label}
                        >
                            Convenience
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={10}
                        md={3}
                        className={classes.items}
                    >
                        <QualityIcon className={classes.icon} />
                        <Typography
                            variant='h5'
                            component='p'
                            className={classes.label}
                        >
                            Quality
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={10}
                        md={3}
                        className={classes.items}
                    >
                        <CustomerServiceIcon className={classes.icon} />
                        <Typography
                            variant='h5'
                            component='p'
                            className={classes.label}
                        >
                            Service
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
})