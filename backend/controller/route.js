const routes = require("../models/lines");

const new_route = (title, img, content, sort) => {
  const new_route = new routes({ title, img, content, sort });
  return new_route.save();
};

const query_route = () => {
  return routes.find().sort({sort:1});
};
const edit_route = (id, title, img, content, sort) => {
  return routes.findByIdAndUpdate(id, { title, img, content, sort });
};
const delete_route = (id) => {
  return routes.findByIdAndRemove(id);
};
module.exports = {
  new_route,
  query_route,
  edit_route,
  delete_route,
};
