import React, {useEffect, useState} from "react";

type PropsType = {}

const Clock: React.FC<PropsType> = (props) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setData(new Date())
        }, 1000)
    }, [])

    const hoursString = data.getHours() < 10
        ? '0' + data.getHours()
        : data.getHours()

    const minutesString = data.getMinutes() < 10
        ? '0' + data.getMinutes()
        : data.getMinutes()

    const secondsString = data.getSeconds() < 10
        ? '0' + data.getSeconds()
        : data.getSeconds()

    return <div>

        <span> {hoursString} </span>
        :
        <span> {minutesString} </span>
        :
        <span> {secondsString} </span>


    </div>

}

export default Clock