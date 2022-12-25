import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import swaggerUI from 'swagger-ui-express';
//
import swaggerDoc from './swagger/swagger-gen.json';
import RestFacade from './rest';
import Store from './store';
import subscribe from './event/handler';

const app = express();
config();

void Store.configuration();

app.use(bodyParser.json());

app.use('/user', RestFacade.User);
app.use('/chat', RestFacade.Chat);

// swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, { explorer: true }));

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// events
subscribe();

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT ?? ''}`);
});
