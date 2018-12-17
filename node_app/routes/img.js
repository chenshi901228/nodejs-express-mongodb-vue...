var express = require('express');
var router = express.Router();

const { delImg } = require("../service/imgService")

router.post("/delImg", async function (req, res, next) {
    res.send(await delImg(req.body))
})



module.exports = router