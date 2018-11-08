

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
    type: String,
    name: String,
    sort: String,
    introduce: String,
    in_img: [{
        type: Schema.Types.ObjectId,
        ref: "imgs"
    }],
    link: String,
    link_imageUrl: String,
    date: String
})

mongoose.model("project", projectSchema, "project")