import React from 'react'
import Link from 'next/link'
// Data
import { operatingHoursData } from '../data/businessData'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Anchor from '@material-ui/core/Link'
// Custom components
import { Wrapper } from '../components/Wrappers'
// Icons
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationOn'
import blueGrey from '@material-ui/core/colors/blueGrey'

const useStyles = makeStyles(theme => ({
    root: {
        background: blueGrey[700],
        color: theme.palette.primary.light,
    },
    container: {
        paddingTop: 4 * theme.spacing.unit,
        paddingBottom: 4 * theme.spacing.unit,
    },
    logo: {
    },
    tableTitle: {
        color: theme.palette.primary.main,
        paddingBottom: theme.spacing.unit,
        maxWidth: '240px',
        marginLeft: 'auto',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
            maxWidth: 'none'
        },
    },
    table: {
        maxWidth: '240px',
        marginLeft: 'auto',
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto'
        },
    },
    tableRow: {
        height: 3 * theme.spacing.unit
    },
    tabelHead: {
        border: 'none',
        color: 'inherit',
        paddingRight: 4 * theme.spacing.unit,
    },
    tableCell: {
        border: 'none',
        color: 'inherit',
        whiteSpace: 'nowrap',
    },
    tableCellTypography: {
        color: 'inherit',
    },
    anchor: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            textAlign: 'center',
            marginTop: theme.spacing.unit
        },
    },
    anchorIcon: {
        marginRight: theme.spacing.unit,
        fontSize: '1rem',
        color: 'inherit',
    },
    anchorText: {
        color: 'inherit',
    },
    stayConnectedTitle: {
        color: 'inherit',
    },
    gridCenterMobile: {
    },
    centerMobile: {
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto'
        },
    }
}))

function NavItem(props) {
    const classes = useStyles()
    return (
        <Link href={props.href}>
            <Button
                className={classes.navItem}
                component='a'
            >
                {props.label}
            </Button>
        </Link>
    )
}

function NavItemBottom(props) {
    const classes = useStyles()
    return (
        <Link href={props.href}>
            <Button
                className={classes.navItemBottom}
                component='a'
            >
                {props.label}
            </Button>
        </Link>
    )
}

export default React.memo(function Footer() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Wrapper
                variant='content'
                className={classes.container}
            >
                <Grid container
                    spacing={16}
                >
                    <Grid item
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Grid container
                            direction='column'
                            className={classes.gridCenterMobile}
                        >
                            <Grid item
                                className={classes.centerMobile}
                            >
                                <Link prefetch href="/">
                                    <a>
                                        <img
                                            src='./static/logos/logo-primary.png'
                                            className={classes.logo} />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item
                                className={classes.centerMobile}
                            >
                                <Anchor
                                    className={classes.anchor}
                                    component='a'
                                    href='tel:+61756465290'
                                >
                                    <Hidden xsDown>
                                        <PhoneIcon
                                            className={classes.anchorIcon}
                                            fontSize='small'
                                        />
                                    </Hidden>
                                    <Typography
                                        component='span'
                                        className={classes.anchorText}
                                    >

                                        07 5646 5290
                                    </Typography>
                                </Anchor>
                                <Anchor
                                    className={classes.anchor}
                                    component='a'
                                    href='mailto:support@goldcoastmaids.com.au'
                                >
                                    <Hidden xsDown>
                                        <EmailIcon
                                            className={classes.anchorIcon}
                                            fontSize='small'
                                        />
                                    </Hidden>
                                    <Typography
                                        component='span'
                                        className={classes.anchorText}
                                    >
                                        support@goldcoastmaids.com.au
                                    </Typography>
                                </Anchor>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item
                            md={4}
                        >
                            <Typography
                                variant='h5'
                                component='p'
                                className={classes.stayConnectedTitle}
                            >
                                STAY CONNECTED
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.opratingHours}
                    >
                        <Typography
                            variant='h6'
                            component='p'
                            align='center'
                            className={classes.tableTitle}
                        >
                            Operating Hours
                            </Typography>
                        <Table
                            className={classes.table}
                            padding='none'
                        >
                            <TableBody>
                                {operatingHoursData.map(day => (
                                    <TableRow key={day.day} className={classes.tableRow}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className={classes.tabelHead}
                                        >
                                            <Typography
                                                variant='caption'
                                                className={classes.tableCellTypography}
                                            >
                                                {day.day}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className={classes.tableCell}
                                        >

                                            <Typography
                                                variant='caption'
                                                className={classes.tableCellTypography}
                                            >
                                                {day.hours}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Wrapper>
        </section >
    )
})