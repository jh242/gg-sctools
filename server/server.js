require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const apiRouter = require('./routes/apiRouter');

const app = express();
const port = process.env.SERVER_PORT;

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname });
  });
}

app.get('/', (req, res) => {
  res.send('WELCOME TO GRAND GUARD');
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
