/*
    3 routes:
        1) create user
        2) login
        3) fetch user info
*/

// POST /api/users
// public access
const registerUser = (req, res) => {
    res.json({ message: "register user" });
};

// POST /api/users/login
// public access
const loginUser = (req, res) => {
    res.json({ message: "login user" });
};

// GET /api/users/me
// public access
const getMe = (req, res) => {
  res.json({ message: "user data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe
};
