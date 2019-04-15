import accountModel from '../model/accountsModel';

const accountController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} status code and account object
   */
  createAccount(req, res) {
    if (!req.body.owner) return res.status(400).send({ message: 'Account owner is required' });
    if (!req.body.type) return res.status(400).send({ message: 'Account type is required' });

    const account = accountModel.create(req.body);
    return res.status(201).send({ Status: 201, Data: account });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} status code and accounts array
   */
  getAllAccounts(req, res) {
    const accounts = accountModel.findAll();
    return res.status(200).send({ Status: 200, Data: accounts });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} status code and account object
   */
  getAccount(req, res) {
    const account = accountModel.findSpecific(req.params.accountNumber);
    if (!account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    return res.status(200).send({ Status: 200, Data: account });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated account
   */
  updateAccount(req, res) {
    const account = accountModel.findSpecific(req.params.accountNumber);
    if (!account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    if (!req.body.status) return res.status(400).send({ message: 'Account status is required' });
    const updatedAccount = accountModel.update(req.params.accountNumber, req.body);
    return res.status(200).send({ Status: 200, Data: updatedAccount });
  },

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 200 and message
   */
  deleteAccount(req, res) {
    const account = accountModel.findSpecific(req.params.accountNumber);
    if (!account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    accountModel.delete(req.params.accountNumber);
    return res.status(200).send({ Status: 200, message: 'Account record deleted successfully' });
  },
};

export default accountController;
