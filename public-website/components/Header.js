import { Fragment } from 'react'
import Head from 'next/head'

export default ({title}) => (
    <Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
            <meta charSet="utf-8" />
            <title>{ title } | Gold Coast Maids</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet"></link>
        </Head>
    </Fragment>
)