import React from 'react'

// Create input component based on prop variant
export function VariantInput(inputProps) {
    const { inputVariant, ...other } = inputProps
    const InputVariant = inputVariant
    return (
        <InputVariant {...other} />
    )
}