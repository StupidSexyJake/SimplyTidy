import { Fragment } from 'react'
import Link from 'next/link'
import {NavbarLogo} from './Logo'
import {Type_Small, Type_Button} from './Typography'
import {Colors} from './Colors'
import {Btn_Primary} from './Buttons'


function getPrimaryLinks() {
    return [
        { href: "/about", title: "How To Book" },
        { href: "/services", title: "What's Included" },
        { href: "/reviews", title: "Reviews & Testimonials" },
        { href: "/faq", title: "FAQs" },
        { href: "/contact", title: "Contact" },
        { href: "/careers", title: "Careers" },
    ]
}

export default () => (
    <Fragment>
        <nav>        
            <Link href="/">
                <a id="logo-navbar"><NavbarLogo /></a>
            </Link>
            <ul>
                { getPrimaryLinks().map((link) => (
                    <li key={link.title}>
                        <Link href={ link.href }>
                            <a className="type-small">{ link.title }</a>
                        </Link>        
                    </li>
                ))}
            </ul>
            <div>
                <Link href="/contact">
                    <a className="type-button">(07) 5646 5290</a>
                </Link>        
                <Link href="/book">
                    <Btn_Primary type="book">
                        Book Now
                    </Btn_Primary>
                </Link>
            </div>
            <style jsx>{`               
                nav {
                    height: 64px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    background: rgba(250,250,250,0.95);
                }                              
                a {         
                    text-align: center;
                    text-decoration: none;
                    text-transform: uppercase;
                }
                a:hover {
                    color: ${ Colors.Primary };
                }
                #logo-navbar {
                    height: 48px;  
                    padding: 0 16px 0 32px;      
                }
                ul, div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                ul {
                    margin: 0;
                    padding: 0;
                }
                li {
                    list-style: none;
                    padding: 0 20px;
                }
                li:hover, div a:hover {
                    margin-top: -1px;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }
                div {
                    margin-left: auto;
                    padding: 0 32px 0 16px;
                }
                div a {
                    margin: 0 40px 0 20px;
                }
            `}</style>
            <style jsx>{Type_Button}</style>
            <style jsx>{Type_Small}</style>
        </nav>
    </Fragment>
)