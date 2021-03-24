import React, {useEffect, useState} from "react";

type PropsType = {}

const Clock: React.FC<PropsType> = (props) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setData(new Date())
        }, 1000)
    }, [])




    return <div>

        <span> {data.getHours()} </span>
        :
        <span> {data.getMinutes()} </span>
        :
        <span> {data.getSeconds()} </span>


    </div>

}

export default Clock