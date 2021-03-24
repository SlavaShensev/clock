import React, {useEffect, useState} from "react";

type PropsType = {}

const Clock: React.FC<PropsType> = (props) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setData(new Date())
        }, 1000)
    }, [])

    const get2numbersString = (num: number) => num < 10 ? '0' + num : num

    return <div>

        <span> {get2numbersString(data.getHours())} </span>
        :
        <span> {get2numbersString(data.getMinutes())} </span>
        :
        <span> {get2numbersString(data.getSeconds())} </span>


    </div>

}

export default Clock