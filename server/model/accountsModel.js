import moment from 'moment';
import accountTable from './db/account';

class AccountModel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.accountTable = accountTable;
  }

  /**
     *
     * @returns {object} account object
     */
  create(data) {
    const genetatedNumber = Math.random();
    const improvedNumber = genetatedNumber * 10000000000;
    const generatedAccountNumber = Math.floor(improvedNumber);

    const newAccount = {
      id: accountTable.length + 1,
      accountNumber: generatedAccountNumber,
      createdOn: moment.now(),
      owner: data.owner,
      type: data.type,
      status: 'active',
      balance: 0.00,
      lastDateUpdated: moment.now(),
    };
    this.accountTable.push(newAccount);
    return newAccount;
  }

  /**
     *
     * @param accountNumber
     * @returns {object} account object
     */
  findSpecific(accountNumber) {
    return this.accountTable.find(
      anAccount => anAccount.accountNumber === parseInt(accountNumber, 10),
    );
  }

  /**
     * @returns {object} returns all accounts
     */
  findAll() {
    return this.accountTable;
  }

  /**
     *
     * @param accountNumber
     * @param {object} data
     */
  update(accountNumber, data) {
    const account = this.findSpecific(accountNumber);
    const index = this.accountTable.indexOf(account);
    let newBalance = account.balance;

    if (data.creditAmount) newBalance = accountTable[index].balance + parseFloat(data.creditAmount);
    if (data.debitAmount) newBalance = accountTable[index].balance - parseFloat(data.debitAmount);

    this.accountTable[index].status = data.status || account.status;
    this.accountTable[index].balance = newBalance;
    this.accountTable[index].lastDateUpdated = moment.now();
    return this.accountTable[index];
  }

  /**
     *
     * @param accountNumber
     */
  delete(accountNumber) {
    const account = this.findSpecific(accountNumber);
    const index = this.accountTable.indexOf(account);
    this.accountTable.splice(index, 1);
    return {};
  }
}
export default new AccountModel();
