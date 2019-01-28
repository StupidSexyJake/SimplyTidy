import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
// MUI components
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import yellow from '@material-ui/core/colors/yellow'

function Logo(props) {
    // Set typography types
    const variant = {
        navbar: 'h6',
        sideMenu: 'h3'
    }
    return (
        <LogoLayout
            variant={variant[props.variant]}
            background={props.background}
            anchorStyles={props.anchorStyles}
            typographyStyles={props.typographyStyles}
            logoStart='GOLDCOAST'
            logoEnd='MAIDS'
        />
    )
}

const logoStyles = makeStyles((theme) => ({
    anchor: {
        textDecoration: 'none',
    },
    allStyles: {
        textAlign: 'left',
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 400
    },
    logoText: {
        color: theme.palette.primary.main,
    },
    logoText_End: {
        color: theme.palette.secondary.main
    },
    logoText__light: {
        color: theme.palette.primary.dark
    },
    logoText_End__light: {
        color: theme.palette.primary.contrastText,
        textShadow: theme.custom.palette.textShadow
    },

}))

function LogoLayout(props) {
    // Define styles
    const classes = logoStyles()
    // Switch style based on props.background
    let classLogoText
    let classLogoText_End
    switch (props.background) {
        case 'primary': {
            classLogoText = classes.logoText__light
            classLogoText_End = classes.logoText_End__light
            break
        }
        case 'primaryDark': {
            classLogoText = classes.logoText
            classLogoText_End = classes.logoText_End__light
            break
        }
        default: {
            classLogoText = classes.logoText
            classLogoText_End = classes.logoText_End
        }
    }
    return (
        <Link href='/'>
            <a className={classNames(classes.anchor, props.anchorStyles)}>
                <Typography
                    variant={props.variant}
                    component='span'
                    className={classNames(classes.allStyles, classLogoText, props.typographyStyles)}
                >
                    {props.logoStart}
                    <span className={classNames(classLogoText_End, props.typographyStyles)}>
                        {props.logoEnd}
                    </span>
                </Typography>
            </a>
        </Link>
    )
}

export default Logo