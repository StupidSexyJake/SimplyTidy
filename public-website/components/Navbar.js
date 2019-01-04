import Link from 'next/link'
import {NavbarLogo} from './Logo'

function getLinks() {
    return [
        { href: "/about", title: "How To Book" },
        { href: "/services", title: "What's Included" },
        { href: "/reviews", title: "Reviews & Testimonials" },
        { href: "/offers", title: "Special Offers" },
        { href: "/terms", title: "Terms & Conditions" },
        { href: "/contact", title: "Contact Us" }
    ]
}

const PostLinks = ({ link }) => (
    <li>
        <Link href={ link.href }>
            <a>{ link.title }</a>
        </Link>        
        <style jsx>{`
            li {
                list-style: none;
                padding: 0 16px;
            }
            li a {            
                text-align: center;
                text-decoration: none;
                color: blue;
            }
        `}</style>
    </li>
)

export default () => (
    <nav>
        <Link href="/">
            <a><NavbarLogo /></a>
        </Link>
        <ul>
            { getLinks().map((link) => (
                <PostLinks key={ link.title } link={ link }/>
            ))}
        </ul>
        <style jsx>{`
            nav {
                height: 64px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;
                border: 1px solid black;
            }
            a {
                height: 48px;            
            }
            ul {
                margin: 0;
                padding: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}</style>
    </nav>
)