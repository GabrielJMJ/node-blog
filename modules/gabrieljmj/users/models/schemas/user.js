var Schema = require('mongoose').Schema;

module.exports = new Schema({
    username:   {type: String, required: true}
  , password:   {type: String, required: true}
  , created_at: {type: Date, default: Date.now}
});