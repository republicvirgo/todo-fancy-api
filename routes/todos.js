var express = require('express');
var router = express.Router();
const {create,index, update, destroy, complete, uncomplete} = require('../controllers/TodoController');
const { auth } = require('../middleware/auth');

router.post('/',auth,create);
router.get('/',auth,index);
router.put('/:id',auth,update);
router.get('/:id/complete',auth,complete);
router.get('/:id/uncomplete',auth,uncomplete);
router.delete('/:id',auth,destroy);

module.exports = router;
