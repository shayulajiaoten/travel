var express = require("express");
var router = express.Router();
const {
  new_view,
  query_view,
  edit_view,
  delete_view,
  detail_view
} = require("../controller/view");
const { SuccessModel, ErrorModel } = require("../model/resModel");
/* GET home page. */
router.post("/new", function (req, res, next) {
  const { title, img, content, sort } = req.body;
  const result = new_view(title, img, content, sort);
  return result.then(() => {
    return res.json(new SuccessModel("添加成功"));
  });
});

router.post("/edit", function (req, res, next) {
  const { id, title, img, content, sort } = req.body;
  const result = edit_view(id, title, img, content, sort);
  return result.then(() => {
    return res.json(new SuccessModel("修改成功"));
  });
});

router.get("/query", function (req, res, next) {
  let params = req.query
  const result = query_view(params.limit);
  return result.then((data) => {
    return res.json(new SuccessModel(data));
  });
});

router.post("/delete", function (req, res, next) {
  const { id } = req.body;
  const result = delete_view(id);
  return result.then(() => {
    return res.json(new SuccessModel("删除成功"));
  });
});

router.post("/detail", function (req, res, next) {
  const { id } = req.body;
  const result = detail_view(id);
  return result.then((data) => {
    return res.json(new SuccessModel(data));
  });
});

module.exports = router;
