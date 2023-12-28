import { FC, useState } from "react";

export const Example1: FC = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Example 1</h1>
            <p>Refer Example 1 file for this example.</p>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>
            <p>Notice that number only increments once per click!</p>
            <p>Setting state only changes it for the next render. During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after setNumber(number + 1) was called:</p>
            <p>
                Here is what this button’s click handler tells React to do:

                <p>1.setNumber(number + 1): number is 0 so setNumber(0 + 1).</p>
                <p>React prepares to change number to 1 on the next render.</p>
                <p>2.setNumber(number + 1): number is 0 so setNumber(0 + 1).</p>
                <p>React prepares to change number to 1 on the next render.</p>
                <p>3.setNumber(number + 1): number is 0 so setNumber(0 + 1).</p>
                <p>React prepares to change number to 1 on the next render.</p>

            </p>
        </>
    )
}