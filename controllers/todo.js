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


function deleteById(req, res){
   Todo.remove({_id: req.params.id }, function(err, t){
     
     if(t.ok){
       res.status(200).json({todo:req.params.id, deleted: true });
     }
     if(t.result.n == 0){
       res.status(404).send();
     }
   });
}

function updateById(req, res){
  
   Todo.update({_id: req.params.id }, req.body ,function(err, t){
     if(t.ok){
     res.status(200).json(req.body);
    }
   });
   
}



function getById(req, res){
  
  Todo.findOne({_id:req.params.id}, function(err, todo){
   if(!err){
     
     res.status(200).json(todo)
   }
  });
}


function create(req, res){
   var todo = new Todo(req.body);
   todo.save(function(err, t){
     res.status(200).json(t);
   });
}


function all(req, res){
  Todo.find({}, function(err, todos){
   if(!err){
     res.status(200).json(todos)
   }
  });
}