import bcrypt from 'bcrypt';
import userModel from '../model/usersModel';
import userTable from '../model/db/user';

const userController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  createUser(req, res) {
    if (!req.body.firstName) return res.status(400).send({ message: 'First Name is required' });
    if (!req.body.lastName) return res.status(400).send({ message: 'Last name is required' });
    if (!req.body.email) return res.status(400).send({ message: 'Email address is required' });
    if (!req.body.username) return res.status(400).send({ message: 'Username is required' });
    if (!req.body.password) return res.status(400).send({ message: 'Password is required' });
    if (!req.body.confirmPassword) return res.status(400).send({ message: 'Confirm your password' });
    if (!req.body.type) return res.status(400).send({ message: 'User category is required' });
    if (!req.body.isAdmin) return res.status(400).send({ message: 'Staff category is required' });
    if (req.body.type === 'client' && req.body.isAdmin === true) return res.status(400).send({ message: 'Client can not be an admin' });
    if (req.body.password !== req.body.confirmPassword) return res.status(400).send({ message: 'Password does not match' });
    if (!/\S+@\S+\.\S+/.test(req.body.email)) {
      return res.status(400).send({ message: 'Email address in not valid' });
    }
    const verifyEmail = userTable.find(
      existingUser => existingUser.email === req.body.email,
    );
    const verifyUsername = userTable.find(
      existingUser => existingUser.username === req.body.username,
    );
    if (verifyEmail) return res.status(400).send({ message: 'Email already exist' });
    if (verifyUsername) return res.status(400).send({ message: 'Username already exist' });

    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
    const user = userModel.create(req.body);
    user.token = '45erkjherht45495783';
    return res.status(201).send({ Status: 201, Data: user });
  },

  loginUser(req, res) {
    if (!req.body.usernameEmail) return res.status(400).send({ message: 'Username/Email address is required' });
    if (!req.body.password) return res.status(400).send({ message: 'Password is required' });
    const login = req.body.usernameEmail;
    const { password } = req.body;
    const verifyUser = userTable.find(user => user.email === login || user.username === login);
    if (!verifyUser) {
      return res.status(400).send({ message: 'Incorrect Username/Email and Password combination' });
    }
    const isAuthUser = bcrypt.compareSync(password, verifyUser.password);
    if (!isAuthUser) {
      return res.status(400).send({ message: 'Incorrect Username/Email and Password combination' });
    }

    verifyUser.token = '45erkjherht45495783';
    return res.status(200).send({ Status: 200, Data: verifyUser });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} users array
   */
  getAllUsers(req, res) {
    const users = userModel.findAll();
    return res.status(200).send({ Status: 200, Data: users });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  getUser(req, res) {
    const user = userModel.findSpecific(req.params.email);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({ Status: 200, Data: user });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated user
   */
  updateUser(req, res) {
    const user = userModel.findSpecific(req.params.email);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const updatedUser = userModel.update(req.params.email, req.body);
    return res.status(200).send({ Status: 200, Data: updatedUser });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 200 and message
   */
  deleteUser(req, res) {
    const user = userModel.findSpecific(req.params.email);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    userModel.delete(req.params.email);
    return res.status(200).send({ Status: 200, message: 'User record deleted successfully' });
  },
};

export default userController;
