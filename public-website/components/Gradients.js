import React from 'react'

const hsl = {
    primary: '187, 100%, 42%',
    primaryDark: '186, 100%, 33%',
    primaryLight: '187, 72%, 71%',
    secondary: '30, 100%, 48%',
    secondaryDark: '21, 100%, 45%',
    white: '0, 100%, 100%',
    black: '0, 0%, 0%',
}

export default function Gradient(props) {
    return (
        `linear-gradient(hsl(${hsl[props]}) 0%, hsla(${hsl[props]}, 0.738) 19%, hsla(${hsl[props]}, 0.541) 34%, hsla(${hsl[props]}, 0.382) 47%, hsla(${hsl[props]}, 0.278) 56.5%, hsla(${hsl[props]}, 0.194) 65%, hsla(${hsl[props]}, 0.126) 73%, hsla(${hsl[props]}, 0.075) 80.2%, hsla(${hsl[props]}, 0.042) 86.1%, hsla(${hsl[props]}, 0.021) 91%, hsla(${hsl[props]}, 0.008) 95.2%, hsla(${hsl[props]}, 0.002) 98.2%, hsla(${hsl[props]}, 0) 100%)`
    )
}