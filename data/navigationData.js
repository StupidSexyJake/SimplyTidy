import React from 'react'
// Icons
import HowToBookIcon from '@material-ui/icons/FormatListNumbered'
import WhatsIncludedIcon from '@material-ui/icons/Assignment'
import HotDealsIcon from '@material-ui/icons/Whatshot'
import MeetTheTeamIcon from '@material-ui/icons/Face'
import ReviewsIcon from '@material-ui/icons/Grade'
import FAQIcon from '@material-ui/icons/Help'
import ContactIcon from '@material-ui/icons/PermPhoneMsg'
import LoginIcon from '@material-ui/icons/Person'
import BookIcon from '@material-ui/icons/ExitToApp'

export const navPages = [
    {
        key: 1,
        label: "How To Book",
        href: "/howtobook",
        id: 'howToBook',
        icon: HowToBookIcon
    },
    {
        key: 2,
        label: "What's Included",
        href: "/whatsincluded",
        id: 'whatsincluded',
        icon: WhatsIncludedIcon
    },
    {
        key: 3,
        label: "Meet The Team",
        href: "/meettheteam",
        id: 'meettheteam',
        icon: MeetTheTeamIcon
    },
    {
        key: 4,
        label: "Reviews",
        href: "/reviews",
        id: 'reviews',
        icon: ReviewsIcon
    },
    {
        key: 5,
        label: "FAQs",
        href: "/faq",
        id: 'faq',
        icon: FAQIcon
    },
    {
        key: 6,
        label: "Contact Us",
        href: "/contact",
        id: 'contact',
        icon: ContactIcon
    },
]

export const navActions = [
    {
        key: 1,
        href: "/",
        id: 'book',
        label: "BOOK ONLINE NOW",
        icon: BookIcon
    },
    {
        key: 2,
        href: "/",
        id: 'login',
        label: "Login",
        icon: LoginIcon
    },
]
