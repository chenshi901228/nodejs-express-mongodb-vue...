


const { addProject, getProject, delProject } = require("../dao/projectDao")

module.exports.addProject = async pro => {
    return await addProject(pro)
}
module.exports.getProject = async pro => {
    return await getProject(pro)
}
module.exports.delProject = async pro => {
    return await delProject(pro)
}
