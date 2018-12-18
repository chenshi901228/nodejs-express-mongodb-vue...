var mongoose = require('mongoose');
var fs = require('fs')


module.exports.addNews = async news => {
    let data = mongoose.model("news")
        .create(news)
    if (data) {
        return {
            status: "ok",
            code: 200
        }
    }
}


module.exports.getNews = async ({ type = "全部", currentPage = 1, pageSize = 12 }) => {
    let list = {}
    list.default_type = type
    list.pageSize = pageSize
    list.currentPage = currentPage
    if (type == "全部") {
        list.total = await mongoose.model("news")
            .find()
            .countDocuments()
        list.rows = await mongoose.model("news")
            .find()
            .populate('in_img')
            .sort({
                type: 1
            })
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    } else {
        list.total = await mongoose.model("news")
            .find({ type })
            .countDocuments()
        list.rows = await mongoose.model("news")
            .find({ type })
            .populate('in_img')
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    }
    if (list) {
        return {
            status: "ok",
            code: 200,
            list
        }
    }
}


module.exports.delNews = async ({ _id, type, pageSize, currentPage }) => {
    let list = {}
    let data = await mongoose.model("news")
        .find({
            _id
        })
        .populate("in_img")
    // 删除图片
    data[0].in_img.forEach(async ({ url }) => {
        await fs.unlink(__dirname.replace("dao","public") + url.replace("http://39.104.121.78",""), () => { })
    })
    await mongoose.model("news")
        .deleteOne({
            _id
        })
    list.default_type = type
    list.pageSize = pageSize
    list.currentPage = currentPage
    if (type == "全部") {
        list.total = await mongoose.model("news")
            .find()
            .countDocuments()
        list.rows = await mongoose.model("news")
            .find()
            .populate('in_img')
            .sort({
                type: 1
            })
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    } else {
        list.total = await mongoose.model("news")
            .find({ type })
            .countDocuments()
        list.rows = await mongoose.model("news")
            .find({ type })
            .populate('in_img')
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    }
    if (list) {
        return {
            status: "ok",
            code: 200,
            list
        }
    }
}