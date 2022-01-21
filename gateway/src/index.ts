import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import cors from 'cors';
import { connectBD } from './services/database.service';

connectBD().then((msg) => {
    console.log(msg);
});

const schema = require('./schema/schema');

const app = express();

const corsOptions: cors.CorsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,

}));

app.listen(5000, () => {
    console.log('Gateway is listening on port 5000');
});
