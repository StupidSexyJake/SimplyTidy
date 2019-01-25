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
        label: "How To Book",
        href: "/howtobook",
        id: 'howToBook',
        icon: HowToBookIcon
    },
    {
        label: "What's Included",
        href: "/whatsincluded",
        id: 'whatsincluded',
        icon: WhatsIncludedIcon
    },
    {
        label: "Meet The Team",
        href: "/meettheteam",
        id: 'meettheteam',
        icon: MeetTheTeamIcon
    },
    // {
    //     label: "Hot Deals",
    //     href: "/offers",
    //     icon: HotDealsIcon
    // },
    {
        label: "Reviews",
        href: "/reviews",
        id: 'reviews',
        icon: ReviewsIcon
    },
    {
        label: "FAQs",
        href: "/faq",
        id: 'faq',
        icon: FAQIcon
    },
    {
        label: "Contact Us",
        href: "/contact",
        id: 'contact',
        icon: ContactIcon
    },
]

export const navActions = [
    {
        label: "BOOK ONLINE NOW",
        icon: BookIcon
    },
    {
        label: "Login",
        icon: LoginIcon
    },
]
