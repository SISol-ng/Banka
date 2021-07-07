import userTable from './db/user';

class UserModel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.userTable = userTable;
  }

  /**
     *
     * @returns {object} user object
     */
  create(data) {
    const newUser = {
      id: userTable.length + 1,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      phoneNumber: data.phoneNumber || '',
      password: data.password,
      type: data.type,
      isAdmin: data.isAdmin,
    };
    this.userTable.push(newUser);
    return newUser;
  }

  /**
     *
     * @param id
     * @returns {object} user object
     */
  findSpecific(email) {
    return this.userTable.find(aUser => aUser.email === email);
  }

  /**
     * @returns {object} returns all records
     */
  findAll() {
    return this.userTable;
  }

  /**
     *
     * @param id
     * @param {object} data
     * @returns {object} updated user
     */
  update(email, data) {
    const user = this.findSpecific(email);
    const index = this.userTable.indexOf(user);
    this.userTable[index].email = data.email || user.email;
    this.userTable[index].firstName = data.firstName || user.firstName;
    this.userTable[index].lastName = data.lastName || user.lastName;
    this.userTable[index].username = data.username || user.username;
    this.userTable[index].phoneNumber = data.phoneNumber || user.phoneNumber;
    this.userTable[index].password = data.password || user.password;
    this.userTable[index].type = data.type || user.type;
    this.userTable[index].isAdmin = data.isAdmin || user.isAdmin;
    return this.userTable[index];
  }

  /**
     *
     * @param id
     * @returns empty object
     */
  delete(email) {
    const user = this.findSpecific(email);
    const index = this.userTable.indexOf(user);
    this.userTable.splice(index, 1);
    return {};
  }
}
export default new UserModel();
