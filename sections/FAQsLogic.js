import React from 'react'
// Data
import { faqsData } from '../data/faqsData'
// Components
import FAQs from './FAQs'

// Caculate total number of FAQs and create array for each category
let totalLength = 0
let categoriesArray = []
for (const key in faqsData) {
    let value = faqsData[key]
    let length = Object.keys(value.faqs).length
    categoriesArray.push(
        {
            key: key,
            label: value.label,
            faqs: value.faqs,
            runningLength: totalLength + length + 1, // +1 as category title is same size as an FAQ field
        }
    )
    totalLength += length + 3 // +3 to include category title plus margin between sections
}

// Determine where to slice categories to split FAQs into two evenly-sized sections
let sliceOn
for (var i = 0; i < categoriesArray.length; i++) {
    if (categoriesArray[i].runningLength >= totalLength / 2) {
        sliceOn = i
        break
    }
}
// Split categories array into two sections
const categoriesArray_First = categoriesArray.slice(0, sliceOn)
categoriesArray.splice(0, sliceOn)

export default function FAQsLogic(props) {
    return (
        <FAQs
            rootClass={props.className}
            categoriesArray_First={categoriesArray_First}
            categoriesArray_Second={categoriesArray}
            sliceOn={sliceOn}
        />
    )
}