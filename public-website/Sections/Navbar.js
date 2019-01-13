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
import Logo from '../components/Logo'
import { CTA } from '../components/Button'

function getLinks() {
    return [
        { value: 1, href: "/how", title: "How To Book" },
        { value: 2, href: "/services", title: "What's Included" },
        { value: 5, href: "/offers", title: "Hot Deals" },
        { value: 3, href: "/reviews", title: "Reviews" },
        { value: 4, href: "/faq", title: "FAQs" },
        { value: 6, href: "/contact", title: "Contact" },
    ]
}

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgba(255,255,255,0.95)',
        boxShadow: 'none'
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
        marginLeft: '-.75rem',
        marginRight: '1rem'
    },
    phone: {
        marginRight: '1rem'
    },
    icon: {
        marginRight: theme.spacing.unit,
        fontSize: '1.125rem'
    }
}))

export default function NavReturn() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar className={classes.root} position='fixed' color='default'>
                <Toolbar>
                    <Hidden implementation='css' lgUp>
                        <IconButton className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <div className={classes.logo}>
                        <Logo height='2.75rem' />
                    </div>
                    <div className={classes.primaryLinkGroup}>
                        <Hidden implementation='css' mdDown>
                            {getLinks().map((link) => (
                                <Link href={link.href} key={link.value}>
                                    <Button className={classes.primaryLinkItem} component='a'>
                                        {link.title}
                                    </Button>
                                </Link>
                            ))}
                        </Hidden>
                    </div>
                    <div>
                        <Button className={classes.phone} color='primary' component='a' href='tel:+56465290' size='large'>
                            <CallIcon className={classes.icon} /> (07) 5646 5290
                        </Button>
                        <CTA className={classes.book}>
                            <EventIcon className={classes.icon} /> Book online now
                        </CTA>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event) {
    }
    render() {
        return <NavReturn />
    }
}