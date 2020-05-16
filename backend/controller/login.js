const admin = require("../models/admin");
const admin_login = (username, password) => {
  return admin.find({ username, password });
};
module.exports = {
  admin_login,
};
