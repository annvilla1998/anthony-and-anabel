const mongoose = require('mongoose');

const schema = new mongoose.Schema({ firstName: String, lastName: String });

const Guest = mongoose.model("Guest", schema);

module.exports = Guest;