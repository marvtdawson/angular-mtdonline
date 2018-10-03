const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: ({type: String, required: true }),
  frameworkType: ({type: String, required: true}),
  summary: ({type: String, required: true})
});

module.exports = mongoose.model('Project', projectSchema);
