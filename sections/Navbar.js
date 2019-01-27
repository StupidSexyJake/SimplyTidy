import React, { useContext } from 'react'
import Link from 'next/link'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Data
import { navPages } from '../data/navigationData'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
import BookIcon from '@material-ui/icons/Launch'
import PhoneIcon from '@material-ui/icons/Call'
import ChatIcon from '@material-ui/icons/Chat'
// Custom components
import { CallToActionButton } from '../components/Buttons'


// Create styles
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#ffffff',
        boxShadow: 'none'
    },
    logo: {
        height: 5.5 * theme.spacing.unit, // Change image size
        marginLeft: 1 * theme.spacing.unit,
        marginRight: 3 * theme.spacing.unit,
        marginTop: 0.5 * theme.spacing.unit,
        verticalAlign: 'middle',
        [theme.breakpoints.down('xs')]: {
            height: 4.5 * theme.spacing.unit,
            marginRight: 0,
        },
    },
    toolbar: {
        padding: 0.5 * theme.spacing.unit
    },
    navGroup: {
        flexGrow: 1
    },
    navItem: {
        paddingLeft: 2 * theme.spacing.unit,
        paddingRight: 2 * theme.spacing.unit,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    phoneButton: {
        [theme.breakpoints.up('sm')]: {
            marginRight: 28.0175 * theme.spacing.unit,
        }
    },
    phoneIcon: {
        marginRight: 1.5 * theme.spacing.unit
    },
    scrolledToTop: {
    },
    stickyCTA: {
        position: 'fixed',
        zIndex: 2,
        right: 4 * theme.spacing.unit,
        top: 1.25 * theme.spacing.unit,
        borderRadius: `${theme.shape.borderRadius}px !important`
    },
    mobileButton: {
        color: theme.palette.primary.main
    }
}))

export default function NavReturn() {
    // Get state contexts
    const { state, dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <AppBar
            className={classes.root}
            position='static'
        >
            <Toolbar className={classes.toolbar}>
                <Hidden
                    implementation='css'
                    lgUp
                >
                    <IconButton
                        onClick={() => dispatch(toggleDrawer('navigation', true))}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Link prefetch href="/">
                    <a>
                        <img
                            src='./static/logos/logo-primary.png'
                            className={classes.logo} />
                    </a>
                </Link>
                <div className={classes.navGroup}>
                    <Hidden
                        implementation='css'
                        mdDown
                    >
                        {navPages.map((link) => (
                            <Link
                                prefetch
                                href={link.href}
                                key={link.label}
                            >
                                <Button
                                    className={classes.navItem}
                                    component='a'
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </Hidden>
                </div>
                <div>
                    <Hidden
                        xsDown
                        implementation='css'
                    >
                        <Button
                            className={classes.phoneButton}
                            color='primary'
                            component='a'
                            href='tel:+61756465290'
                            size='large'
                        >
                            <PhoneIcon
                                className={classes.phoneIcon}
                                fontSize='small'
                            />
                            07 5646 5290
                        </Button>
                    </Hidden>
                    <Hidden
                        smUp
                        implementation='css'
                    >
                        <IconButton
                            className={classes.mobileButton}
                        >
                            <PhoneIcon />
                        </IconButton>
                        <IconButton
                            className={classes.mobileButton}
                        >
                            <ChatIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden
                        xsDown
                        implementation='css'
                    >
                        <CallToActionButton
                            type='fab'
                            className={classes.stickyCTA}
                        >
                            <BookIcon
                                fontSize='small'
                            />
                            Book online now
                        </CallToActionButton>
                    </Hidden>
                </div>
            </Toolbar>
        </AppBar>
    )
}