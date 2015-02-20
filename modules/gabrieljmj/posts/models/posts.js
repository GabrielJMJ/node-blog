var mongoose   = require('mongoose')
  , postSchema = require('./schemas/post')
  , modelName  = 'Post';

module.exports = mongoose.model(modelName, postSchema);