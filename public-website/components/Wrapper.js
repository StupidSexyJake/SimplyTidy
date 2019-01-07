import { Fragment } from 'react'

export default (props) => (
    <Fragment>
        <div>
            { props.children }
        </div>
        <style jsx>{`
            div {
                height: calc(100% - 64px);
                width: 100%;
                margin: 0 auto;
            }
        `}</style>
    </Fragment>
)