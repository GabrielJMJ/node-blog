var mongoose = require('mongoose')
  , Schema   = mongoose.Schema;

module.exports = new Schema({
      title:      {type: String}
    , content:    {type: String}
    , author:     {type: Schema.Types.ObjectId, ref: 'Users'}
    , created_at: {type: Date, default: Date.now}
});