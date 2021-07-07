import transactionModel from '../model/transactionsModel';
import accountModel from '../model/accountsModel';

const transactionController = {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} status code and transaction object
   */
  createTransaction(req, res) {
    if (!req.body.type) return res.status(400).send({ message: 'Transaction type is required' });
    if (!req.body.accountNumber) return res.status(400).send({ message: 'Account number is required' });
    if (!req.body.cashier) return res.status(400).send({ message: 'Cashier ID is required' });
    if (!req.body.creditAmount && !req.body.debitAmount) return res.status(400).send({ message: 'Amount is required' });
    const account = accountModel.findSpecific(req.params.accountNumber);
    if (!account) {
      return res.status(404).send({ message: 'Account not found' });
    }
    if (account.status !== 'active') return res.status(400).send({ message: 'Account is deactivated' });
    if (parseFloat(req.body.debitAmount) > parseFloat(account.balance)) return res.status(400).send({ message: 'Insufficient balance' });

    accountModel.update(req.params.accountNumber, req.body);
    const transaction = transactionModel.create(req.params.accountNumber, req.body);
    return res.status(201).send({ Status: 201, Data: transaction });
  },

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} status code and transactions array
   */
  getAllTransactions(req, res) {
    const transactions = transactionModel.findAll();
    return res.status(200).send({ Status: 200, Data: transactions });
  },
};

export default transactionController;
