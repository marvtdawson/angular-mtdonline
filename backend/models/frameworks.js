const mongoose = require('mongoose');

const frameworkSchema = mongoose.Schema({
  framework: ({type: String, required: true})
});

module.exports = mongoose.model('Framework', frameworkSchema);
