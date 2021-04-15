const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  username: { type: String, required: true },
   age: { type: Number, required: true },
   location: { type: String, required: true },
   date: { type: Date, required: true },
   photo: {
    type: String
            }
  
}, {
  timestamps: true,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;