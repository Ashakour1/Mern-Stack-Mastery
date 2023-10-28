const asyncHandler = require('express-async-handler');

// @desc getGoals
// @route GET /api/goals
// @access private

const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "get goals",
  });
});
// @desc getGoals
// @route SET /api/goals
// @access private

const setGoals = asyncHandler(async(req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("please add name");
  }
  res.json("your name is " + req.body.name);
});
// @desc update Goals
// @route PUT /api/goals/:id
// @access private

const updateGoals = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `Updated Goals ${req.params.id}`,
  });
});
// @desc delete Goals
// @route DELETE /api/goals/
// @access private

const deleteGoals = asyncHandler( async(req, res) => {
  res.status(201).json({
    message: `Deleted goals ${req.params.id}`,
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
