import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// Custom components
import { Wrapper } from '../../components/Wrappers'
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import QuestionIcon from '@material-ui/icons/ContactSupport'

const useStyles = makeStyles(theme => ({
    root: {
        background: `${theme.palette.primary.light} url('/static/backgrounds/cleaning-pattern-light.jpg') no-repeat 0 center / cover`,
    },
    subtitle: {
        paddingBottom: 8 * theme.spacing.unit
    },
    questionIcon: {
        fontSize: '4rem',
        color: theme.palette.primary.main,
        marginBottom: 1 * theme.spacing.unit
    },
    questionsSubtitle: {
        marginBottom: 1 * theme.spacing.unit
    },
    button: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        background: theme.palette.primary.light
    },
    moreQuestions: {
        textAlign: 'center',
        width: 'fit-content',
        margin: `${6 * theme.spacing.unit}px auto 0 auto`
    }
}))

function questionsArray() {
    return [
        {
            question: "Do you provide all supplies and equipment?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "What if I won't be home?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "Can I make a special request?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "How do I pay?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "Can I trust my cleaning professional?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "Can I trust my cleaning professional?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "Can I trust my cleaning professional?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            question: "Can I trust my cleaning professional?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
    ]
}

export default React.memo(function CommonQuestions() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Wrapper variant='section'>
                <Typography variant='h2'>
                    Common Questions
                </Typography>
                <Typography
                    variant='h5'
                    component='p'
                    className={classes.subtitle}
                >
                    Lorem ipsum dolor sit amet sed do eiusmod tempor.
                </Typography>
                <div>
                    {questionsArray().map((props, index) => (
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    {props.question}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography color='textSecondary'>
                                    {props.answer}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}
                </div>
                <div className={classes.moreQuestions}>
                    <QuestionIcon className={classes.questionIcon} />
                    <Typography
                        variant='h5'
                        component='p'
                    >
                        Still Have Questions?
                    </Typography>
                    <Button
                        variant='outlined'
                        className={classes.button}
                    >
                        View our FAQ
                    </Button>
                    <Button
                        variant='outlined'
                        color='primary'
                        className={classes.button}
                    >
                        Contact Us
                        </Button>
                </div>
            </Wrapper>
        </section>
    )
})