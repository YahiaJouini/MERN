const { faker } = require('@faker-js/faker')
const express = require('express')

const app = express()
const PORT = 5000


const createUser = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    adress: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }
})


app.get("/api/users/new", (req, res) => {
    const newUser = createUser()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const result = {
        user: createUser(),
        company: createCompany()
    }
    res.json(result)
})


app.listen(PORT, () => console.log('running'))