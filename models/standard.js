const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const standardSchema = new Schema({
        standard: { type: Integer, required: true },
        gradeLev: { type: Integer, required: true},
        desc: { type: String, required: true},
        title: { type: String, required: true},
        type: {type: Integer, required: true },
        text: {type: String, required: true }
        });

const Standard = mongoose.model("Standard", standardSchema);

module.exports = Standard;