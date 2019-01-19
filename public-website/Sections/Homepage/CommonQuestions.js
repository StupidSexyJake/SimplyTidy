import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// Custom components
import Container from '../../components/Containers/Sections'
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import QuestionIcon from '@material-ui/icons/ContactSupport'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.light
    },
    subtitle: {
        paddingBottom: '3rem'
    },
    gridContainer: {
        margin: '0 auto'
    },
    leftGridItem: {
        textAlign: 'center'
    },
    questionIcon: {
        fontSize: '4rem',
        color: theme.palette.primary.main,
        marginBottom: '0.5rem'
    },
    questionsSubtitle: {
        marginBottom: '0.5rem'
    },
    button: {
        margin: '0.5rem 0.5rem 0 0.5rem'
    },
    moreQuestions: {
        textAlign: 'center', 
        width: 'fit-content', 
        margin: '3rem auto 0 auto'
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
            <Container className={classes.container}>
                <Typography variant='h3' component='h2'>
                    Common Questions
                        </Typography>
                <Typography variant='h6' component='p' className={classes.subtitle}>
                    Lorem ipsum dolor sit amet sed do eiusmod tempor.
                        </Typography>
                <div className={classes.questionList}>
                    {questionsArray().map((props, index) => (
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>
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
                    <Typography variant='h5' component='p'>
                        Still Have Questions?
                        </Typography>
                    <Button variant='outlined' className={classes.button}>
                        View our FAQ
                        </Button>
                    <Button variant='outlined' color='primary' className={classes.button}>
                        Contact Us
                        </Button>
                </div>
            </Container>
        </section>
    )
})