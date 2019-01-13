import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'

const logoSize = (property, mapping) => props => mapping[props[property]]

const useStyles = makeStyles(theme => ({
    start: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 500,
        textTransform: 'uppercase',        
        color: theme.palette.primary.main,
        lineHeight: 0,
        fontSize: logoSize('type',{
            navbar: '1.5rem',
            sm: '1rem',
            lg: '2rem',
            xl: '5rem'
        })
    },
    end: {
        color: theme.palette.grey[900]
    },
    image: {
        height: props => props.height
    }
}))

export default function Logo(props) {
    const { type, height, ...other } = props;
    const classes = useStyles(props)
    return (
        <Link href="/">
            <a>
                <img src='./static/logos/logo-primary.png' className={classes.image} />
            </a>            
        </Link>        
    )
}