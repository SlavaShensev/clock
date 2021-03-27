import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2numbersString = (num: number) => (num < 10) ? ('0' + num) : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span> {get2numbersString(date.getHours())} </span>
        :
        <span> {get2numbersString(date.getMinutes())} </span>
        :
        <span> {get2numbersString(date.getSeconds())} </span>
    </>
}