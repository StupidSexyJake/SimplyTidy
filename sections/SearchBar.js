import React from 'react'
import classNames from 'classnames'
// Material components
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
// Icons
import SearchIcon from '@material-ui/icons/Search'

const searchBarStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 550,
        margin: '0 auto'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    icon: {
        margin: 10,
        color: theme.palette.primary.dark
    },
}))

export default function SearchBar(props) {
    // Define styles
    const classes = searchBarStyles()
    return (
        <Paper elevation={1} className={classNames(classes.root, props.rootClass)}>
            <SearchIcon className={classes.icon} />
            <InputBase className={classes.input} placeholder="Search Frequently Asked Questions" />
        </Paper>
    )
}