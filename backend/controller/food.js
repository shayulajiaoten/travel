const eats = require("../models/eats");

const new_food = (title, img, content, sort) => {
  const new_food = new eats({ title, img, content, sort });
  return new_food.save();
};

const query_food = (limit) => {
  if (limit) {
    return eats.find().sort({ sort: 1 }).limit(parseInt(limit));
  } else {
    return eats.find().sort({ sort: 1 }).limit();
  }
};

const edit_food = (id, title, img, content, sort) => {
  return eats.findByIdAndUpdate(id, { title, img, content, sort });
};

const delete_food = (id) => {
  return eats.findByIdAndRemove(id);
};

const detail_food = (id) => {
  return eats.findById(id);
};

module.exports = {
  new_food,
  query_food,
  edit_food,
  delete_food,
  detail_food
};
