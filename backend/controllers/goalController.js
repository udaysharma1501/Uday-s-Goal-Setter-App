const getGoals = (req, res) => {
    res.status(200).json({ message: "get goals" });
};
const setGoals = (req, res) => {
  res.status(200).json({ message: "set goals" });
};
const updateGoals = (req, res) => {
res.status(200).json({ message: `update goal ${req.params.id}` });
};
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};