const Author = require("../models/Author.model");


// create author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body).then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// get all authors
module.exports.getAuthors = (req, res) => {
    Author.find().then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

// get one author
module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}


// update author
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// delete author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}