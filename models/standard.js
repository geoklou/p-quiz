const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const standardSchema = new Schema({
        standard: { type: Number, required: true },
        gradeLev: { type: Number, required: true},
        desc: { type: String, required: true},
        title: { type: String, required: true},
        type: {type: Number, required: true },
        text: {type: String, required: true }
        });

const Standard = mongoose.model("Standard", standardSchema);

module.exports = Standard;