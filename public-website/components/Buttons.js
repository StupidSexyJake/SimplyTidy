import {Fragment} from 'react'
import {Colors} from './Colors'
import {Type_Button} from './Typography'
import Icon from './Icons'

export const Btn_Primary = (props) => (
    <Fragment>
        <button className="type-button">
            <Icon type={ props.type } height="18" width="18" fill={Colors.PrimaryText} />
            <span>
                { props.children }
            </span>
        </button>
        <style jsx>{`            
            button {
                height: 36px;
                min-width: 64px;
                padding: 0 16px 0 12px;
                display: inline-flex;
                align-items: center;
                border-radius: 4px;
                background: linear-gradient(${ Colors.Primary }, hsl(201, 100%, 42%));
                color: ${ Colors.white };
                text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                text-decoration: none;
                border: 0;
                outline: none;  
                cursor: pointer;            
                box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
            }
            button:hover {
                margin-top: -1px;
                box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
            }
            button:active {
                transition: all 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);
                margin-top: 0;
                box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            }
            span {
                padding-left: 8px;
            }
        `}</style>
        <style jsx>{Type_Button}</style>
    </Fragment>
)