import express from 'express';
import router from './main/routes';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/', router)

app.listen(3000, () => console.log('Listening 3000'));
