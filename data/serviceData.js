// Fields
import {
    Name,
    Email,
    Suburb,
    Bedrooms,
    Bathrooms,
    LivingAreas,
    Kitchens,
    NumberOfCleaners,
    NumberOfHours,
    Package,
    Extras,
    Frequency,
    Service
} from '../sections/BookingForm/Fields'
// Field summaries
import {
    ServiceSummary,
    PackageSummary
} from '../sections/BookingForm/Content'
// Icons
import ServiceIcon from '@material-ui/icons/CardGiftcard'
import RoutineIcon from '@material-ui/icons/Hotel'
import OneTimeIcon from '@material-ui/icons/Wc'
import BondIcon from '@material-ui/icons/Weekend'
import SpringIcon from '@material-ui/icons/Face'
import BedroomsIcon from '@material-ui/icons/Hotel'
import BathroomsIcon from '@material-ui/icons/Wc' // Bath tub
import LivingAreasIcon from '@material-ui/icons/Weekend'
import KitchensIcon from '@material-ui/icons/Kitchen'
import CleanersIcon from '@material-ui/icons/Face'
import HoursIcon from '@material-ui/icons/Schedule'
import FixedPriceIcon from '@material-ui/icons/CardGiftcard' // Gem
import HourlyRateIcon from '@material-ui/icons/Schedule' // Hourglass
import PackageIcon from '@material-ui/icons/CardGiftcard'
import ExtrasIcon from '@material-ui/icons/AddCircle'
import SuburbIcon from '@material-ui/icons/LocationOn'

export const clientMap = {
    values: {
        name: {
            label: 'Name',
            stateType: 'client',
            stateValue: 'name',
            id: 'name',
            icon: BedroomsIcon,
            inputField: Name,
        },
        email: {
            label: 'Email',
            stateType: 'client',
            stateValue: 'email',
            id: 'email',
            icon: BathroomsIcon,
            inputField: Email,
        },
        suburb: {
            label: 'Suburb',
            stateType: 'client',
            stateValue: 'suburb',
            id: 'suburb',
            icon: SuburbIcon,
            inputField: Suburb,
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

export const roomsMap = {
    values: {
        10: {
            label: 'Bedrooms',
            stateType: 'service',
            stateValue: 'bedrooms',
            id: 'bedrooms',
            icon: BedroomsIcon,
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
            icon: BathroomsIcon,
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
            label: 'Living Areas',
            id: 'livingAreas',
            stateType: 'service',
            stateValue: 'livingAreas',
            icon: LivingAreasIcon,
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
            icon: KitchensIcon,
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
    label: 'Frequency',
    id: 'frequency',
    stateType: 'service',
    stateValue: 'frequency',
    inputField: Frequency,
    values: {
        weekly: {
            label: 'Weekly',
            discountAmount: 0.25
        },
        fortnightly: {
            label: 'Fortnightly',
            discountAmount: 0.15
        },
        monthly: {
            label: 'Monthly',
            discountAmount: 0.05
        }
    }
}

export const hourlyRateMap = {
    values: {
        cleaners: {
            label: 'Cleaners',
            id: 'cleaners',
            stateType: 'service',
            stateValue: 'cleaners',
            icon: CleanersIcon,
            inputField: NumberOfCleaners,
            suffix: 'Cleaner/s',
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
            icon: HoursIcon,
            inputField: NumberOfHours,
            suffix: '',
            values: {
                2: { label: '2 to 2.5 Hours' },
                2.5: { label: '2.5 to 3 Hours' },
                3: { label: '3 to 4 Hours' },
                4: { label: '4 to 6 Hours' },
                6: { label: 'More than 6 Hours' },
            }
        },
    }
}

export const packageMap = {
    label: 'Package',
    id: 'package',
    stateType: 'service',
    stateValue: 'package',
    icon: PackageIcon,
    inputField: Package,
    summary: PackageSummary,
    values: {
        fixedPrice: {
            label: 'Deluxe Package',
            id: 'fixedPrice',
            stateType: 'service',
            stateValue: 'package',
            icon: FixedPriceIcon,
            values: roomsMap.values
        },
        hourlyRate: {
            label: 'Hourly Rate',
            id: 'hourlyRate',
            stateType: 'service',
            stateValue: 'package',
            icon: HourlyRateIcon,
            values: hourlyRateMap.values
        },
    }
}

export const extrasMap = {
    stateType: 'service',
    stateValue: 'extras',
    unselectedStateType: 'bookingForm',
    unselectedValue: 'unselectedExtras',
    icon: ExtrasIcon,
    summary: PackageSummary,
    inputField: Extras,
    values: {
        ovenCleaning: {
            label: 'Oven Cleaning',
            icon: ExtrasIcon,
        },
        windowCleaning: {
            label: 'Window Cleaning',
            icon: ExtrasIcon,
        },
        insideCupboards: {
            label: 'Inside Cupboards',
            icon: ExtrasIcon,
        },
        insideFridge: {
            label: 'Inside Fridge',
            icon: ExtrasIcon,
        }
    }
}


export const serviceMap = {
    label: 'Service',
    id: 'service',
    stateType: 'service',
    stateValue: 'service',
    icon: ServiceIcon,
    inputField: Service,
    summary: ServiceSummary,
    values: {
        10: {
            label: 'Routine Cleaning',
            id: 'routineCleaning',
            href: '/',
            description: {
                short: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
            },
            icon: RoutineIcon,
            image: 'home-cleaning'
        },
        20: {
            label: 'One Time Cleaning',
            id: 'oneTimeCleaning',
            href: '/',
            description: {
                short: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
            },
            icon: OneTimeIcon,
            image: 'home-cleaning'
        },
        30: {
            label: 'Bond Cleaning',
            id: 'bondCleaning',
            href: '/',
            description: {
                short: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
            },
            icon: BondIcon,
            image: 'home-cleaning'
        },
        40: {
            label: 'Spring Cleaning',
            id: 'springCleaning',
            href: '/',
            description: {
                short: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
            },
            icon: SpringIcon,
            image: 'home-cleaning'
        }
    }
}