import { Fragment } from 'react'

export default (props) => (
    <Fragment>
        <div>
            { props.children }
        </div>
        <style jsx>{`
            div {
                height: 6.5rem;
                width: fit-content;
                padding: 2rem;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(250,250,250,0.95);
                border-radius: 4px;
                box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            }
        `}</style>
    </Fragment>
)