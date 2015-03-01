var mongoose   = require('mongoose')
  , userSchema = require('./schemas/user')
  , modelName  = 'Users';

module.exports = mongoose.model(modelName, userSchema);