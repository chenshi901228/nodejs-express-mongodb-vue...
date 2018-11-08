
const { addImg, delImg } = require('../dao/imgDao')

module.exports.addImg = async img => {
    return await addImg(img)
}
module.exports.delImg = async img => {
    return await delImg(img)
}