const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoItem = new Schema(
    {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: false
        },
        done: {
          type: Boolean,
          required: true,
          default: false
        }
    }
);
// mongoose will automatically create the collection for our DB
module.exports = mongoose.model("TodoItem", TodoItem);