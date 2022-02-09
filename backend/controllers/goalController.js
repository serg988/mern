const asyncHandler = require('express-async-handler')

//@desc Get goals
//route GET /api/goals
//access PRIVATE
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

//@desc Set new goal
//route POST /api/goals
//access PRIVATE
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Set goal' })
})

//@desc Edit goal
//route PUT /api/goals/:id
//access PRIVATE
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})

//@desc Delete goal
//route DELETE /api/goals/:id
//access PRIVATE
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` })
})

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }
