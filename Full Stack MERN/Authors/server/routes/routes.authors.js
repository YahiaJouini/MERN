const authorController = require("../controllers/authors.controller")

module.exports = (app) => {
    app.get("/api/authors", authorController.getAuthors)
    app.get("/api/authors/:id", authorController.getAuthor)
    app.post("/api/author/new", authorController.createAuthor)
    app.patch("/api/authors/:id/edit", authorController.updateAuthor)
    app.delete("/api/deleteAuth/:id", authorController.deleteAuthor)
}