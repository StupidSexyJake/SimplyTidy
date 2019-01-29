import React, { useContext } from 'react'
// Next.js
import Link from 'next/link'
import { withRouter } from 'next/router'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Data
import {
    navPages,
    navActions
} from '../data/navigationData'
import businessData from '../data/businessData'
// Utils
import { VariantInput } from '../utils/functions'
// MUI components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
// Custom components
import Logo from '../components/Logo'

const useStyles = makeStyles((theme) => ({
    fullList: {
        width: 'calc(100vw - 56px)',
        maxWidth: '320px'
    },
    header: {
        display: 'block',
        position: 'relative',
        background: `${theme.palette.primary.main} url('/static/backgrounds/cleaning-pattern.jpg') no-repeat 0 center / cover`,
        '&::before': {
            display: 'block',
            paddingTop: '56.25%',
            content: '""'
        }
    },
    headerWrapper: {
        padding: 2 * theme.spacing.unit,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    subtitle: {
        color: theme.palette.primary.contrastText,
        textShadow: theme.custom.palette.textShadow,
        lineHeight: 1.25
    },
    bookNow: {
        color: theme.palette.secondary.main
    },
    activeLink: {
        color: theme.palette.primary.dark,
        background: theme.palette.primary.light,
        opacity: 1
    },
}))

// Create styles for active navigation link
const ActiveLink = ({ router, href, link }) => {
    // Get state contexts
    const { dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    const activeLinkClass = router.pathname === href ? classes.activeLink : undefined
    const buttonState = router.pathname === href ? true : false
    const handleClick = (e) => {
        router.push(href)
        dispatch(toggleDrawer('navigation', false))
    }
    return (
        <Link
            prefetch
            href={href}
        >
            <ListItem
                button
                disabled={buttonState}
                classes={{ disabled: classes.activeLink }}
                onClick={handleClick}
            >
                <ListItemIcon className={activeLinkClass}>
                    <VariantInput inputVariant={link.icon} className={activeLinkClass} />
                </ListItemIcon>
                <ListItemText
                    primaryTypographyProps={{ className: activeLinkClass }}
                    primary={link.label}
                />
            </ListItem>
        </Link>

    )
}
const NavLink = withRouter(ActiveLink)



export default function NavigationDrawerContent() {
    // Get state contexts
    const { dispatch } = useContext(Store)
    // Handle booking link click
    const handleClick_Booking = () => {
        dispatch(toggleDrawer('navigation', false))
        setTimeout(() => dispatch(toggleDrawer('bookingForm', true)), 450)
    }
    // Define styles
    const classes = useStyles()
    return (
        <div className={classes.fullList}>
            <div className={classes.header}>
                <Grid container
                    direction='column'
                    justify='space-between'
                    className={classes.headerWrapper}
                >
                    <Grid item>
                        <Logo
                            noResize
                            variant='sideMenu'
                            background='primary'
                            onClick={() => dispatch(toggleDrawer('navigation', false))}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='subtitle1'
                            className={classes.subtitle}
                        >
                            {businessData.location}'s Premier Home Cleaning Company
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <List>
                {navPages.map((link) => (
                    <NavLink
                        key={link.label}
                        href={link.href}
                        link={link}
                    />
                ))}
            </List>
            <Divider />
            <List>
                {navActions.map((link, index) => (
                    <ListItem
                        button
                        key={link.label}
                        onClick={index === 0 ? handleClick_Booking : null}
                    >
                        <ListItemIcon>
                            <VariantInput
                                inputVariant={link.icon}
                                className={index === 0 ? classes.bookNow : null}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={link.label}
                            primaryTypographyProps={index === 0 ? { className: classes.bookNow } : null}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
