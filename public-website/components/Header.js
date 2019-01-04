import Head from 'next/head'
import Navbar from './Navbar'
import normalize from 'normalize.css'

export default ({title}) => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
            <meta charSet="utf-8" />
            <title>{ title } | Gold Coast Maids</title>
        </Head>
        <Navbar />
        <style jsx global>{`
        html {
            box-sizing: border-box;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }        
        ${ normalize }
        `}</style>
    </>
)