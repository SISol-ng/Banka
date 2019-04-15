/*
  index.js
*/

import express from 'express';
import userController from '../controller/usersController';
import accountController from '../controller/accountsController';
import transactionController from '../controller/transactionsController';

const router = express.Router();

router.get('/api/v1/users', userController.getAllUsers);
router.get('/api/v1/users/:email', userController.getUser);
router.post('/api/v1/auth/signup', userController.createUser);
router.post('/api/v1/auth/signin', userController.loginUser);
router.patch('/api/v1/users/:email', userController.updateUser);
router.delete('/api/v1/users/:email', userController.deleteUser);

router.get('/api/v1/accounts', accountController.getAllAccounts);
router.get('/api/v1/accounts/:accountNumber', accountController.getAccount);
router.post('/api/v1/accounts', accountController.createAccount);
router.patch('/api/v1/accounts/:accountNumber', accountController.updateAccount);
router.delete('/api/v1/accounts/:accountNumber', accountController.deleteAccount);

router.get('/api/v1/transactions', transactionController.getAllTransactions);
router.post('/api/v1/transactions/:accountNumber/credit', transactionController.createTransaction);
router.post('/api/v1/transactions/:accountNumber/debit', transactionController.createTransaction);

export default router;
