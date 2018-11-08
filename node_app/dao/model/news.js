

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
    type: String,
    title: String,
    introduce: String,
    in_img: [{
        type: Schema.Types.ObjectId,
        ref: "imgs"
    }],
    date: String
})

mongoose.model("news", projectSchema, "news")