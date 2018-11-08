var express = require('express');
var router = express.Router();

const {
  addProject,
  getProject,
  delProject
} = require("../service/projectService")



/* add */
router.post('/addProject', async function (req, res, next) {
  res.send(await addProject(req.body));
});
// get
router.post('/getProject', async function (req, res, next) {
  res.send(await getProject(req.body));
});
// del
router.post('/delProject', async function (req, res, next) {
  res.send(await delProject(req.body));
});

module.exports = router;
