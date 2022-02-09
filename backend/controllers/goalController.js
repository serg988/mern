//@desc Get goals
//route GET /api/goals
//access PRIVATE
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}

//@desc Set new goal
//route POST /api/goals
//access PRIVATE
const setGoal = (req, res) => {
  res.status(200).json({ message: 'Set goal' })
}

//@desc Edit goal
//route PUT /api/goals/:id
//access PRIVATE
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
}

//@desc Delete goal
//route DELETE /api/goals/:id
//access PRIVATE
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` })
}

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }
