import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'
// Material components
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
import BookIcon from '@material-ui/icons/Launch'
import CallIcon from '@material-ui/icons/Call'
// Custom components
import CTA from '../components/CTA/Fab'

function getLinks() {
    return [
        { href: "/how", title: "How To Book" },
        { href: "/services", title: "What's Included" },
        { href: "/offers", title: "Hot Deals" },
        { href: "/reviews", title: "Reviews" },
        { href: "/faq", title: "FAQs" },
        { href: "/contact", title: "Contact" },
    ]
}

export default React.memo(function NavReturn() {
    // Create styles
    const useStyles = makeStyles(theme => ({
        root: {
            background: theme.custom.transparentColors.white,
            boxShadow: 'none'
        },
        logo: {
            height: 5.5 * theme.spacing.unit, // Change once image resized
            marginLeft: 3 * theme.spacing.unit,
            marginRight: 3 * theme.spacing.unit,
            verticalAlign: 'middle'
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
            marginRight: 2 * theme.spacing.unit,
        },
        buttonIcon: {
            marginRight: theme.spacing.unit,
        }
    }))
    // Define styles
    const classes = useStyles()
    return (
        <AppBar 
            className={classes.root} 
            position='fixed'>
            <Toolbar>
                <Hidden 
                    implementation='css' 
                    lgUp>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Link href="/">
                    <a>
                        <img 
                            src='./static/logos/logo-primary.png' 
                            className={classes.logo} />
                    </a>
                </Link>     
                <div className={classes.navGroup}>
                    <Hidden 
                        implementation='css' 
                        mdDown>
                        {getLinks().map((link, index) => (
                            <Link 
                                href={link.href} 
                                key={index}>
                                <Button 
                                    className={classes.navItem} 
                                    component='a'>
                                    {link.title}
                                </Button>
                            </Link>
                        ))}
                    </Hidden>
                </div>
                <div>
                    <Button 
                        className={classes.phoneButton} 
                        color='primary' 
                        component='a' 
                        href='tel:+61756465290'>
                        <CallIcon 
                            className={classes.buttonIcon} 
                            fontSize='small' /> 
                        07 5646 5290
                    </Button>
                    <CTA>
                        <BookIcon 
                            className={classes.buttonIcon} 
                            fontSize='small' /> 
                        Book online now
                    </CTA>
                </div>
            </Toolbar>
        </AppBar>
    )
})