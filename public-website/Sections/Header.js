import React from 'react'
import Head from 'next/head'

export default React.memo(function(props) {
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
                <meta charSet="utf-8" />
                <title>{ props.title } | Gold Coast Maids</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500" rel="stylesheet"></link>
            </Head>
        </React.Fragment>
    )
})