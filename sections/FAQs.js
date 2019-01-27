import React from 'react'
// Components
import { Wrapper } from '../components/Wrappers'
// Material components
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const categoryStyles = makeStyles((theme) => ({
    categoryContainer: {
        marginBottom: 6 * theme.spacing.unit
    }
}))
function Category(props) {
    // Define styles
    const classes = categoryStyles()
    // Define props
    const { category } = props
    return (
        <div className={classes.categoryContainer} key={category.key}>
            <Typography
                variant='h6'
                component='h2'
                align='left'
            >
                {category.label}
            </Typography>
            {category.faqs.map((faq, index) => (
                <ExpansionPanel key={index}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {faq.question}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography color='textSecondary'>
                            {faq.answer}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    )
}

const faqsStyles = makeStyles((theme) => ({
    gridItem: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit
    },
}))
export default function FAQs(props) {
    // Define styles
    const classes = faqsStyles()
    return (
        <section className={classes.root}>
            <Wrapper variant='section'>
                <Grid container>
                    <Grid item xs={12} lg={6} className={classes.gridItem}>
                        {props.categoriesArray_First.map((category) => (
                            <Category category={category} />
                        ))}
                    </Grid>
                    <Grid item xs={12} lg={6} className={classes.gridItem}>
                        {props.categoriesArray_Second.map((category) => (
                            <Category category={category} />
                        ))}
                    </Grid>
                </Grid>
            </Wrapper>
        </section>
    )
}