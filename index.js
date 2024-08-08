import express from 'express';
import bodyParser from 'body-parser';

import userRouters from './routes/user.js';

const app = express();
const PORT = 5000;

app.use (bodyParser.json());
app.use('/user', userRouters);

app.get('/',(req , res)=>
    res.send('hello whatever')
);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));