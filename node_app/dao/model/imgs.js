

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const imgSchema = new mongoose.Schema({
	url: String,
})

mongoose.model("imgs", imgSchema, "imgs")