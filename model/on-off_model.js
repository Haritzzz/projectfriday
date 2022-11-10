const mongoose = require('mongoose');

const on_off = new mongoose.Schema({
  switch : {}
});
const MyModel = mongoose.model('on-off', on_off);
module.exports = MyModel