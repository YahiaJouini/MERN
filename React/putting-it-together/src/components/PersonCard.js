import { useState } from "react"

export default function PersonCard({ firstName, lastName, age, hairColor }) {
    const [stateAge, setStateAge] = useState(age)
    return (
        <>
            <h1>{firstName}, {lastName}</h1>
            <p>Age : {String(stateAge)}</p>
            <p>Hair Color : {hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>Birthday Button For Jane</button>
        </>
    )
}