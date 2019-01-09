import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'

const logoSize = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles(theme => ({
    start: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',        
        color: theme.palette.primary.main,
        lineHeight: 0,
        fontSize: logoSize('type',{
            sm: '1rem',
            navbar: '1.5rem',
            xl: '5rem'
        })
    },
    end: {
        color: theme.palette.grey[900]
    },
    image: {
        height: 44,
    }
}))

export default function Logo(props) {
    const { type, ...other } = props;
    const classes = useStyles(props)
    return (
        <Link href="/">
            <a>
                <img src='./static/logos/logo-primary.png' className={classes.image} />
            </a>            
        </Link>        
    )
}