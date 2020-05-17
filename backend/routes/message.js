var express = require("express");
var router = express.Router();
const { new_new, query_new, edit_new,delete_new } = require("../controller/message");
const { SuccessModel, ErrorModel } = require("../model/resModel");
/* GET home page. */
router.post("/new", function (req, res, next) {
  const { title, img, content, sort } = req.body;
  const result = new_new(title, img, content, sort);
  return result.then(() => {
    return res.json(new SuccessModel("添加成功"));
  });
});

router.post("/edit", function (req, res, next) {
  const { id, title, img, content, sort } = req.body;
  const result = edit_new(id, title, img, content, sort);
  return result.then(() => {
    return res.json(new SuccessModel("修改成功"));
  });
});

router.get("/query", function (req, res, next) {
  const result = query_new();
  return result.then((data) => {
    return res.json(new SuccessModel(data));
  });
});

router.post("/delete", function (req, res, next) {
  const { id } = req.body;
  const result = delete_new(id);
  return result.then(() => {
    return res.json(new SuccessModel("删除成功"));
  });
});

module.exports = router;
