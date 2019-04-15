import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/index';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

let port = process.env.PORT || (process.argv[2] || 5000);
port = (typeof port === 'number') ? port : 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
