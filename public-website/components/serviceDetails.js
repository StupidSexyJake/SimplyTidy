import React from 'react'
// Fields
import {
    Bedrooms,
    Bathrooms,
    LivingAreas,
    Kitchens,
    NumberOfCleaners,
    NumberOfHours,
    Package,
    Extras
} from '../sections/BookingForm/Fields'
// Icons
import BedroomsIcon from '@material-ui/icons/Hotel'
import BathroomsIcon from '@material-ui/icons/Wc'
import LivingAreasIcon from '@material-ui/icons/Weekend'
import KitchensIcon from '@material-ui/icons/Kitchen'
import CleanersIcon from '@material-ui/icons/Face'
import HoursIcon from '@material-ui/icons/Schedule'
import FixedPriceIcon from '@material-ui/icons/CardGiftcard'
import HourlyRateIcon from '@material-ui/icons/Schedule'

export const clientMap = {
    values: {
        name: {
            label: 'Name',
            stateType: 'client',
            stateValue: 'name',
            id: 'name',
            icon: <BedroomsIcon />,
        },
        email: {
            label: 'Email',
            stateType: 'client',
            stateValue: 'email',
            id: 'email',
            icon: <BedroomsIcon />,
        },
        suburb: {
            label: 'Suburb',
            stateType: 'client',
            stateValue: 'suburb',
            id: 'suburb',
            icon: <BedroomsIcon />,
            values: [
                { label: 'Advancetown' },
                { label: 'Arundel' },
                { label: 'Ashmore' },
                { label: 'Benowa' },
                { label: 'Biggera Waters' },
                { label: 'Bilinga' },
                { label: 'Broadbeach' },
                { label: 'Bundall' },
                { label: 'Burleigh Heads' },
                { label: 'Burleigh Waters' },
                { label: 'Carrara' },
                { label: 'Chevron Island' },
                { label: 'Clear Island Waters' },
                { label: 'Coolangatta' },
                { label: 'Coombabah' },
                { label: 'Coomera' },
                { label: 'Currumbin' },
                { label: 'Currumbin Waters' },
                { label: 'Currumbin Valley' },
                { label: 'Elanora' },
                { label: 'Gaven' },
                { label: 'Helensvale' },
                { label: 'Highland Park' },
                { label: 'Hollywell' },
                { label: 'Hope Island' },
                { label: 'Isle of Capri' },
                { label: 'Jacobs Well' },
                { label: 'Kirra' },
                { label: 'Labrador' },
                { label: 'Main Beach' },
                { label: 'Maudsland' },
                { label: 'Mermaid Beach' },
                { label: 'Mermaid Waters' },
                { label: 'Merrimac' },
                { label: 'Miami' },
                { label: 'Molendinar' },
                { label: 'Mudgeeraba' },
                { label: 'Nerang' },
                { label: 'Nobbys Beach' },
                { label: 'Ormeau' },
                { label: 'Oxenford' },
                { label: 'Pacific Pines' },
                { label: 'Palm Beach' },
                { label: 'Paradise Point' },
                { label: 'Parkwood' },
                { label: 'Pimpama' },
                { label: 'Reedy Creek' },
                { label: 'Robina' },
                { label: 'Runaway Bay' },
                { label: 'Sanctuary Cove' },
                { label: 'Southport' },
                { label: 'Surfers Paradise' },
                { label: 'Tallai' },
                { label: 'Tallebudgera' },
                { label: 'Tugun' },
                { label: 'Varsity Lakes' },
                { label: 'Worongary' },
            ]
        }
    }
}

export const serviceMap = {
    label: 'Service',
    stateType: 'service',
    stateValue: 'service',
    id: 'service',
    values: {
        10: {
            label: 'Routine Cleaning',
            id: 'routineCleaning',
            icon: 'regular-maid-services-icon.png'
        },
        20: {
            label: 'One Time Cleaning',
            id: 'oneTimeCleaning',
            icon: 'spring-cleaning-icon.png'
        },
        30: {
            label: 'Bond Cleaning',
            id: 'bondCleaning',
            icon: 'spring-cleaning-icon.png'
        },
        40: {
            label: 'Spring Cleaning',
            id: 'springCleaning',
            icon: 'spring-cleaning-icon.png'
        }
    }
}

