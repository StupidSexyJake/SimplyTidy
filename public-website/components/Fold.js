import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Wrapper from './Wrapper'

export default (props) => (
    <Fragment>
        <section>
            <Navbar />
            <Wrapper>
                {props.children}
            </Wrapper>
        </section>
        <style jsx>{`
            section {
                height: ${ props.height };
                background: url("/static/backgrounds/${ props.hero }") no-repeat 0 center/cover;
            }
        `}</style>
    </Fragment>
)