var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
 title: String,
 desc: String,
 when: Date,
 done: Boolean
});

var Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;
