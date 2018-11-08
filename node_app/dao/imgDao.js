var mongoose = require("mongoose")
var fs = require("fs")


module.exports.addImg = async img => {
    let {
        _id: imgId,
        url
    } = await mongoose
        .model("imgs")
        .create(img)
    return { imgId, url }
}

module.exports.delImg = async img => {
    let {
        _id: imgId,
        url
    } = await mongoose
        .model("imgs")
        .create(img)
    return { imgId, url }
}