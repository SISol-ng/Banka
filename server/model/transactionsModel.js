import moment from 'moment';
import transactionTable from './db/transaction';
import accountTable from './db/account';

class TransactionModel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.transactionTable = transactionTable;
    this.accountTable = accountTable;
  }

  /**
     *
     * @returns {object} transaction object
     */
  create(accountNumber, data) {
    const account = this.accountTable.find(
      anAccount => anAccount.accountNumber === parseInt(accountNumber, 10),
    );
    const index = this.accountTable.indexOf(account);
    const oldAccountBalance = account.balance;
    let newAccountBalance = account.balance;

    if (data.creditAmount) {
      newAccountBalance = accountTable[index].balance + parseFloat(data.creditAmount);
    }
    if (data.debitAmount) {
      newAccountBalance = accountTable[index].balance - parseFloat(data.debitAmount);
    }

    const newTransaction = {
      id: transactionTable.length + 1,
      createdOn: moment.now(),
      type: data.type,
      accountNumber: data.accountNumber,
      cashier: data.cashier,
      amount: data.creditAmount || data.debitAmount,
      oldBalance: oldAccountBalance,
      newBalance: newAccountBalance,
    };
    this.transactionTable.push(newTransaction);
    return newTransaction;
  }

  /**
     * @returns {object} returns all transactions object
     */
  findAll() {
    return this.transactionTable;
  }
}
export default new TransactionModel();
