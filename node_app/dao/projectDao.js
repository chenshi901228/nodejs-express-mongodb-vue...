var mongoose = require('mongoose');
var fs = require('fs')

module.exports.addProject = async pro => {
    let data = await mongoose.model("project")
        .create(pro)
    if (data) {
        return {
            status: "ok",
            code: 200
        }
    }
}


module.exports.getProject = async ({ type = "全部", pageSize = 7, currentPage = 1 }) => {
    let list = {}
    list.default_type = type
    list.pageSize = pageSize
    list.currentPage = currentPage
    if (type == "全部") {
        list.total = await mongoose.model("project")
            .find()
            .countDocuments()
        list.rows = await mongoose.model("project")
            .find()
            .populate('in_img')
            .sort({
                type: 1
            })
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    } else {
        list.total = await mongoose.model("project")
            .find({ type })
            .countDocuments()
        list.rows = await mongoose.model("project")
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

module.exports.delProject = async ({ _id, type, pageSize, currentPage }) => {
    let list = {}
    let data = await mongoose.model("project")
        .find({
            _id
        })
        .populate("in_img")
    // 删除图片
    data[0].in_img.forEach(async ({ url }) => {
        await fs.unlink(url, () => { })
    })
    if (data[0].link_imageUrl) {
        await fs.unlink(data[0].link_imageUrl, () => { })
    }
    await mongoose.model("project")
        .deleteOne({
            _id
        })
    list.default_type = type
    list.pageSize = pageSize
    list.currentPage = currentPage
    if (type == "全部") {
        list.total = await mongoose.model("project")
            .find()
            .countDocuments()
        list.rows = await mongoose.model("project")
            .find()
            .populate('in_img')
            .sort({
                type: 1
            })
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .exec()
    } else {
        list.total = await mongoose.model("project")
            .find({ type })
            .countDocuments()
        list.rows = await mongoose.model("project")
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