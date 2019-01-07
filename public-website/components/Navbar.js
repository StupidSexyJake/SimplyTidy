import React from 'react'
import Link from 'next/link'
import {NavbarLogo} from './Logo'
import {Type_Styles} from './Typography'
import {Colors} from './Colors'
import {Btn_Primary} from './Buttons'

class NavMenu extends React.Component {
    constructor() {
        super()
        this.state = [
            { 
                title: "How To Book",
                href: "/about",                 
                selected: false, 
            },{ 
                title: "What's Included",
                href: "/services",                
                selected: false,
                subs: [
                    { 
                        title: "Home Cleaning",
                        href: "/services/home-cleaning",                        
                        selected: false,
                    },{ 
                        title: "Spring Cleaning",
                        href: "/services/deep-cleaning",                         
                        selected: false,
                    },{ 
                        title: "Bond Cleaning",
                        href: "/services/bond-cleaning",
                        selected: false,
                    },{ 
                        title: "Special Requests",
                        href: "/services/custom-cleaning",
                        selected: false,
                    }
                ]
            },{ 
                title: "Reviews & Testimonials",
                href: "/reviews",
                selected: false,
            },{ 
                title: "FAQs",
                href: "/faq",
                selected: false,
            },{ 
                title: "Contact",
                href: "/contact",
                selected: false,
            }
        ]
    }
}


function getPrimaryLinks() {
    return [
        { 
            href: "/about", 
            title: "How To Book" 
        },
        { 
            href: "/services", 
            title: "What's Included", 
            subs: [
                { href: "/services/home-cleaning", title: "Home Cleaning" },
                { href: "/services/deep-cleaning", title: "Spring Cleaning" },
                { href: "/services/bond-cleaning", title: "Bond Cleaning" },
                { href: "/services/custom-cleaning", title: "Special Requests" }
            ]
        },
        { 
            href: "/reviews",
            title: "Reviews & Testimonials"
        },
        { 
            href: "/faq", 
            title: "FAQs" 
        },
        { 
            href: "/contact", 
            title: "Contact" 
        }
    ]
}

export default () => (
    <React.Fragment>
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
                    <Btn_Primary type="book" href="/book">
                        Book Online
                    </Btn_Primary>
            </div>                     
            <style jsx>{Type_Styles}</style>   
            <style jsx>{`               
                nav {
                    height: 4rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    background: rgba(250,250,250,0.95);
                    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
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
                    height: 3rem;  
                    padding: 0 1rem 0 2rem;      
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
                    padding: 0 1.25rem;
                    text-align: center;
                }
                li:hover, div a:hover {
                    margin-top: -1px;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }
                div {
                    margin-left: auto;
                    padding: 0 2rem 0 1rem;
                }
                div a {
                    margin: 0 2.5rem 0 1.25rem;
                }
            `}</style>            
        </nav>
    </React.Fragment>
)