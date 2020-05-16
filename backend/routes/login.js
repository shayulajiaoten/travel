var express = require("express");
var router = express.Router();
const { admin_login } = require("../controller/login");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const jwt = require("jsonwebtoken");
router.post("/", function (req, res, next) {
  const { username, password } = req.body;
  console.log('test');
  
  const result = admin_login(username, password);
  return result.then((data) => {
    console.log(data);
    
    if (data[0]) {
      const token = jwt.sign(
        {
          _id: data[0]._id,
          username: data[0].username,
        },
        "secret12345",
        {
          expiresIn: 3600 * 24 * 3,
        }
      );

      return res.json(new SuccessModel(data, token));
    } else {
      return res.json(new ErrorModel('验证失败'));
    }
  });
});

module.exports = router;
