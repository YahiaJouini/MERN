const mongoose = require("mongoose")

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"],
    },
}, { timestamps: true })

module.exports = mongoose.model("authorSchema", authorsSchema)