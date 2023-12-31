// Problem one

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//Predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes

// Problem Two

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output
console.log(name); // Elon
console.log(otherName); // Elon cause the : allows us to rename it

const greet="gello";
console.log(`${greet}`);

// Problem Three

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // undefined cause password doesn't exist within the object



// Problem four

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

//Predict the output
console.log(first == second); // false cause 2 != 5
console.log(first == third); // true cause 2 == 2



// Problem Five

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // key = "value" 
const { secondKey } = lastTest; // secondkey= [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // willThisWork = 5

//Predict the output
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5
