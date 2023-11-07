export default function PersonCard({ firstName, lastName, age, hairColor }) {
    return (
        <>
            <h1>{firstName}, {lastName}</h1>
            <p>Age : {String(age)}</p>
            <p>Hair Color : {hairColor}</p>
        </>)
        


}