const hotels = require("../models/hotels");

const new_hotel = (title, img, content, sort) => {
  const new_hotel = new hotels({ title, img, content, sort });
  return new_hotel.save();
};

const query_hotel = (limit) => {
  if (limit) {
    return hotels.find().sort({ sort: 1 }).limit(parseInt(limit));
  } else {
    return hotels.find().sort({ sort: 1 }).limit();
  }
};

const edit_hotel = (id, title, img, content, sort) => {
  return hotels.findByIdAndUpdate(id, { title, img, content, sort });
};
const delete_hotel = (id) => {
  return hotels.findByIdAndRemove(id);
};

const detail_hotel = (id) => {
  return hotels.findById(id);
};

module.exports = {
  new_hotel,
  query_hotel,
  edit_hotel,
  delete_hotel,
  detail_hotel
};
