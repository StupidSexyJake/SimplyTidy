import React from 'react'
import Theme from '../components/Theme'
import Button from '@material-ui/core/Button'

import {Colors} from '../components/Colors'
import Header from '../components/Header'
import Fold from '../components/Fold'
import {Type_Styles} from '../components/Typography'
import Card from '../components/Cards'
import Footer from '../components/Footer'
// import {Btn_Primary__Large} from '../components/Buttons'

//<Btn_Primary__Large type="book" height="52px">Get a quote now</Btn_Primary__Large>



export default class extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Theme>
                    <Header title="House Cleaning Services" />
                    <Fold hero="homepage-hero-woman-relaxing.jpg" height="fit-content">   
                        <div id="fold">
                            <div id="foldHead">                    
                                <h1 id="foldHead-title">That Clean Home Feeling!</h1>                
                                <p className="type-h5">Gold Coast's Premier Home Cleaning Company</p>
                            </div>
                            <div id="foldCard">
                                <Card>
                                    <p id="fold-card-text" className="type-h4">You click. We clean. It's that simple.</p>
                                    <Button variant="contained" color="primary" size="large">Get a quote now</Button>
                                </Card>
                            </div>                
                        </div> 
                    </Fold>
                    <Footer />   
                </Theme>
                <style jsx>{ Type_Styles }</style>
                <style jsx>{`
                    #fold {
                        height: 100%;
                    }
                    #foldHead {
                        padding: 7.5rem 0 3rem 0;
                        text-align: center;
                    }
                    #foldHead-title { 
                        margin: 0 0 1rem 0;
                    }
                    #foldCard {
                        padding: 3rem 0 9rem 0;
                        display: flex;
                        align-items: center;
                    }
                    #fold-card-text {
                        margin: 0 2rem 0 0;
                        color: ${ Colors.Primary };
                    }
                `}</style>                
            </React.Fragment>   
        )           
    }    
}