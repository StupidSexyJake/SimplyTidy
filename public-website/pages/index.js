import { Fragment } from 'react'
import {Colors} from '../components/Colors'
import Header from '../components/Header'
import Fold from '../components/Fold'
import {Type_H1, Type_H4} from '../components/Typography'
import Card from '../components/Cards'
import {Btn_Primary} from '../components/Buttons'
import Footer from '../components/Footer'

export default (props) => (
    <Fragment>
        <Header title="House Cleaning Services" />
        <Fold hero="homepage-hero-woman-relaxing.jpg" height="100vh">
            <div className="hero-title">                
                <h1>That Clean Home Feeling!</h1>  
            </div>
            <div className="card-booking">          
                <Card>
                    <p className="h4 actionCard-text">You click. We clean. It's that simple.</p>
                    <Btn_Primary type="book">Get a quote now</Btn_Primary>
                </Card>
            </div>
        </Fold>
        { props.children }
        <Footer />
        <style jsx>{ Type_H1 }</style>
        <style jsx>{ Type_H4 }</style>
        <style jsx>{`
            .hero-title {
                padding: 80px 0 64px 0;
                text-align: center;
            }
            .actionCard-text {
                padding: 0 32px 0 0;
                color: ${ Colors.Primary };
            }
        `}</style>
    </Fragment>   
)