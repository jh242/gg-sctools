import * as express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('connected to gg backend');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
