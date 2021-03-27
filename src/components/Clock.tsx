import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClock";
import {AnalogClockView} from "./AnalogClock";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

const Clock: React.FC<PropsType> = (props) => {
    const [data, setData] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000)
        return () => clearInterval(intervalID)
    }, [])

    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={data}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={data}/>
    }

    return <div>
        {view}
    </div>
}

export default Clock