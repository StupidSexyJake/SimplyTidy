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
import EventIcon from '@material-ui/icons/Event'
import CallIcon from '@material-ui/icons/Call'
// Custom components
import Logo from './Logo'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgba(255,255,255,0.6)',
        padding: '0 1rem'
    },
    logo: {
        height: '2.75rem',
    },
    primaryLinkGroup: {
        marginLeft: '1rem',
        flexGrow: 1
    },
    primaryLinkItem: {
        height: '2.25rem',
        minHeight: 0,
        padding: '0 1rem',
        color: theme.palette.grey[800],
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    menuButton: {
        marginLeft: '-.75rem'
    },
    phone: {
        padding: '0 1rem 0 .75rem',
        marginRight: '1rem'
    },
    icon: {
        marginRight: theme.spacing.unit,
        fontSize: '1.125rem'
    }
}))

export default function Navbar() {
    const classes = useStyles()
    function getPrimaryLinks() {
        return [
            { value: 1, href: "/about", title: "How To Book" },
            { value: 2, href: "/services", title: "What's Included" },
            { value: 3, href: "/reviews", title: "Reviews & Testimonials" },
            { value: 4, href: "/faq", title: "FAQs" },
            { value: 5, href: "/contact", title: "Contact" },
            { value: 6, href: "/careers", title: "Careers" },
        ]
    }
    return (
        <AppBar className={classes.root} position='static' color='default'>
            <Toolbar>
                <Hidden implementation='css' lgUp>
                    <IconButton className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>   
                <div className={classes.logo}>
                    <Logo type='navbar' />   
                </div>                             
                <div className={classes.primaryLinkGroup}>
                    <Hidden implementation='css' lgDown>
                        { getPrimaryLinks().map((link) => (
                            <Link href={link.href} key={link.value}>
                                <Button className={classes.primaryLinkItem}  component='a'>
                                    {link.title}
                                </Button>
                            </Link>                            
                        ))}
                    </Hidden>
                </div>
                <div>                     
                    <Button className={classes.phone} color='primary' component='a' href='tel:+56465290'>
                        <CallIcon className={classes.icon} /> (07) 5646 5290
                    </Button>  
                    <Button className={classes.book} variant='contained' color='primary'>
                        <EventIcon className={classes.icon} fontSize='small' /> Book online now
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}