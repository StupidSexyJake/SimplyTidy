import { Fragment } from 'react'

const IconList = {
    book: {
        viewbox: "0 0 24 24",
        paths: [
            { 
                src: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
                fill: ""
            },
            {   
                src: "M0 0h24v24H0z",
                fill: "none"
            }
            
        ],
    }
}

export default (props) => (
    <Fragment>
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={IconList[props.type].viewbox}>
                {IconList[props.type].paths.map((icon) => (
                    <path d={ icon.src } fill={ icon.fill } key={ icon.src }/>
                ))}
            </svg>
        </i>
        <style jsx>{`
            i {
                vertical-align: middle;
                height: 18px;
            }
            svg {
                fill: ${props.fill};
            }
        `}</style>
    </Fragment>
)