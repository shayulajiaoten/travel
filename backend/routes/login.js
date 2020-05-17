var express = require("express");
var router = express.Router();
const { admin_login } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");
router.post("/", function (req, res, next) {
  const { username, password } = req.body;
  console.log('test');
  
  const result = admin_login(username, password);
  return result.then((data) => {
    console.log(data);
    
    if (data[0]) {
      

      return res.json(new SuccessModel(data));
    } else {
      return res.json(new ErrorModel('验证失败'));
    }
  });
});

module.exports = router;
