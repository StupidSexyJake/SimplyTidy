import { Fragment } from 'react'

export const NavbarLogo = () => (
    <Fragment>
        <div>
            Simply<span className="logoEnd">Tidy</span>
        </div>        
        <style jsx>{`
            div {
                height: 100%;
                display: flex;
                align-items: center;
                text-decoration: none;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.125rem;
                font-size: 24px;
                color: #00bcd4;
            }
            div:hover {
                color: #0097A7;
            }
            .logoEnd {
                color: #212121;
            }
        `}</style>
    </Fragment>
)