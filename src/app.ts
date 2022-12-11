import express from 'express';
import bodyParser from 'body-parser';
//
import RestFacade from './facade/rest';
import Store from './store';

const app = express();
const port = 3000;

void Store.configuration();

app.use(bodyParser.json());

app.use('/user', RestFacade.User);

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
