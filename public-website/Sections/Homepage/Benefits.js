import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Custom components
import { Container } from '../../components/Containers'
// Icons
import ConvenientIcon from '@material-ui/icons/Devices'
import QualityIcon from '@material-ui/icons/FavoriteBorder'
import CustomerServiceIcon from '@material-ui/icons/SentimentSatisfiedAlt'

// Create styles
const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 12 * theme.spacing.unit
    },
    subtitle: {
        marginBottom: 8 * theme.spacing.unit
    },
    items: {
        textAlign: 'center'
    },
    icon: {
        fontSize: '5rem',
        color: theme.palette.primary.main,
        marginBottom: 2 * theme.spacing.unit
    },
    CTAContainer: {
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
            <Container variant='section' className={classes.container}>
                <Typography variant='h3' component='h2'>
                    Reasons to Love Gold Coast Maids
                </Typography>
                <Typography variant='h6' component='p' className={classes.subtitle} align='center'>
                    Lorem ipsum dolor sit amet sed do eiusmod tempor.
                </Typography>
                <Grid container justify='center' spacing={32}>
                    <Grid item xs={3} className={classes.items}>
                        <ConvenientIcon className={classes.icon} />
                        <Typography variant='h6' component='p'>
                            Convenience
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.items}>
                        <QualityIcon className={classes.icon} />
                        <Typography variant='h6' component='p'>
                            Quality
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.items}>
                        <CustomerServiceIcon className={classes.icon} />
                        <Typography variant='h6' component='p'>
                            Customer Service
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
})