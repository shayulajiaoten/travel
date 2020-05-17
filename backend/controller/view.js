const views = require("../models/views");

const new_view = (title, img, content, sort) => {
  const new_view = new views({ title, img, content, sort });
  return new_view.save();
};

const query_view = (limit) => {
  if (limit) {
    return views.find().sort({ sort: 1 }).limit(parseInt(limit));
  } else {
    return views.find().sort({ sort: 1 }).limit();
  }
};
const edit_view = (id, title, img, content, sort) => {
  return views.findByIdAndUpdate(id, { title, img, content, sort });
};
const delete_view = (id) => {
  return views.findByIdAndRemove(id);
};

const detail_view = (id) => {
  return views.findById(id);
};
module.exports = {
  new_view,
  query_view,
  edit_view,
  delete_view,
  detail_view,
};
