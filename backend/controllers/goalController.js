const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find();

    res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) 
  {
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text
  });

  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};