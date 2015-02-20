var mongoose = require('mongoose')
  , Schema   = mongoose.Schema;

module.exports = new Schema({
      title:      {type: String}
    , content:    {type: String}
    , author:     {type: Number}
    , created_at: {type: Date, default: Date.now}
});