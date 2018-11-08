var express = require('express');
var router = express.Router();

const { addNews, getNews, delNews } = require("../service/newsService")

router.post("/addNews", async function (req, res, next) {
    res.send(await addNews(req.body))
})
router.post("/getNews", async function (req, res, next) {
    res.send(await getNews(req.body))
})
router.post("/delNews", async function (req, res, next) {
    res.send(await delNews(req.body))
})



module.exports = router