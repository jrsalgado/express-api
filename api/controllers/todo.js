var Todo = require('../models/todos');

module.exports ={
  all: all,
  create: create,
  getById: getById,
  deleteById: deleteById,
  updateById: updateById,
  toggleDone: toggleDone
}

 function toggleDone(req, res){
  Todo.update({_id: req.params.id }, {done: req.body.done} ,function(err, t){
    if(t.ok){
     res.status(200).json({ result: req.body, id: req.params.id});
    }
   });
}


function deleteById(req, res) {
  var id = req.params.id;

  new Todo({ id: id })
    .destroy()
    .then(function (result) {
      res.json(result)
    })
}

function updateById(req, res) {
  var id = req.params.id;
  var completed = req.body.completed;
  new Todo({ id: id })
    .save({ completed: completed }, { patch: true })
    .then(function (result) {
      res.json(result)
    })
}


function getById(req, res){

  Todo.findOne({_id:req.params.id}, function(err, todo){
   if(!err){

     res.status(200).json(todo)
   }
  });
}


function create(req, res) {
  var title = req.body.title;
  var completed = req.body.completed;
  var categories_id = 1;

  Todo.forge({
    title: title,
    completed: completed,
    categories_id: categories_id
  })
    .save()
    .then(function (result) {
      res.json(result)
    })
}


function all(req, res) {
  Todo
    .where({ 'categories_id': 1 })
    .orderBy('id','ASC')
    .fetchAll({withRelated:['categories']})
    .then(function (result) {
      console.log(result.toJSON())
      res.json(result)
    })
}