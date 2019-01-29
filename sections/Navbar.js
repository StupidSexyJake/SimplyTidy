import React, { useContext } from 'react'
// Next.js
import Link from 'next/link'
import { withRouter } from 'next/router'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Data
import { navPages } from '../data/navigationData'
// MUI components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Call'
import ChatIcon from '@material-ui/icons/Chat'
// Custom components
import Logo from '../components/Logo'
import {
    CTAWithIcon,
    ButtonWithIcon
} from '../components/Buttons'
import {
    Contained,
    Wrapper
} from '../components/Wrappers'

// Create styles
const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingLeft: 0.5 * theme.spacing.unit,
        paddingRight: 0.5 * theme.spacing.unit
    },
    logo: {
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2.5 * theme.spacing.unit,
    },
    navGroup: {
        flexGrow: 1
    },
    ctaBtn: {
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit
    },
    activeLink: {
        color: `${theme.palette.primary.dark} !important`,
        marginTop: -0.25 * theme.spacing.unit
    },
    activeLinkBorder: {
        borderBottom: `1px solid ${theme.palette.primary.dark}`
    }
}))

// Create styles for active navigation link
const ActiveLink = ({ children, router, href }) => {
    // Define styles
    const classes = useStyles()
    const borderBottom = router.pathname === href ? classes.activeLinkBorder : undefined
    const buttonState = router.pathname === href ? true : false
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <Link
            prefetch
            href={href}
        >
            <Button
                disabled={buttonState}
                component='a'
                classes={{ disabled: classes.activeLink }}
                onClick={handleClick}
            >
                <span className={borderBottom}>
                    {children}
                </span>
            </Button>
        </Link>
    )
}
const NavLink = withRouter(ActiveLink)

export default function Navbar() {
    // Get state contexts
    const { dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <AppBar
            position='static'
            elevation={0}
            color='default'
        >
            <Contained>
                <Toolbar
                    disableGutters // Can't figure out how to change theme.mixins.gutters so manually setting here under className
                    className={classes.toolbar}
                >
                    <Hidden
                        implementation='css'
                        lgUp
                    >
                        <IconButton onClick={() => dispatch(toggleDrawer('navigation', true))}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Logo
                        variant='navbar'
                        anchorStyles={classes.logo}
                    />
                    <div className={classes.navGroup}>
                        <Hidden
                            implementation='css'
                            mdDown
                        >
                            {navPages.map((link) => (
                                <NavLink key={link.key} href={link.href}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </Hidden>
                    </div>
                    <div>
                        <Hidden
                            xsDown
                            implementation='css'
                        >
                            <ButtonWithIcon
                                icon={PhoneIcon}
                                buttonStyles={{
                                    color: 'primary',
                                    component: 'a',
                                    href: 'tel:+61756465290',
                                }}
                            >
                                07 5646 5290
                        </ButtonWithIcon>
                            <CTAWithIcon
                                type='fab'
                                className={classes.ctaBtn}
                            >
                                Book online now
                        </CTAWithIcon>
                        </Hidden>
                        <Hidden
                            smUp
                            implementation='css'
                        >
                            <IconButton>
                                <PhoneIcon />
                            </IconButton>
                            <IconButton>
                                <ChatIcon />
                            </IconButton>
                        </Hidden>
                    </div>
                </Toolbar>
            </Contained>
        </AppBar>
    )
}