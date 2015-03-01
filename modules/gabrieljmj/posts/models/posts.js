var mongoose   = require('mongoose')
  , postSchema = require('./schemas/post')
  , modelName  = 'Posts';

module.exports = mongoose.model(modelName, postSchema);