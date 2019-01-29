// Fields
import {
    Extras
} from '../sections/BookingForm/Fields'
// Field summaries
import {
    PackageSummary
} from '../sections/BookingForm/Content'
// Icons
import ExtrasIcon from '@material-ui/icons/AddCircle'

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