const eats = require("../models/Travel");

const new_food = (title, img, content, sort) => {
  const new_food = new eats({ title, img, content, sort });
  return new_food.save();
};

const query_food = () => {
  return eats.find().sort({sort:1});
};
const edit_food = (id, title, img, content, sort) => {
  return eats.findByIdAndUpdate(id, { title, img, content, sort });
};
const delete_food = (id) => {
  return eats.findByIdAndRemove(id);
};
module.exports = {
  new_food,
  query_food,
  edit_food,
  delete_food,
};
