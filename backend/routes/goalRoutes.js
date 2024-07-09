const express = require('express');
const router = express.Router();
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

// get, post, put and delete can be cascadded this way
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;