export const packageMap = {
    stateType: 'service',
    stateValue: 'package',
    inputField: Package,
    values: {
        fixedPrice: {
            label: 'Deluxe Package',
            id: 'fixedPrice',
            stateType: 'service',
            stateValue: 'package',
            icon: <FixedPriceIcon />,
        },
        hourlyRate: {
            label: 'Hourly Rate',
            id: 'hourlyRate',
            stateType: 'service',
            stateValue: 'package',
            icon: <HourlyRateIcon />,
        },
    }
}

export const roomsMap = {
    values: {
        10: {
            label: 'Bedrooms',
            stateType: 'service',
            stateValue: 'bedrooms',
            id: 'bedrooms',
            icon: <BedroomsIcon />,
            inputField: Bedrooms,
            values: {
                0: { label: '0' },
                1: { label: '1' },
                2: { label: '2' },
                3: { label: '3' },
                4: { label: '4' },
                5: { label: '5' },
            }
        },
        20: {
            label: 'Bathrooms',
            stateType: 'service',
            stateValue: 'bathrooms',
            id: 'bathrooms',
            icon: <BathroomsIcon />,
            inputField: Bathrooms,
            values: {
                0: { label: '0' },
                1: { label: '1' },
                2: { label: '2' },
                3: { label: '3' },
                4: { label: '4' },
                5: { label: '5' },
            }
        },
        30: {
            label: 'LivingAreas',
            id: 'livingAreas',
            stateType: 'service',
            stateValue: 'livingAreas',
            icon: <LivingAreasIcon />,
            inputField: LivingAreas,
            values: {
                0: { label: '0' },
                1: { label: '1' },
                2: { label: '2' },
                3: { label: '3' },
                4: { label: '4' },
                5: { label: '5' },
            }
        },
        40: {
            label: 'Kitchens',
            id: 'kitchens',
            stateType: 'service',
            stateValue: 'kitchens',
            icon: <KitchensIcon />,
            inputField: Kitchens,
            values: {
                0: { label: '0' },
                1: { label: '1' },
                2: { label: '2' },
            }
        }
    }
}

export const frequencyMap = {
    '10': {
        key: 1,
        label: 'Weekly',
        discountAmount: 0.25
    },
    '20': {
        key: 2,
        label: 'Fortnightly',
        discountAmount: 0.15
    },
    '30': {
        key: 3,
        label: 'Monthly',
        discountAmount: 0.05
    },
    '1': {
        key: 40,
        label: 'One Time Service',
        discountAmount: 0
    }
}

export const hourlyRateMap = {
    values: {
        cleaners: {
            label: 'Cleaners',
            id: 'cleaners',
            stateType: 'service',
            stateValue: 'cleaners',
            icon: <CleanersIcon />,
            inputField: NumberOfCleaners,
            values: {
                1: { label: '1' },
                2: { label: '2' },
            }
        },
        hours: {
            label: 'Hours Required',
            id: 'hours',
            stateType: 'service',
            stateValue: 'hours',
            icon: <HoursIcon />,
            inputField: NumberOfHours,
            values: {
                1: { label: '2 to 2.5 hours' },
                2: { label: '2.5 to 3 hours' },
                3: { label: '3 to 4 hours' },
                4: { label: '4 to 6 hours' },
                5: { label: 'More than 6 hours' },
            }
        },
    }
}

export const extrasMap = {
    stateType: 'service',
    stateValue: 'extras',
    unselectedStateType: 'bookingForm',
    unselectedValue: 'unselectedExtras',
    inputField: Extras,
    values: {
        ovenCleaning: {
            label: 'Oven Cleaning',
        },
        windowCleaning: {
            label: 'Window Cleaning',
        },
        insideCupboards: {
            label: 'Inside Cupboards',
        },
        insideFridge: {
            label: 'Inside Fridge',
        }
    }
}