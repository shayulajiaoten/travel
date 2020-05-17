const news = require("../models/news");

const new_new = (title, img, content, sort) => {
  const new_news = new news({ title, img, content, sort });
  return new_news.save();
};

const query_new = () => {
  return news.find().sort({sort:1});
};
const edit_new = (id, title, img, content, sort) => {
  return news.findByIdAndUpdate(id, { title, img, content, sort });
};
const delete_new = (id) => {
  return news.findByIdAndRemove(id);
};
module.exports = {
  new_new,
  query_new,
  edit_new,
  delete_new,
};
