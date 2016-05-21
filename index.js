var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
 title: String,
 desc: String,
 when: Date,
 Done: Boolean
});

var Todo = mongoose.model('todo',todoSchema)


mongoose.connect('mongodb://localhost:27017/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all todo's
app.get('/api/todo', function(req, res){
  
  Todo.find({},function(err, todos){
   if(!err){
     res.status(200).json(todos)
   }
  });
  
});

// save a todo
app.post('/api/todo', function(req, res){
   var todo = new Todo(req.body);
   todo.save(function(err, t){
     res.status(200).json(t);
   });
});

app.listen(3000);