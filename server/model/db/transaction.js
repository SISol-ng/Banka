const transactions = [
  {
    id: 400,
    createdOn: 1558717168643,
    type: 'credit', // credit or debit
    accountNumber: 5673836458,
    cashier: 105, // cashier who consummated the transaction
    amount: 127000.00,
    oldBalance: 100038.94,
    newBalance: 227038.94,
  },
  {
    id: 401,
    createdOn: 1558812226517,
    type: 'debit', // credit or debit
    accountNumber: 5673836458,
    cashier: 101, // cashier who consummated the transaction
    amount: 27000.00,
    oldBalance: 227038.94,
    newBalance: 200000.67,
  },
];

export default transactions;
