var router = require('express').Router();
var todoCtrls = require('../controllers/todo')

router.route('/')
  .get(todoCtrls.all)
  .post(todoCtrls.create)

router.route('/:id')
  .get(todoCtrls.getById)
  .delete(todoCtrls.deleteById)
  .patch(todoCtrls.toggleDone)
  .put(todoCtrls.updateById)


module.exports = router;