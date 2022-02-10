//@desc Register new user
//route POST /api/users
//access PUBLIC
const registerUser = (req, res) => {
  res.json({ message: 'Register User' })
}

//@descAuthenticate a user
//route POST /api/users/login
//access PUBLIC
const loginUser = (req, res) => {
  res.json({ message: 'Login User' })
}

//@desc Get user data
//route GET /api/users/me
//access PUBLIC
const getMe = (req, res) => {
  res.json({ message: 'User data display' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
