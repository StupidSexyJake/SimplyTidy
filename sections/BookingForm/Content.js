import React from 'react'
// Data
import {
    serviceMap,
    packageMap,
    frequencyMap,
    hourlyRateMap
} from '../../data/serviceData'
// Content field containers
import {
    SummaryContainer,
    StaticTextContainer,
    IconContentContainer
} from './Containers/ContentField'
// Calculations
import { totalPrice } from '../../utils/pricingCalculator'
// Icons
import LockIcon from '@material-ui/icons/EnhancedEncryption'
// Components
import Image from '../../components/Image'

export function ServiceSummary() {
    return (
        <SummaryContainer
            category={serviceMap}
        />
    )
}

export function PackageSummary() {
    return (
        <SummaryContainer
            category={packageMap}
        />
    )
}

export function NeedHelp(props) {
    return (
        <StaticTextContainer {...props}>
            We're right here to help you! Click here to chat online with our Customer Happiness Team or call us on (07) 5646 5290.
        </StaticTextContainer>
    )
}

export function TrustIcons(props) {
    const { height, ...other } = props
    return (
        <IconContentContainer {...other}
            height={height || 3} // measured in theme.styling.units (8px unless default changed)
            icons={[
                {
                    inputVariant: LockIcon,
                },
                {
                    inputVariant: Image,
                    src: './static/other/powered_by_stripe.png',
                },
            ]}
        />
    )
}

export function PriceSummary(props) {
    const totalPriceObject = totalPrice()
    return (
        <StaticTextContainer {...props}>
            {parseInt(totalPriceObject.maxTotalPrice) === 0 && <span>From </span>}
            {parseInt(totalPriceObject.minTotalPrice) > 0 && `$${totalPriceObject.minTotalPrice}`}
            {parseInt(totalPriceObject.minTotalPrice) > 0 && parseInt(totalPriceObject.maxTotalPrice) > 0 && ' - '}
            {parseInt(totalPriceObject.maxTotalPrice) > 0 && `$${totalPriceObject.maxTotalPrice}`}
        </StaticTextContainer>
    )
}