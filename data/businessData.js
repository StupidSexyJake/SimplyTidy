import React from 'react'

const businessData = {
    companyName: 'Gold Coast Maids',
    location: 'Gold Coast',
    phone: '07 5646 5290',
    email: {
        support: 'support@goldcoastmaids.com.au',
        teams: 'teams@goldcoastmaids.com.au',
        admin: 'admin@goldcoastmaids.com.au'
    },
    operatingHours: [
        { day: 'Monday', hours: '8:00 AM to 5:00 PM' },
        { day: 'Tuesday', hours: '8:00 AM to 5:00 PM' },
        { day: 'Wednesday', hours: '8:00 AM to 5:00 PM' },
        { day: 'Thursday', hours: '8:00 AM to 5:00 PM' },
        { day: 'Friday', hours: '8:00 AM to 5:00 PM' },
        { day: 'Saturday', hours: 'CLOSED' },
        { day: 'Sunday', hours: 'CLOSED' },
    ],
}

export default businessData