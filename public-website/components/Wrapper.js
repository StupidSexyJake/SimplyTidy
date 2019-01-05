import { Fragment } from 'react'

export default (props) => (
    <Fragment>
        <div>
            { props.children }
        </div>
        <style jsx>{`
            div {
                width: 100%;
                max-width: 960px;
                margin: 0 auto;
            }
        `}</style>
    </Fragment>
)