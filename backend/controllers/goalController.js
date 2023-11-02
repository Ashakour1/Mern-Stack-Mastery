const asyncHandler = require('express-async-handler');


const Goal = require('../models/goalModel');

// @desc getGoals
// @route GET /api/goals
// @access private

const getGoals = asyncHandler(async(req, res) => {

  const goal =  await Goal.find();

  if(goal == 0){
    res.status(400)
    throw new Error("No one goals found")
  }
  res.status(200).json({
    goal,
  });
});
// @desc getGoals
// @route SET /api/goals
// @access private

const setGoals = asyncHandler(async(req, res) => {

  const goal = await Goal.create({
    text : req.body.text
  })
  if (!goal) {
    res.status(400);
    throw new Error("please add your goals");
  }
 res.status(200).json({
  messgae : 'successfully added goals'
 })
});
// @desc update Goals
// @route PUT /api/goals/:id
// @access private

const updateGoals = asyncHandler(async(req, res) => {

  const goal =  await Goal.findById(req.params.id);
  if(!goal){
    res.status(404);
    throw new Error("Goal not found")
  }
 const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
  new : true,
 });

 res.status(200).json({
  message : updatedGoal
 })
});
// @desc delete Goals
// @route DELETE /api/goals/
// @access private

const deleteGoals = asyncHandler( async(req, res) => {

  const goal = await Goal.findById(req.params.id);

  if(!goal){
    res.status(404);

    throw new Error("Goal not found")
  }

  const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
  res.status(201).json({
    message: deletedGoal
  });
});
// @desc getGoals
// @route GET /api/goals
// @access private

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
