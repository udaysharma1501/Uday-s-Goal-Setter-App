const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userModel');

const getGoals = asyncHandler(async (req, res) => {

    // adding user specific functionality to code - so that user specified data can be fetched
    const goals = await Goal.find({user: req.user.id});

    res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) 
  {
    res.status(400);
    throw new Error("please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  });

  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('goal not found');
    }

    const user = await User.findById(req.user.id);

    if(!user){
      res.status(401);
      throw new Error("user not found");
    }

    // make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
      res.status(401);
      throw new Error("user not authorised"); 
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})

  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("goal not found");
    }

    const user = await User.findById(req.user.id);

    if(!user){
      res.status(401);
      throw new Error("user not found");
    }

    // make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
      res.status(401);
      throw new Error("user not authorised"); 
    }

    // await goal.remove();
    await Goal.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};