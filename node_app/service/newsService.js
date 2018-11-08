

const { addNews, getNews, delNews } = require("../dao/newsDao")


module.exports.addNews = async news => {
    return await addNews(news)
}
module.exports.getNews = async news => {
    return await getNews(news)
}
module.exports.delNews = async news => {
    return await delNews(news)
}