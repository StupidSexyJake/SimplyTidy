import React from 'react'

import Link from 'next/link'
import css from 'styled-jsx/css'
import {Colors} from './Colors'
import {fontSizes, Type_Styles} from './Typography'
import Icon from './Icons'


const btnStyling = css`
    .btn {
        min-width: fit-content;
        display: inline-flex;
        align-items: center;           
        box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
    }
    .btn:hover {
        margin-top: -1px;
        box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
    }
    .btn:active {
        transition: all 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);
        margin-top: 0;
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }
`
export class Btn_Primary extends React.Component {
    sayHi(e) {
        console.log("Helloooo!")
    }
    render () {
        return (
            <React.Fragment>
                <Link href={ this.props.href }>
                    <button className="btn primary type-button" onClick={this.sayHi}>
                        <Icon type={ this.props.type } height="18" width="18" fill={Colors.PrimaryText} />
                        <span>
                            { this.props.children }
                        </span>
                    </button>
                </Link>
                <style jsx>{ btnStyling }</style>
                <style jsx>{ Type_Styles }</style>
                <style jsx>{`            
                    .btn.primary {
                        height: 2.25rem;
                        padding: 0 1rem 0 0.75rem;                
                        border-radius: 0.25rem;                
                        background: linear-gradient(${ Colors.Primary }, hsl(201, 100%, 42%));
                        color: ${ Colors.PrimaryText };
                        text-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,0.2);
                    }
                    .btn.primary:hover {                
                        background: ${ Colors.Primary };                        
                        color: ${ Colors.PureWhite };             
                    }       
                    span {
                        padding-left: 0.5rem;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

// export const Btn_Primary__Large = (props) => (
//     <React.Fragment>
//         <button className="btn primary type-button">
//             <span>
//                 { props.children }
//             </span>
//         </button>
//         <style jsx>{ btnStyling }</style>
//         <style jsx>{ Type_Styles }</style>
//         <style jsx>{`            
//             .btn.primary {
//                 height: 2.75rem;
//                 padding: 0 1.5rem;                
//                 border-radius: 0.25rem;                
//                 background: linear-gradient(${ Colors.Primary }, hsl(201, 100%, 42%));
//                 color: ${ Colors.PrimaryText };
//                 text-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,0.2);     
//                 font-size: ${fontSizes.body}rem;
//             }
//             .btn.primary:hover {                
//                 background: ${ Colors.Primary };
//                 color: ${ Colors.PureWhite };
//             }       
//         `}</style>
//     </React.Fragment>
// )